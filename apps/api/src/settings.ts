import { Router } from "express";
import type { Request, Response } from "express";
import nodemailer from "nodemailer";
import pool from "./db";
import { requireAuth, requireSuperAdmin } from "./auth";
import type { RowDataPacket } from "mysql2";

const router = Router();

router.get("/", requireAuth, requireSuperAdmin, async (_req: Request, res: Response) => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT setting_key, setting_value FROM settings");
  const settings: Record<string, unknown> = {};
  for (const row of rows) {
    settings[row.setting_key] = typeof row.setting_value === "string"
      ? JSON.parse(row.setting_value)
      : row.setting_value;
  }
  res.json(settings);
});

router.put("/:key", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  const { value } = req.body;
  const key = req.params.key as string;

  const allowedKeys = ["notification_emails", "smtp_config"];
  if (!allowedKeys.includes(key)) {
    res.status(400).json({ error: "Invalid setting key" });
    return;
  }

  await pool.execute(
    `INSERT INTO settings (setting_key, setting_value, updated_by)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value), updated_by = VALUES(updated_by)`,
    [key, JSON.stringify(value), req.user!.userId]
  );

  res.json({ ok: true });
});

router.post("/test-smtp", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  const { host, port, user, pass, from } = req.body;
  if (!host || !port) {
    res.status(400).json({ error: "Host and port required" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port),
      secure: parseInt(port) === 465,
      auth: user ? { user, pass } : undefined,
    });

    await transporter.verify();
    res.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Connection failed";
    res.status(400).json({ error: message });
  }
});

export default router;
