import { createConnection } from "mysql2/promise";
import { createHash } from "crypto";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function hashPassword(password) {
  const bcrypt = await import("bcrypt");
  return bcrypt.default.hash(password, 10);
}

async function main() {
  const conn = await createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER || "ebombo_app",
    password: process.env.DB_PASSWORD || "Eb0mb0Bl0g2026!",
    database: process.env.DB_NAME || "ebombo_enigmasac",
    multipleStatements: true,
  });

  console.log("Connected to database");

  const sql = readFileSync(join(__dirname, "create-admin-tables.sql"), "utf8");
  await conn.query(sql);
  console.log("Tables created");

  const [existing] = await conn.query(
    "SELECT id FROM admin_users WHERE email = ?",
    ["admin@ebombo.com"]
  );

  if (existing.length === 0) {
    const hash = await hashPassword("ebombo2026admin");
    await conn.execute(
      "INSERT INTO admin_users (email, password_hash, name, role, active) VALUES (?, ?, ?, ?, ?)",
      ["admin@ebombo.com", hash, "Administrador", "super_admin", 1]
    );
    console.log("Super admin created: admin@ebombo.com");
  } else {
    console.log("Super admin already exists");
  }

  const [settingsExist] = await conn.query(
    "SELECT id FROM settings WHERE setting_key = ?",
    ["notification_emails"]
  );

  if (settingsExist.length === 0) {
    await conn.execute(
      "INSERT INTO settings (setting_key, setting_value) VALUES (?, ?)",
      ["notification_emails", JSON.stringify([])]
    );
    await conn.execute(
      "INSERT INTO settings (setting_key, setting_value) VALUES (?, ?)",
      ["smtp_config", JSON.stringify({})]
    );
    console.log("Default settings created");
  } else {
    console.log("Settings already exist");
  }

  await conn.end();
  console.log("Done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
