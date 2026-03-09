import { createConnection } from "mysql2/promise";
import { readFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlDir = join(
  __dirname,
  "../../ebombo-export/ebombo.com/en/experiencias"
);

function extractMeta(html) {
  const get = (prop) => {
    const m = html.match(new RegExp(`${prop}"\\s+content="([^"]*)"`, "i"));
    return m ? m[1] : "";
  };
  const title = (html.match(/<title>([^<]*)<\/title>/i) || [])[1] || "";
  return {
    title: title.replace(/\s*\|\s*eBombo.*$/i, "").trim(),
    description: get("og:description"),
    image: get("og:image"),
  };
}

function extractBadge(html) {
  const m = html.match(
    /class="[^"]*elementor-icon-box-title[^"]*"[^>]*>\s*<[^>]*>([^<]+)</i
  );
  if (m) return m[1].trim();
  const m2 = html.match(
    /background-color:\s*#F3EEFF[^>]*>([^<]+)/i
  );
  if (m2) return m2[1].trim();
  return "";
}

function extractDuration(html) {
  const m = html.match(/(\d+)\s*min/i);
  return m ? `${m[1]} min` : "";
}

function extractMetaPills(html) {
  const pills = [];
  const regex =
    /class="[^"]*elementor-icon-box-title[^"]*"[^>]*>\s*<[^>]*>([^<]+)/gi;
  let m;
  while ((m = regex.exec(html))) {
    const text = m[1].trim();
    if (text && !pills.includes(text)) pills.push(text);
  }
  return pills.length > 0 ? pills : [];
}

function decodeHtml(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8230;/g, "...")
    .trim();
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function extractBodyContent(html) {
  const blocks = [];

  const mainMatch = html.match(
    /class="[^"]*elementor-widget-theme-post-content[^"]*"[\s\S]*?<div[^>]*class="[^"]*elementor-widget-container[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/i
  );

  const contentHtml = mainMatch ? mainMatch[1] : "";
  if (!contentHtml) return blocks;

  const tagRegex =
    /<(h[2-4]|p|ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = tagRegex.exec(contentHtml))) {
    const tag = m[1].toLowerCase();
    const inner = m[2];

    if (tag === "ul" || tag === "ol") {
      const items = [];
      const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      let li;
      while ((li = liRegex.exec(inner))) {
        const text = decodeHtml(stripTags(li[1]));
        if (text) items.push(text);
      }
      if (items.length > 0) blocks.push({ type: tag, items });
    } else {
      const text = decodeHtml(stripTags(inner));
      if (text) blocks.push({ type: tag, text });
    }
  }

  return blocks;
}

const dirs = readdirSync(htmlDir).filter((d) => {
  if (d === "feed" || d.includes("index.html") || d.startsWith(".")) return false;
  try {
    return statSync(join(htmlDir, d)).isDirectory();
  } catch {
    return false;
  }
});

console.log(`Found ${dirs.length} experience directories`);

const experiences = [];
for (const slug of dirs) {
  const htmlPath = join(htmlDir, slug, "index.html");
  let html;
  try {
    html = readFileSync(htmlPath, "utf-8");
  } catch {
    console.warn(`  SKIP ${slug} (no index.html)`);
    continue;
  }

  const meta = extractMeta(html);
  const badge = extractBadge(html);
  const duration = extractDuration(html);
  const metaPills = extractMetaPills(html);
  const bodyContent = extractBodyContent(html);

  experiences.push({
    slug,
    title: meta.title,
    hero_description: meta.description,
    image: meta.image,
    badge,
    duration,
    meta_pills: metaPills,
    body_content: bodyContent,
  });
}

console.log(`Parsed ${experiences.length} experiences`);

const port = parseInt(process.env.DB_PORT || "3306");
const host = process.env.DB_HOST || "127.0.0.1";
console.log(`Connecting to MySQL at ${host}:${port}...`);

const conn = await createConnection({
  host,
  port,
  user: "ebombo_app",
  password: "Eb0mb0Bl0g2026!",
  database: "ebombo_enigmasac",
});

function calcWordCount(blocks) {
  if (!blocks) return 0;
  return blocks.reduce((acc, b) => {
    if (b.text) return acc + b.text.split(/\s+/).length;
    if (b.items) return acc + b.items.join(" ").split(/\s+/).length;
    return acc;
  }, 0);
}

let inserted = 0;
let updated = 0;

for (const exp of experiences) {
  const wordCount = calcWordCount(exp.body_content);
  const [result] = await conn.execute(
    `INSERT INTO experiences (slug, title, lang, badge, duration, image, hero_description, meta_pills, body_content, word_count)
     VALUES (?, ?, 'en', ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       title=VALUES(title), lang=VALUES(lang), badge=VALUES(badge), duration=VALUES(duration),
       image=VALUES(image), hero_description=VALUES(hero_description), meta_pills=VALUES(meta_pills),
       body_content=VALUES(body_content), word_count=VALUES(word_count)`,
    [
      exp.slug,
      exp.title,
      exp.badge,
      exp.duration,
      exp.image,
      exp.hero_description,
      JSON.stringify(exp.meta_pills),
      JSON.stringify(exp.body_content),
      wordCount,
    ]
  );

  const action = result.affectedRows === 1 ? "INSERT" : "UPDATE";
  if (result.affectedRows === 1) inserted++;
  else updated++;
  console.log(
    `  ${action} ${exp.slug} | "${exp.title}" | blocks: ${exp.body_content.length} | words: ${wordCount}`
  );
}

console.log(
  `\nDone: ${inserted} inserted, ${updated} updated out of ${experiences.length} EN experiences.`
);

await conn.end();
