import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getExperiences, deleteExperience, type Experience } from "../api";

const LIMIT = 25;

export default function ExperienceList() {
  const [items, setItems] = useState<Experience[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState("");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getExperiences({ page, limit: LIMIT, lang, search });
      setItems(data.experiences);
      setTotal(data.total);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [page, lang, search]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  function handleSearch() {
    setSearch(searchInput);
    setPage(1);
  }

  async function handleDelete(exp: Experience) {
    if (!confirm(`¿Eliminar "${exp.title}"?`)) return;
    await deleteExperience(exp.id);
    fetchItems();
  }

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <>
      <div className="page-header">
        <h1>Experiencias</h1>
        <button className="btn btn-accent" onClick={() => navigate("/experiences/new")}>
          + Nueva Experiencia
        </button>
      </div>

      <div className="card">
        <div className="toolbar">
          <input
            className="input"
            placeholder="Buscar por título o slug..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="btn btn-ghost btn-sm" onClick={handleSearch}>
            Buscar
          </button>
          <select
            className="select"
            style={{ width: 140 }}
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              setPage(1);
            }}
          >
            <option value="">Todos</option>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <span style={{ marginLeft: "auto", fontSize: 13, color: "#666" }}>
            {total} experiencias
          </span>
        </div>

        {loading ? (
          <div className="loading">Cargando...</div>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Slug</th>
                  <th>Badge</th>
                  <th>Idioma</th>
                  <th>Duración</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {items.map((exp) => (
                  <tr key={exp.id}>
                    <td>
                      <div className="truncate" title={exp.title}>
                        {exp.title}
                      </div>
                    </td>
                    <td>
                      <div
                        className="truncate"
                        style={{ maxWidth: 200, fontSize: 13, color: "#666" }}
                        title={exp.slug}
                      >
                        {exp.slug}
                      </div>
                    </td>
                    <td>
                      <span className="badge">{exp.badge}</span>
                    </td>
                    <td>
                      <span className={`badge badge-${exp.lang}`}>
                        {exp.lang.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ fontSize: 13, whiteSpace: "nowrap" }}>{exp.duration}</td>
                    <td>
                      <div className="actions">
                        <button
                          className="btn btn-ghost btn-sm"
                          onClick={() => navigate(`/experiences/${exp.slug}`)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(exp)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!items.length && (
                  <tr>
                    <td colSpan={6} style={{ textAlign: "center", padding: 40 }}>
                      No se encontraron experiencias
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
              Anterior
            </button>
            <span>
              Página {page} de {totalPages}
            </span>
            <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
              Siguiente
            </button>
          </div>
        )}
      </div>
    </>
  );
}
