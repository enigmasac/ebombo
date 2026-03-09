import { useState, useEffect } from "react";
import { getAuditLog, type AuditEntry } from "../api";

const ACTION_LABELS: Record<string, string> = {
  create: "Creó",
  update: "Editó",
  delete: "Eliminó",
};

const ENTITY_LABELS: Record<string, string> = {
  blog_post: "Blog Post",
  experience: "Experiencia",
};

export default function AuditLog() {
  const [entries, setEntries] = useState<AuditEntry[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [entityType, setEntityType] = useState("");
  const limit = 50;

  async function load() {
    setLoading(true);
    try {
      const data = await getAuditLog({ page, limit, entity_type: entityType || undefined });
      setEntries(data.entries);
      setTotal(data.total);
    } catch {
      setEntries([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [page, entityType]);

  const totalPages = Math.ceil(total / limit);

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("es", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div>
      <div className="page-header">
        <h1>Historial de cambios</h1>
      </div>

      <div className="toolbar">
        <select className="select" style={{ maxWidth: 200 }} value={entityType} onChange={(e) => { setEntityType(e.target.value); setPage(1); }}>
          <option value="">Todos los tipos</option>
          <option value="blog_post">Blog Posts</option>
          <option value="experience">Experiencias</option>
        </select>
      </div>

      <div className="card">
        {loading ? (
          <div className="loading">Cargando...</div>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Usuario</th>
                  <th>Acción</th>
                  <th>Tipo</th>
                  <th>Título</th>
                </tr>
              </thead>
              <tbody>
                {entries.length === 0 && (
                  <tr><td colSpan={5} style={{ textAlign: "center", padding: 40, color: "#888" }}>Sin registros</td></tr>
                )}
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td style={{ whiteSpace: "nowrap" }}>{formatDate(entry.created_at)}</td>
                    <td>{entry.user_email}</td>
                    <td><span className={`badge ${entry.action === "delete" ? "badge-inactive" : entry.action === "create" ? "badge-en" : "badge-es"}`}>{ACTION_LABELS[entry.action] || entry.action}</span></td>
                    <td>{ENTITY_LABELS[entry.entity_type] || entry.entity_type}</td>
                    <td className="truncate">{entry.entity_title || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {totalPages > 1 && (
          <div className="pagination">
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Anterior</button>
            <span>{page} / {totalPages}</span>
            <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Siguiente</button>
          </div>
        )}
      </div>
    </div>
  );
}
