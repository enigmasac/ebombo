import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "./db";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const JWT_SECRET = process.env.JWT_SECRET || "ebombo-admin-jwt-secret-2026";
const JWT_EXPIRES = "24h";

export interface AuthUser {
  userId: number;
  email: string;
  role: "super_admin" | "editor";
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const token = auth.slice(7);
  try {
    const payload = jwt.verify(token, JWT_SECRET) as AuthUser;
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

export function requireSuperAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== "super_admin") {
    res.status(403).json({ error: "Forbidden" });
    return;
  }
  next();
}

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Email and password required" });
    return;
  }

  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM admin_users WHERE email = ? AND active = 1",
    [email]
  );
  if (!rows.length) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const user = rows[0];
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const payload: AuthUser = {
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });

  res.json({ token, user: payload });
});

router.get("/me", requireAuth, (req: Request, res: Response) => {
  res.json(req.user);
});

router.put("/me/password", requireAuth, async (req: Request, res: Response) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    res.status(400).json({ error: "Current and new password required" });
    return;
  }

  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT password_hash FROM admin_users WHERE id = ?",
    [req.user!.userId]
  );
  if (!rows.length) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  const valid = await bcrypt.compare(currentPassword, rows[0].password_hash);
  if (!valid) {
    res.status(401).json({ error: "Current password is incorrect" });
    return;
  }

  const hash = await bcrypt.hash(newPassword, 10);
  await pool.execute("UPDATE admin_users SET password_hash = ? WHERE id = ?", [hash, req.user!.userId]);
  res.json({ ok: true });
});

router.get("/users", requireAuth, requireSuperAdmin, async (_req: Request, res: Response) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT id, email, name, role, active, created_at, updated_at FROM admin_users ORDER BY created_at ASC"
  );
  res.json(rows);
});

router.post("/users", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  const { email, password, name, role } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Email and password required" });
    return;
  }

  const validRole = role === "super_admin" ? "super_admin" : "editor";
  const hash = await bcrypt.hash(password, 10);

  try {
    const [result] = await pool.execute<ResultSetHeader>(
      "INSERT INTO admin_users (email, password_hash, name, role) VALUES (?, ?, ?, ?)",
      [email, hash, name || "", validRole]
    );
    res.status(201).json({ id: result.insertId, email, name: name || "", role: validRole });
  } catch (err: unknown) {
    const code = (err as { code?: string }).code;
    if (code === "ER_DUP_ENTRY") {
      res.status(409).json({ error: "Email already exists" });
      return;
    }
    throw err;
  }
});

router.put("/users/:id", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  const { name, role, active } = req.body;
  const fields: string[] = [];
  const values: (string | number)[] = [];

  if (name !== undefined) {
    fields.push("name = ?");
    values.push(name);
  }
  if (role !== undefined) {
    fields.push("role = ?");
    values.push(role === "super_admin" ? "super_admin" : "editor");
  }
  if (active !== undefined) {
    fields.push("active = ?");
    values.push(active ? 1 : 0);
  }

  if (!fields.length) {
    res.status(400).json({ error: "No fields to update" });
    return;
  }

  values.push(parseInt(req.params.id as string));
  await pool.execute(`UPDATE admin_users SET ${fields.join(", ")} WHERE id = ?`, values);
  res.json({ ok: true });
});

router.put("/users/:id/password", requireAuth, requireSuperAdmin, async (req: Request, res: Response) => {
  const { password } = req.body;
  if (!password) {
    res.status(400).json({ error: "Password required" });
    return;
  }

  const hash = await bcrypt.hash(password, 10);
  await pool.execute("UPDATE admin_users SET password_hash = ? WHERE id = ?", [hash, req.params.id as string]);
  res.json({ ok: true });
});

export default router;
