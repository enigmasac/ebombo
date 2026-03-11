import { Router } from "express";
import type { Request, Response } from "express";
import multer from "multer";
import path from "path";
import { randomBytes } from "crypto";
import { mkdirSync } from "fs";
import sharp from "sharp";
import pool from "./db";
import { requireAuth } from "./auth";
import { logAudit } from "./audit";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const UPLOADS_DIR = path.resolve(__dirname, "../../uploads");
mkdirSync(UPLOADS_DIR, { recursive: true });

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
    cb(null, allowed.test(path.extname(file.originalname)));
  },
});

const router = Router();

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

router.get("/posts", async (req: Request, res: Response) => {
  const lang = req.query.lang as string | undefined;
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 50;
  const search = req.query.search as string | undefined;
  const offset = (page - 1) * limit;

  let where = "1=1";
  const params: (string | number)[] = [];

  if (lang && (lang === "es" || lang === "en")) {
    where += " AND lang = ?";
    params.push(lang);
  }
  if (search) {
    where += " AND (title LIKE ? OR slug LIKE ?)";
    params.push(`%${search}%`, `%${search}%`);
  }

  const [countRows] = await pool.query<RowDataPacket[]>(
    `SELECT COUNT(*) as total FROM blog_posts WHERE ${where}`,
    params
  );
  const total = countRows[0].total;

  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT id, slug, title, description, date_published, lang, thumbnail_url, word_count, created_at, updated_at
     FROM blog_posts WHERE ${where} ORDER BY date_published DESC LIMIT ? OFFSET ?`,
    [...params, limit, offset]
  );

  res.json({ posts: rows, total, page, limit });
});

router.get("/posts/:slug", async (req: Request, res: Response) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM blog_posts WHERE slug = ?",
    [req.params.slug]
  );
  if (!rows.length) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  const post = rows[0];
  if (typeof post.body_content === "string") {
    post.body_content = JSON.parse(post.body_content);
  }
  res.json(post);
});

router.post("/posts", requireAuth, async (req: Request, res: Response) => {
  const { title, description, lang, thumbnail_url, body_content } = req.body;
  if (!title || !lang) {
    res.status(400).json({ error: "title and lang are required" });
    return;
  }
  const slug = req.body.slug || slugify(title);
  const wordCount = body_content
    ? body_content.reduce((acc: number, b: { text?: string; items?: string[] }) => {
        if (b.text) return acc + b.text.split(/\s+/).length;
        if (b.items) return acc + b.items.join(" ").split(/\s+/).length;
        return acc;
      }, 0)
    : 0;

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO blog_posts (slug, title, description, lang, thumbnail_url, word_count, body_content)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [slug, title, description || "", lang, thumbnail_url || "", wordCount, JSON.stringify(body_content || [])]
  );
  await logAudit({ userId: req.user!.userId, userEmail: req.user!.email, action: "create", entityType: "blog_post", entityId: result.insertId, entityTitle: title });
  res.status(201).json({ id: result.insertId, slug });
});

router.put("/posts/:id", requireAuth, async (req: Request, res: Response) => {
  const { title, description, lang, thumbnail_url, body_content, slug } = req.body;
  const wordCount = body_content
    ? body_content.reduce((acc: number, b: { text?: string; items?: string[] }) => {
        if (b.text) return acc + b.text.split(/\s+/).length;
        if (b.items) return acc + b.items.join(" ").split(/\s+/).length;
        return acc;
      }, 0)
    : 0;

  await pool.execute(
    `UPDATE blog_posts SET slug=?, title=?, description=?, lang=?, thumbnail_url=?, word_count=?, body_content=?
     WHERE id=?`,
    [slug, title, description || "", lang, thumbnail_url || "", wordCount, JSON.stringify(body_content || []), req.params.id]
  );
  await logAudit({ userId: req.user!.userId, userEmail: req.user!.email, action: "update", entityType: "blog_post", entityId: req.params.id as string, entityTitle: title });
  res.json({ ok: true });
});

router.delete("/posts/:id", requireAuth, async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const [rows] = await pool.query<RowDataPacket[]>("SELECT title FROM blog_posts WHERE id = ?", [id]);
  await pool.execute("DELETE FROM blog_posts WHERE id=?", [id]);
  await logAudit({ userId: req.user!.userId, userEmail: req.user!.email, action: "delete", entityType: "blog_post", entityId: id, entityTitle: rows[0]?.title });
  res.json({ ok: true });
});

router.post("/upload", requireAuth, upload.single("file"), async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }

  const filename = `${Date.now()}-${randomBytes(6).toString("hex")}.webp`;
  const outputPath = path.join(UPLOADS_DIR, filename);

  await sharp(req.file.buffer)
    .resize(1920, 1080, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);

  res.json({ url: `/api/blog/uploads/${filename}` });
});

export { UPLOADS_DIR };
export default router;
