import { createConnection } from "mysql2/promise";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "../apps/web/data");

function stripTypes(content) {
  return content
    .replace(/^import[^;]*;\s*/gm, "")
    .replace(/^export\s+type\s+\w+\s*=[^;]*;/gm, "")
    .replace(/^\s*\|\s*\{[^}]*\}/gm, "")
    .replace(/^type\s+\w+\s*=[^;]*;/gm, "")
    .replace(/^(export\s+)?interface\s+\w+\s*\{[^}]*\}/gms, "");
}

function loadExperiencesList() {
  const content = readFileSync(join(dataDir, "experiences.ts"), "utf-8");
  const cleaned = stripTypes(content);
  const arrayMatch = cleaned.match(
    /const\s+IMG\s*=\s*"([^"]+)"[\s\S]*?export\s+const\s+experiences[^=]*=\s*(\[[\s\S]*?\n\];)/
  );
  if (!arrayMatch) throw new Error("Could not parse experiences.ts");
  const IMG = arrayMatch[1];
  const arrayStr = arrayMatch[2];
  return new Function("IMG", `return ${arrayStr}`)(IMG);
}

function loadSimpleArray(filePath, exportName) {
  const content = readFileSync(filePath, "utf-8");
  const cleaned = stripTypes(content);
  const re = new RegExp(
    `export\\s+const\\s+${exportName}[^=]*=\\s*(\\[[\\s\\S]*\\]);?\\s*$`
  );
  const match = cleaned.match(re);
  if (!match) throw new Error(`Could not parse ${exportName} from ${filePath}`);
  return eval(match[1]);
}

const experiences = loadExperiencesList();
console.log(`Loaded ${experiences.length} experiences from experiences.ts`);

const details = loadSimpleArray(
  join(dataDir, "experienceDetails.ts"),
  "experienceDetails"
);
console.log(`Loaded ${details.length} details from experienceDetails.ts`);

const batch2 = loadSimpleArray(
  join(dataDir, "experienceContentBatch2.ts"),
  "experienceContentBatch2"
);
console.log(`Loaded ${batch2.length} entries from experienceContentBatch2.ts`);

function getBodyContent(slug) {
  const d = details.find((e) => e.slug === slug);
  if (d) return d.bodyContent || [];
  const b = batch2.find((e) => e.slug === slug);
  if (b) return b.bodyContent || [];
  return [];
}

function calcWordCount(blocks) {
  if (!blocks) return 0;
  return blocks.reduce((acc, b) => {
    if (b.text) return acc + b.text.split(/\s+/).length;
    if (b.items) return acc + b.items.join(" ").split(/\s+/).length;
    return acc;
  }, 0);
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

let inserted = 0;
let updated = 0;

for (const exp of experiences) {
  const bodyContent = getBodyContent(exp.slug);
  const wordCount = calcWordCount(bodyContent);

  const [result] = await conn.execute(
    `INSERT INTO experiences (slug, title, lang, badge, duration, image, hero_description, meta_pills, body_content, word_count)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       title=VALUES(title), lang=VALUES(lang), badge=VALUES(badge), duration=VALUES(duration),
       image=VALUES(image), hero_description=VALUES(hero_description), meta_pills=VALUES(meta_pills),
       body_content=VALUES(body_content), word_count=VALUES(word_count)`,
    [
      exp.slug,
      exp.title,
      "es",
      exp.badge || "",
      exp.duration || "",
      exp.image || "",
      exp.heroDescription || "",
      JSON.stringify(exp.metaPills || []),
      JSON.stringify(bodyContent),
      wordCount,
    ]
  );

  if (result.affectedRows === 1) {
    inserted++;
  } else {
    updated++;
  }
  console.log(`  ${result.affectedRows === 1 ? "INSERT" : "UPDATE"} ${exp.slug}`);
}

console.log(
  `\nDone: ${inserted} inserted, ${updated} updated out of ${experiences.length} experiences.`
);

await conn.end();
