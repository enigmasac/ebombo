import { useState, useEffect } from "react";
import { getLeads, deleteLead, exportLeads, deleteAllLeads, getUser, type Lead } from "../api";

export default function LeadsList() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("");
  const [search, setSearch] = useState("");
  const limit = 25;
  const user = getUser();

  async function load() {
    setLoading(true);
    try {
      const data = await getLeads({ page, limit, source: source || undefined, search: search || undefined });
      setLeads(data.leads);
      setTotal(data.total);
    } catch {
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [page, source]);

  function handleSearch() {
    setPage(1);
    load();
  }

  async function handleDelete(id: number) {
    if (!confirm("¿Eliminar este lead?")) return;
    await deleteLead(id);
    load();
  }

  async function handleExport() {
    const blob = await exportLeads();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleDeleteAll() {
    if (!confirm("¿Seguro que deseas borrar TODOS los leads? Esta acción no se puede deshacer.")) return;
    const typed = prompt("Escribe BORRAR para confirmar:");
    if (typed !== "BORRAR") return;
    await deleteAllLeads();
    load();
  }

  const totalPages = Math.ceil(total / limit);

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("es", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div>
      <div className="page-header">
        <h1>Leads ({total})</h1>
      </div>

      <div className="toolbar">
        <input
          className="input"
          placeholder="Buscar por nombre, email o teléfono..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <select className="select" style={{ maxWidth: 200 }} value={source} onChange={(e) => { setSource(e.target.value); setPage(1); }}>
          <option value="">Todas las fuentes</option>
          <option value="contact_form">Formulario de contacto</option>
          <option value="sidebar_form">Formulario sidebar</option>
        </select>
        <button className="btn btn-ghost" onClick={handleSearch}>Buscar</button>
        <button className="btn btn-ghost" onClick={handleExport}>Descargar Excel</button>
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
                  <th>Nombre</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th>Mensaje</th>
                  <th>Interés</th>
                  <th>Fuente</th>
                  <th>Fecha</th>
                  {user?.role === "super_admin" && <th>Acciones</th>}
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 && (
                  <tr><td colSpan={8} style={{ textAlign: "center", padding: 40, color: "#888" }}>Sin leads</td></tr>
                )}
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{lead.name}</td>
                    <td>{lead.phone || "—"}</td>
                    <td>{lead.email || "—"}</td>
                    <td className="truncate">{lead.message || "—"}</td>
                    <td>{lead.interest || "—"}</td>
                    <td><span className="badge badge-en">{lead.source || "—"}</span></td>
                    <td style={{ whiteSpace: "nowrap" }}>{formatDate(lead.created_at)}</td>
                    {user?.role === "super_admin" && (
                      <td>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(lead.id)}>Eliminar</button>
                      </td>
                    )}
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
