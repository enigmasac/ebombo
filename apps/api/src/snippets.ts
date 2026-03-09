import { Router } from "express";
import type { Request, Response } from "express";
import pool from "./db";
import { requireAuth, requireSuperAdmin } from "./auth";
import { logAudit } from "./audit";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const VALID_POSITIONS = ["head_start", "head_end", "body_start", "body_end"] as const;
type SnippetPosition = (typeof VALID_POSITIONS)[number];

const router = Router();

router.get("/active", async (_req: Request, res: Response) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT code, position FROM custom_snippets WHERE active = 1 ORDER BY sort_order ASC, id ASC"
  );

  const grouped: Record<SnippetPosition, string[]> = {
    head_start: [],
    head_end: [],
    body_start: [],
    body_end: [],
  };

  for (const row of rows) {
    const pos = row.position as SnippetPosition;
    if (grouped[pos]) grouped[pos].push(row.code);
  }

  res.json(grouped);
});

router.get("/", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 50;
  const offset = (page - 1) * limit;

  const [countRows] = await pool.query<RowDataPacket[]>(
    "SELECT COUNT(*) as total FROM custom_snippets"
  );
  const total = countRows[0].total;

  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM custom_snippets ORDER BY sort_order ASC, id ASC LIMIT ? OFFSET ?",
    [limit, offset]
  );

  res.json({ snippets: rows, total, page, limit });
});

router.post("/", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  const { title, code, position, active, sort_order } = req.body;

  if (!title || !code) {
    res.status(400).json({ error: "Title and code are required" });
    return;
  }

  const pos = VALID_POSITIONS.includes(position) ? position : "head_end";

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO custom_snippets (title, code, position, active, sort_order)
     VALUES (?, ?, ?, ?, ?)`,
    [title, code, pos, active !== undefined ? (active ? 1 : 0) : 1, sort_order || 0]
  );

  await logAudit({
    userId: req.user!.userId,
    userEmail: req.user!.email,
    action: "create",
    entityType: "custom_snippet",
    entityId: result.insertId,
    entityTitle: title,
  });

  res.status(201).json({ id: result.insertId });
});

router.put("/:id", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  const { title, code, position, active, sort_order } = req.body;
  const id = req.params.id as string;

  const fields: string[] = [];
  const values: (string | number)[] = [];

  if (title !== undefined) {
    fields.push("title = ?");
    values.push(title);
  }
  if (code !== undefined) {
    fields.push("code = ?");
    values.push(code);
  }
  if (position !== undefined && VALID_POSITIONS.includes(position)) {
    fields.push("position = ?");
    values.push(position);
  }
  if (active !== undefined) {
    fields.push("active = ?");
    values.push(active ? 1 : 0);
  }
  if (sort_order !== undefined) {
    fields.push("sort_order = ?");
    values.push(sort_order);
  }

  if (!fields.length) {
    res.status(400).json({ error: "No fields to update" });
    return;
  }

  values.push(parseInt(id));
  await pool.execute(`UPDATE custom_snippets SET ${fields.join(", ")} WHERE id = ?`, values);

  await logAudit({
    userId: req.user!.userId,
    userEmail: req.user!.email,
    action: "update",
    entityType: "custom_snippet",
    entityId: id,
    entityTitle: title || undefined,
  });

  res.json({ ok: true });
});

router.delete("/:id", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const [rows] = await pool.query<RowDataPacket[]>("SELECT title FROM custom_snippets WHERE id = ?", [id]);
  await pool.execute("DELETE FROM custom_snippets WHERE id = ?", [id]);

  await logAudit({
    userId: req.user!.userId,
    userEmail: req.user!.email,
    action: "delete",
    entityType: "custom_snippet",
    entityId: id,
    entityTitle: rows[0]?.title,
  });

  res.json({ ok: true });
});

export default router;
