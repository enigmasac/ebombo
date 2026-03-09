import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "ebombo_app",
  password: process.env.DB_PASSWORD || "Eb0mb0Bl0g2026!",
  database: process.env.DB_NAME || "ebombo_enigmasac",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
