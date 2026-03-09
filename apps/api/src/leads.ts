import { Router } from "express";
import type { Request, Response } from "express";
import nodemailer from "nodemailer";
import pool from "./db";
import { requireAuth, requireSuperAdmin } from "./auth";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

async function getSmtpConfig(): Promise<Record<string, string> | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT setting_value FROM settings WHERE setting_key = 'smtp_config'"
  );
  if (!rows.length) return null;
  const config = typeof rows[0].setting_value === "string"
    ? JSON.parse(rows[0].setting_value)
    : rows[0].setting_value;
  if (!config.host || !config.port) return null;
  return config;
}

async function getNotificationEmails(): Promise<string[]> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT setting_value FROM settings WHERE setting_key = 'notification_emails'"
  );
  if (!rows.length) return [];
  const val = typeof rows[0].setting_value === "string"
    ? JSON.parse(rows[0].setting_value)
    : rows[0].setting_value;
  return Array.isArray(val) ? val : [];
}

async function notifyLead(lead: { name: string; phone: string; email: string; message: string; source: string; page_url: string }): Promise<boolean> {
  const smtp = await getSmtpConfig();
  if (!smtp) return false;

  const emails = await getNotificationEmails();
  if (!emails.length) return false;

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: parseInt(smtp.port),
    secure: parseInt(smtp.port) === 465,
    auth: smtp.user ? { user: smtp.user, pass: smtp.pass } : undefined,
  });

  await transporter.sendMail({
    from: smtp.from || smtp.user,
    to: emails.join(", "),
    subject: `Nuevo lead: ${lead.name} (${lead.source})`,
    html: `
      <h2>Nuevo contacto desde ${lead.source}</h2>
      <p><strong>Nombre:</strong> ${lead.name}</p>
      <p><strong>Teléfono:</strong> ${lead.phone}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Mensaje:</strong> ${lead.message || "(sin mensaje)"}</p>
      <p><strong>Página:</strong> ${lead.page_url}</p>
    `,
  });

  return true;
}

router.post("/", async (req: Request, res: Response) => {
  const { name, phone, email, message, source, page_url, lang } = req.body;
  if (!name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }

  const validLang = lang === "en" ? "en" : "es";

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO leads (name, phone, email, message, source, page_url, lang)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, phone || "", email || "", message || "", source || "", page_url || "", validLang]
  );

  notifyLead({ name, phone: phone || "", email: email || "", message: message || "", source: source || "", page_url: page_url || "" })
    .then(async (sent) => {
      if (sent) await pool.execute("UPDATE leads SET notified = 1 WHERE id = ?", [result.insertId]);
    })
    .catch((err) => {
      console.error("Failed to send lead notification:", err);
    });

  res.status(201).json({ id: result.insertId });
});

router.get("/", requireAuth, async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 50;
  const source = req.query.source as string | undefined;
  const search = req.query.search as string | undefined;
  const offset = (page - 1) * limit;

  let where = "1=1";
  const params: (string | number)[] = [];

  if (source) {
    where += " AND source = ?";
    params.push(source);
  }
  if (search) {
    where += " AND (name LIKE ? OR email LIKE ? OR phone LIKE ?)";
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  const [countRows] = await pool.query<RowDataPacket[]>(
    `SELECT COUNT(*) as total FROM leads WHERE ${where}`,
    params
  );
  const total = countRows[0].total;

  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM leads WHERE ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
    [...params, limit, offset]
  );

  res.json({ leads: rows, total, page, limit });
});

router.delete("/:id", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  await pool.execute("DELETE FROM leads WHERE id = ?", [req.params.id as string]);
  res.json({ ok: true });
});

export default router;
