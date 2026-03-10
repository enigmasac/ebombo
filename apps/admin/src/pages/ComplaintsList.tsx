import { useState, useEffect } from "react";
import { getComplaints, deleteComplaint, exportComplaints, deleteAllComplaints, getUser, type Complaint } from "../api";

const statusLabels: Record<string, string> = {
  pending: "Pendiente",
  in_progress: "En proceso",
  resolved: "Resuelto",
};

const statusBadge: Record<string, string> = {
  pending: "badge-es",
  in_progress: "badge-head",
  resolved: "badge-active",
};

export default function ComplaintsList() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
  const limit = 25;
  const user = getUser();

  async function load() {
    setLoading(true);
    try {
      const data = await getComplaints({ page, limit, status: statusFilter || undefined, search: search || undefined });
      setComplaints(data.complaints);
      setTotal(data.total);
    } catch {
      setComplaints([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [page, statusFilter]);

  function handleSearch() {
    setPage(1);
    load();
  }

  async function handleDelete(id: number) {
    if (!confirm("¿Eliminar esta reclamación?")) return;
    await deleteComplaint(id);
    load();
  }

  async function handleExport() {
    const blob = await exportComplaints();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "reclamaciones.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleDeleteAll() {
    if (!confirm("¿Seguro que deseas borrar TODAS las reclamaciones? Esta acción no se puede deshacer.")) return;
    const typed = prompt("Escribe BORRAR para confirmar:");
    if (typed !== "BORRAR") return;
    await deleteAllComplaints();
    load();
  }

  const totalPages = Math.ceil(total / limit);

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("es", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div>
      <div className="page-header">
        <h1>Libro de Reclamaciones ({total})</h1>
      </div>

      <div className="toolbar">
        <input
          className="input"
          placeholder="Buscar por nombre, email o documento..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <select className="select" style={{ maxWidth: 200 }} value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}>
          <option value="">Todos los estados</option>
          <option value="pending">Pendiente</option>
          <option value="in_progress">En proceso</option>
          <option value="resolved">Resuelto</option>
        </select>
        <button className="btn btn-ghost" onClick={handleSearch}>Buscar</button>
        <button className="btn btn-ghost" onClick={handleExport}>Descargar CSV</button>
        {user?.role === "super_admin" && (
          <button className="btn btn-danger" onClick={handleDeleteAll}>Borrar todo</button>
        )}
      </div>

      <div className="card">
        {loading ? (
          <div className="loading">Cargando...</div>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Documento</th>
                  <th>Tipo</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {complaints.length === 0 && (
                  <tr><td colSpan={7} style={{ textAlign: "center", padding: 40, color: "#888" }}>Sin reclamaciones</td></tr>
                )}
                {complaints.map((c) => (
                  <>
                    <tr key={c.id} style={{ cursor: "pointer" }} onClick={() => setExpanded(expanded === c.id ? null : c.id)}>
                      <td>#{c.id}</td>
                      <td>{c.name}</td>
                      <td>{c.document_type} {c.document_number}</td>
                      <td>
                        <span className={`badge ${c.type === "reclamo" ? "badge-es" : "badge-inactive"}`}>
                          {c.type === "reclamo" ? "Reclamo" : "Queja"}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${statusBadge[c.status] || "badge-es"}`}>
                          {statusLabels[c.status] || c.status}
                        </span>
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>{formatDate(c.created_at)}</td>
                      <td>
                        <div className="actions">
                          <button className="btn btn-sm btn-ghost" onClick={(e) => { e.stopPropagation(); setExpanded(expanded === c.id ? null : c.id); }}>
                            {expanded === c.id ? "Cerrar" : "Ver"}
                          </button>
                          {user?.role === "super_admin" && (
                            <button className="btn btn-sm btn-danger" onClick={(e) => { e.stopPropagation(); handleDelete(c.id); }}>Eliminar</button>
                          )}
                        </div>
                      </td>
                    </tr>
                    {expanded === c.id && (
                      <tr key={`${c.id}-detail`}>
                        <td colSpan={7} style={{ background: "#f9f9f9", padding: 20 }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, fontSize: 13 }}>
                            <div>
                              <strong>Telefono:</strong> {c.phone || "—"}
                            </div>
                            <div>
                              <strong>Email:</strong> {c.email || "—"}
                            </div>
                            <div>
                              <strong>Direccion:</strong> {c.address || "—"}
                            </div>
                            <div>
                              <strong>Monto reclamado:</strong> {c.amount_claimed || "—"}
                            </div>
                            {c.is_minor && (
                              <div style={{ gridColumn: "1 / -1" }}>
                                <strong>Menor de edad — Apoderado:</strong> {c.guardian_name}
                              </div>
                            )}
                            <div style={{ gridColumn: "1 / -1" }}>
                              <strong>Descripcion del servicio:</strong>
                              <p style={{ marginTop: 4, whiteSpace: "pre-wrap" }}>{c.service_description || "—"}</p>
                            </div>
                            <div style={{ gridColumn: "1 / -1" }}>
                              <strong>Detalle del reclamo/queja:</strong>
                              <p style={{ marginTop: 4, whiteSpace: "pre-wrap" }}>{c.detail}</p>
                            </div>
                            <div style={{ gridColumn: "1 / -1" }}>
                              <strong>Pedido del consumidor:</strong>
                              <p style={{ marginTop: 4, whiteSpace: "pre-wrap" }}>{c.consumer_request || "—"}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
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
