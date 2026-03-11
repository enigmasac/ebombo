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

interface ComplaintPayload {
  name: string;
  document_type: string;
  document_number: string;
  address: string;
  phone: string;
  email: string;
  is_minor: boolean;
  guardian_name: string;
  type: string;
  service_description: string;
  amount_claimed: string;
  detail: string;
  consumer_request: string;
}

async function notifyComplaint(complaint: ComplaintPayload & { id: number }): Promise<boolean> {
  const smtp = await getSmtpConfig();
  if (!smtp) {
    console.warn("[complaints] No SMTP config found in settings table — skipping email notification");
    return false;
  }

  const emails = await getNotificationEmails();
  if (!emails.length) {
    console.warn("[complaints] No notification emails configured — skipping email notification");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: parseInt(smtp.port),
    secure: parseInt(smtp.port) === 465,
    auth: smtp.user ? { user: smtp.user, pass: smtp.pass } : undefined,
  });

  const tipoLabel = complaint.type === "reclamo" ? "Reclamo" : "Queja";

  await transporter.sendMail({
    from: smtp.from || smtp.user,
    to: emails.join(", "),
    subject: `Libro de Reclamaciones: Nueva ${tipoLabel} #${complaint.id}`,
    html: `
      <h2>Nueva ${tipoLabel} - Libro de Reclamaciones</h2>
      <p><strong>ID:</strong> ${complaint.id}</p>
      <p><strong>Nombre:</strong> ${complaint.name}</p>
      <p><strong>Documento:</strong> ${complaint.document_type} ${complaint.document_number}</p>
      <p><strong>Direccion:</strong> ${complaint.address || "(no especificado)"}</p>
      <p><strong>Telefono:</strong> ${complaint.phone || "(no especificado)"}</p>
      <p><strong>Email:</strong> ${complaint.email || "(no especificado)"}</p>
      ${complaint.is_minor ? `<p><strong>Menor de edad - Apoderado:</strong> ${complaint.guardian_name}</p>` : ""}
      <p><strong>Tipo:</strong> ${tipoLabel}</p>
      <p><strong>Descripcion del servicio:</strong> ${complaint.service_description || "(no especificado)"}</p>
      <p><strong>Monto reclamado:</strong> ${complaint.amount_claimed || "(no especificado)"}</p>
      <p><strong>Detalle:</strong> ${complaint.detail}</p>
      <p><strong>Pedido del consumidor:</strong> ${complaint.consumer_request || "(no especificado)"}</p>
    `,
  });

  console.log(`[complaints] Notification sent to ${emails.join(", ")} for complaint #${complaint.id}`);
  return true;
}

router.post("/", async (req: Request, res: Response) => {
  const {
    name, document_type, document_number, address, phone, email,
    is_minor, guardian_name, type, service_description,
    amount_claimed, detail, consumer_request,
  } = req.body;

  if (!name || !document_number || !detail) {
    res.status(400).json({ error: "name, document_number and detail are required" });
    return;
  }

  const validType = type === "queja" ? "queja" : "reclamo";

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO complaints (name, document_type, document_number, address, phone, email, is_minor, guardian_name, type, service_description, amount_claimed, detail, consumer_request)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      name,
      document_type || "DNI",
      document_number,
      address || "",
      phone || "",
      email || "",
      is_minor ? 1 : 0,
      guardian_name || "",
      validType,
      service_description || "",
      amount_claimed || "",
      detail,
      consumer_request || "",
    ]
  );

  const complaintData = {
    id: result.insertId, name, document_type: document_type || "DNI",
    document_number, address: address || "", phone: phone || "",
    email: email || "", is_minor: !!is_minor, guardian_name: guardian_name || "",
    type: validType, service_description: service_description || "",
    amount_claimed: amount_claimed || "", detail, consumer_request: consumer_request || "",
  };

  notifyComplaint(complaintData)
    .then(async (sent) => {
      if (sent) await pool.execute("UPDATE complaints SET notified = 1 WHERE id = ?", [result.insertId]);
    })
    .catch((err) => {
      console.error("Failed to send complaint notification:", err);
    });

  res.status(201).json({ id: result.insertId });
});

router.get("/", requireAuth, async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 50;
  const status = req.query.status as string | undefined;
  const search = req.query.search as string | undefined;
  const offset = (page - 1) * limit;

  let where = "1=1";
  const params: (string | number)[] = [];

  if (status) {
    where += " AND status = ?";
    params.push(status);
  }
  if (search) {
    where += " AND (name LIKE ? OR email LIKE ? OR document_number LIKE ?)";
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  const [countRows] = await pool.query<RowDataPacket[]>(
    `SELECT COUNT(*) as total FROM complaints WHERE ${where}`,
    params
  );
  const total = countRows[0].total;

  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM complaints WHERE ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
    [...params, limit, offset]
  );

  res.json({ complaints: rows, total, page, limit });
});

router.get("/export", requireAuth, async (_req: Request, res: Response) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT name, document_type, document_number, phone, email, type, detail, status, created_at FROM complaints ORDER BY created_at DESC"
  );

  const header = "Nombre,TipoDoc,NumDoc,Telefono,Email,Tipo,Detalle,Estado,Fecha";
  const csvRows = rows.map((r) => {
    const fields = [r.name, r.document_type, r.document_number, r.phone, r.email, r.type, r.detail, r.status, r.created_at];
    return fields.map((f) => `"${String(f ?? "").replace(/"/g, '""')}"`).join(",");
  });
  const csv = [header, ...csvRows].join("\n");

  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", "attachment; filename=complaints.csv");
  res.send(csv);
});

router.delete("/", requireAuth, requireSuperAdmin, async (_req: Request, res: Response) => {
  await pool.execute("DELETE FROM complaints");
  res.json({ ok: true });
});

router.delete("/:id", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  await pool.execute("DELETE FROM complaints WHERE id = ?", [req.params.id as string]);
  res.json({ ok: true });
});

export default router;
