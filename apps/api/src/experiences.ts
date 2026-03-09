import { Router } from "express";
import type { Request, Response } from "express";
import multer from "multer";
import path from "path";
import { randomBytes } from "crypto";
import { mkdirSync } from "fs";
import pool from "./db";
import { requireAuth } from "./auth";
import { logAudit } from "./audit";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const UPLOADS_DIR = path.resolve(__dirname, "../../uploads");
mkdirSync(UPLOADS_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${randomBytes(6).toString("hex")}${ext}`);
  },
});

const upload = multer({
  storage,
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

function calcWordCount(bodyContent: { text?: string; items?: string[] }[]): number {
  if (!bodyContent) return 0;
  return bodyContent.reduce((acc, b) => {
    if (b.text) return acc + b.text.split(/\s+/).length;
    if (b.items) return acc + b.items.join(" ").split(/\s+/).length;
    return acc;
  }, 0);
}

router.get("/", async (req: Request, res: Response) => {
  const lang = req.query.lang as string | undefined;
  const badge = req.query.badge as string | undefined;
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
  if (badge) {
    where += " AND badge = ?";
    params.push(badge);
  }
  if (search) {
    where += " AND (title LIKE ? OR slug LIKE ?)";
    params.push(`%${search}%`, `%${search}%`);
  }

  const [countRows] = await pool.query<RowDataPacket[]>(
    `SELECT COUNT(*) as total FROM experiences WHERE ${where}`,
    params
  );
  const total = countRows[0].total;

  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT id, slug, title, lang, badge, duration, image, hero_description, meta_pills, word_count, created_at, updated_at
     FROM experiences WHERE ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
    [...params, limit, offset]
  );

  for (const row of rows) {
    if (typeof row.meta_pills === "string") row.meta_pills = JSON.parse(row.meta_pills);
  }

  res.json({ experiences: rows, total, page, limit });
});

router.get("/badges", async (req: Request, res: Response) => {
  const lang = req.query.lang as string | undefined;
  let query = "SELECT DISTINCT badge FROM experiences WHERE badge != ''";
  const params: string[] = [];

  if (lang && (lang === "es" || lang === "en")) {
    query += " AND lang = ?";
    params.push(lang);
  }
  query += " ORDER BY badge ASC";

  const [rows] = await pool.query<RowDataPacket[]>(query, params);
  res.json(rows.map((r) => r.badge));
});

router.get("/:slug", async (req: Request, res: Response) => {
  const lang = req.query.lang as string | undefined;
  let query = "SELECT * FROM experiences WHERE slug = ?";
  const params: string[] = [req.params.slug as string];

  if (lang && (lang === "es" || lang === "en")) {
    query += " AND lang = ?";
    params.push(lang);
  }

  const [rows] = await pool.query<RowDataPacket[]>(query, params);
  if (!rows.length) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  const exp = rows[0];
  if (typeof exp.body_content === "string") exp.body_content = JSON.parse(exp.body_content);
  if (typeof exp.meta_pills === "string") exp.meta_pills = JSON.parse(exp.meta_pills);
  res.json(exp);
});

router.post("/", requireAuth, async (req: Request, res: Response) => {
  const { title, lang, badge, duration, image, hero_description, meta_pills, body_content } = req.body;
  if (!title || !lang) {
    res.status(400).json({ error: "title and lang are required" });
    return;
  }
  const slug = req.body.slug || slugify(title);
  const wordCount = calcWordCount(body_content);

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO experiences (slug, title, lang, badge, duration, image, hero_description, meta_pills, body_content, word_count)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      slug,
      title,
      lang,
      badge || "",
      duration || "",
      image || "",
      hero_description || "",
      JSON.stringify(meta_pills || []),
      JSON.stringify(body_content || []),
      wordCount,
    ]
  );
  await logAudit({ userId: req.user!.userId, userEmail: req.user!.email, action: "create", entityType: "experience", entityId: result.insertId, entityTitle: title });
  res.status(201).json({ id: result.insertId, slug });
});

router.put("/:id", requireAuth, async (req: Request, res: Response) => {
  const { title, lang, badge, duration, image, hero_description, meta_pills, body_content, slug } = req.body;
  const wordCount = calcWordCount(body_content);

  await pool.execute(
    `UPDATE experiences SET slug=?, title=?, lang=?, badge=?, duration=?, image=?, hero_description=?, meta_pills=?, body_content=?, word_count=?
     WHERE id=?`,
    [
      slug,
      title,
      lang,
      badge || "",
      duration || "",
      image || "",
      hero_description || "",
      JSON.stringify(meta_pills || []),
      JSON.stringify(body_content || []),
      wordCount,
      req.params.id,
    ]
  );
  await logAudit({ userId: req.user!.userId, userEmail: req.user!.email, action: "update", entityType: "experience", entityId: req.params.id as string, entityTitle: title });
  res.json({ ok: true });
});

router.delete("/:id", requireAuth, async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const [rows] = await pool.query<RowDataPacket[]>("SELECT title FROM experiences WHERE id = ?", [id]);
  await pool.execute("DELETE FROM experiences WHERE id=?", [id]);
  await logAudit({ userId: req.user!.userId, userEmail: req.user!.email, action: "delete", entityType: "experience", entityId: id, entityTitle: rows[0]?.title });
  res.json({ ok: true });
});

router.post("/upload", requireAuth, upload.single("file"), (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  res.json({ url: `/api/experiences/uploads/${req.file.filename}` });
});

export { UPLOADS_DIR };
export default router;
