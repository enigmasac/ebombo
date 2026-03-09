import { Router } from "express";
import type { Request, Response } from "express";
import pool from "./db";
import { requireAuth } from "./auth";
import type { RowDataPacket } from "mysql2";

interface AuditEntry {
  userId: number;
  userEmail: string;
  action: string;
  entityType: string;
  entityId?: string | number;
  entityTitle?: string;
  details?: Record<string, unknown>;
}

export async function logAudit(entry: AuditEntry) {
  await pool.execute(
    `INSERT INTO audit_log (user_id, user_email, action, entity_type, entity_id, entity_title, details)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      entry.userId,
      entry.userEmail,
      entry.action,
      entry.entityType,
      entry.entityId != null ? String(entry.entityId) : null,
      entry.entityTitle || null,
      entry.details ? JSON.stringify(entry.details) : null,
    ]
  );
}

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 50;
  const entityType = req.query.entity_type as string | undefined;
  const userId = req.query.user_id as string | undefined;
  const offset = (page - 1) * limit;

  let where = "1=1";
  const params: (string | number)[] = [];

  if (entityType) {
    where += " AND entity_type = ?";
    params.push(entityType);
  }
  if (userId) {
    where += " AND user_id = ?";
    params.push(parseInt(userId));
  }

  const [countRows] = await pool.query<RowDataPacket[]>(
    `SELECT COUNT(*) as total FROM audit_log WHERE ${where}`,
    params
  );
  const total = countRows[0].total;

  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM audit_log WHERE ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
    [...params, limit, offset]
  );

  for (const row of rows) {
    if (typeof row.details === "string") row.details = JSON.parse(row.details);
  }

  res.json({ entries: rows, total, page, limit });
});

export default router;
