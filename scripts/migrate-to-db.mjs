import { createConnection } from "mysql2/promise";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadPosts(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const cleaned = content
    .replace(/^import[^;]*;\s*/gm, "")
    .replace(/^export const \w+:\s*\w+\[\]\s*=\s*/m, "")
    .replace(/;\s*$/, "");
  return eval(cleaned);
}

const dataDir = join(__dirname, "../apps/web/data/blog");
const allPosts = [
  ...loadPosts(join(dataDir, "posts-es-1.ts")),
  ...loadPosts(join(dataDir, "posts-es-2.ts")),
  ...loadPosts(join(dataDir, "posts-es-3.ts")),
  ...loadPosts(join(dataDir, "posts-en-1.ts")),
  ...loadPosts(join(dataDir, "posts-en-2.ts")),
];

const port = parseInt(process.env.DB_PORT || "33099");
const host = process.env.DB_HOST || "127.0.0.1";

const conn = await createConnection({
  host,
  port,
  user: "ebombo_app",
  password: "Eb0mb0Bl0g2026!",
  database: "ebombo_enigmasac",
});

function toMySQLDatetime(iso) {
  return new Date(iso).toISOString().slice(0, 19).replace("T", " ");
}

console.log(`Migrating ${allPosts.length} posts to ${host}:${port}...`);

let ok = 0;
let errors = 0;

for (const post of allPosts) {
  try {
    await conn.execute(
      `INSERT INTO blog_posts (slug, title, description, date_published, lang, thumbnail_url, word_count, body_content)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE title=VALUES(title), description=VALUES(description),
       date_published=VALUES(date_published), lang=VALUES(lang), thumbnail_url=VALUES(thumbnail_url),
       word_count=VALUES(word_count), body_content=VALUES(body_content)`,
      [
        post.slug,
        post.title,
        post.description,
        toMySQLDatetime(post.datePublished),
        post.lang,
        post.thumbnailUrl,
        post.wordCount,
        JSON.stringify(post.bodyContent),
      ]
    );
    ok++;
  } catch (e) {
    errors++;
    console.error(`  ERROR ${post.slug}: ${e.message}`);
  }
}

console.log(`Done: ${ok} ok, ${errors} errors`);
await conn.end();
