import { createConnection } from "mysql2/promise";
import { readFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const DIRS = [
  { path: join(__dirname, "../../ebombo-export/ebombo.com/blog"), lang: "es" },
  { path: join(__dirname, "../../ebombo-export/ebombo.com/en/blog"), lang: "en" },
];

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
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8230;/g, "...")
    .replace(/&#\d+;/g, "")
    .trim();
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function extractMeta(html) {
  const get = (prop) => {
    const m = html.match(new RegExp(`${prop}"\\s+content="([^"]*)"`, "i"));
    return m ? decodeHtml(m[1]) : "";
  };

  const title = (html.match(/<title>([^<]*)<\/title>/i) || [])[1] || "";
  const cleanTitle = decodeHtml(title.replace(/\s*\|?\s*eBombo\s*Internacional.*$/i, "").trim());

  const rawTime = get("article:published_time");
  let publishedTime = null;
  if (rawTime) {
    const d = new Date(rawTime);
    if (!isNaN(d.getTime())) {
      publishedTime = d.toISOString().slice(0, 19).replace("T", " ");
    }
  }

  let wordCount = 0;
  const ldMatch = html.match(/"wordCount"\s*:\s*(\d+)/);
  if (ldMatch) wordCount = parseInt(ldMatch[1]);

  return {
    title: cleanTitle,
    description: get("og:description"),
    thumbnail_url: get("og:image"),
    date_published: publishedTime || null,
    word_count: wordCount,
  };
}

function extractBodyContent(html) {
  const blocks = [];

  const mainMatch = html.match(
    /class="[^"]*elementor-widget-theme-post-content[^"]*"[\s\S]*?<div[^>]*class="[^"]*elementor-widget-container[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/i
  );

  const contentHtml = mainMatch ? mainMatch[1] : "";
  if (!contentHtml) return blocks;

  const tagRegex = /<(h[2-4]|p|ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi;
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

await conn.execute(`ALTER TABLE blog_posts DROP INDEX IF EXISTS slug`);
await conn.execute(`ALTER TABLE blog_posts DROP INDEX IF EXISTS idx_slug_lang`);
await conn.execute(`CREATE UNIQUE INDEX idx_slug_lang ON blog_posts (slug, lang)`);
console.log("Ensured UNIQUE(slug, lang) index on blog_posts");

let totalInserted = 0;
let totalUpdated = 0;

for (const { path: blogDir, lang } of DIRS) {
  let dirs;
  try {
    dirs = readdirSync(blogDir).filter((d) => {
      if (d === "feed" || d === "page" || d.includes("index.html") || d.startsWith(".")) return false;
      try {
        return statSync(join(blogDir, d)).isDirectory();
      } catch {
        return false;
      }
    });
  } catch {
    console.warn(`  SKIP ${blogDir} (not found)`);
    continue;
  }

  console.log(`\nFound ${dirs.length} ${lang.toUpperCase()} blog directories in ${blogDir}`);

  let inserted = 0;
  let updated = 0;

  for (const slug of dirs) {
    const htmlPath = join(blogDir, slug, "index.html");
    let html;
    try {
      html = readFileSync(htmlPath, "utf-8");
    } catch {
      continue;
    }

    const meta = extractMeta(html);
    if (!meta.title) continue;

    const bodyContent = extractBodyContent(html);
    const wordCount = meta.word_count || bodyContent.reduce((acc, b) => {
      if (b.text) return acc + b.text.split(/\s+/).length;
      if (b.items) return acc + b.items.join(" ").split(/\s+/).length;
      return acc;
    }, 0);

    const [result] = await conn.execute(
      `INSERT INTO blog_posts (slug, title, description, date_published, lang, thumbnail_url, word_count, body_content)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         title=VALUES(title), description=VALUES(description), date_published=VALUES(date_published),
         lang=VALUES(lang), thumbnail_url=VALUES(thumbnail_url), word_count=VALUES(word_count),
         body_content=VALUES(body_content)`,
      [
        slug,
        meta.title,
        meta.description,
        meta.date_published,
        lang,
        meta.thumbnail_url,
        wordCount,
        JSON.stringify(bodyContent),
      ]
    );

    if (result.affectedRows === 1) inserted++;
    else updated++;
  }

  console.log(`  ${lang.toUpperCase()}: ${inserted} inserted, ${updated} updated`);
  totalInserted += inserted;
  totalUpdated += updated;
}

console.log(`\nDone: ${totalInserted} inserted, ${totalUpdated} updated total.`);
await conn.end();
