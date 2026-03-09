import express from "express";
import cors from "cors";
import path from "path";
import blogRouter, { UPLOADS_DIR } from "./blog";
import experiencesRouter, { UPLOADS_DIR as EXP_UPLOADS_DIR } from "./experiences";
import authRouter from "./auth";
import auditRouter from "./audit";
import leadsRouter from "./leads";
import settingsRouter from "./settings";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRouter);
app.use("/api/audit", auditRouter);
app.use("/api/leads", leadsRouter);
app.use("/api/settings", settingsRouter);

app.use("/api/blog", blogRouter);
app.use("/api/blog/uploads", express.static(UPLOADS_DIR));

app.use("/api/experiences", experiencesRouter);
app.use("/api/experiences/uploads", express.static(EXP_UPLOADS_DIR));

const ADMIN_DIR = path.resolve(__dirname, "../../admin/dist");
app.use("/admin", express.static(ADMIN_DIR));
app.get("/admin/*", (_req, res) => {
  res.sendFile(path.join(ADMIN_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
