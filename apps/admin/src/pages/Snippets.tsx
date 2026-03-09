import { useState, useEffect, useCallback } from "react";
import {
  getSnippets,
  createSnippet,
  updateSnippet,
  deleteSnippet,
  type Snippet,
} from "../api";

const POSITION_LABELS: Record<Snippet["position"], string> = {
  head_start: "Inicio <head>",
  head_end: "Final </head>",
  body_start: "Inicio <body>",
  body_end: "Final </body>",
};

const POSITION_BADGE_CLASS: Record<Snippet["position"], string> = {
  head_start: "badge-head",
  head_end: "badge-head",
  body_start: "badge-body",
  body_end: "badge-body",
};

interface SnippetForm {
  title: string;
  code: string;
  position: Snippet["position"];
  active: boolean;
  sort_order: number;
}

const EMPTY_FORM: SnippetForm = {
  title: "",
  code: "",
  position: "head_end",
  active: true,
  sort_order: 0,
};

export default function Snippets() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<number | "new" | null>(null);
  const [form, setForm] = useState<SnippetForm>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getSnippets({ limit: 100 });
      setSnippets(data.snippets);
    } catch {
      setError("Error al cargar los snippets");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(""), 3000);
      return () => clearTimeout(t);
    }
  }, [success]);

  function handleNew() {
    setEditing("new");
    setForm(EMPTY_FORM);
    setError("");
  }

  function handleEdit(snippet: Snippet) {
    setEditing(snippet.id);
    setForm({
      title: snippet.title,
      code: snippet.code,
      position: snippet.position,
      active: !!snippet.active,
      sort_order: snippet.sort_order,
    });
    setError("");
  }

  function handleCancel() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setError("");
  }

  async function handleSave() {
    if (!form.title.trim() || !form.code.trim()) {
      setError("El titulo y el codigo son obligatorios");
      return;
    }
    setSaving(true);
    setError("");
    try {
      if (editing === "new") {
        await createSnippet(form);
        setSuccess("Snippet creado correctamente");
      } else if (typeof editing === "number") {
        await updateSnippet(editing, form);
        setSuccess("Snippet actualizado correctamente");
      }
      setEditing(null);
      setForm(EMPTY_FORM);
      await load();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Eliminar este snippet?")) return;
    try {
      await deleteSnippet(id);
      setSuccess("Snippet eliminado");
      await load();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al eliminar");
    }
  }

  async function handleToggleActive(snippet: Snippet) {
    try {
      await updateSnippet(snippet.id, { active: !snippet.active });
      await load();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al actualizar");
    }
  }

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <div>
      <div className="page-header">
        <h1>Codigo Personalizado</h1>
        {editing === null && (
          <button className="btn btn-accent" onClick={handleNew}>
            + Nuevo snippet
          </button>
        )}
      </div>

      {success && <div className="alert-success" style={{ marginBottom: 16 }}>{success}</div>}
      {error && <div className="login-error" style={{ marginBottom: 16 }}>{error}</div>}

      {editing !== null && (
        <div className="card" style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, marginBottom: 16 }}>
            {editing === "new" ? "Nuevo snippet" : "Editar snippet"}
          </h2>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Titulo</label>
              <input
                className="input"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Ej: Google Tag Manager"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Posicion</label>
              <select
                className="select"
                value={form.position}
                onChange={(e) =>
                  setForm({ ...form, position: e.target.value as Snippet["position"] })
                }
              >
                {Object.entries(POSITION_LABELS).map(([val, label]) => (
                  <option key={val} value={val}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Orden</label>
              <input
                className="input"
                type="number"
                value={form.sort_order}
                onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })}
              />
            </div>
            <div className="form-group" style={{ display: "flex", alignItems: "end", paddingBottom: 16 }}>
              <label className="snippet-toggle-label">
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(e) => setForm({ ...form, active: e.target.checked })}
                />
                <span className="snippet-toggle-slider" />
                <span style={{ marginLeft: 8, fontSize: 14 }}>Activo</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Codigo (HTML / JavaScript)</label>
            <textarea
              className="textarea snippet-code"
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
              placeholder={"<script>\n  // Tu codigo aqui\n</script>"}
              rows={10}
            />
          </div>

          <div className="actions">
            <button className="btn btn-accent" onClick={handleSave} disabled={saving}>
              {saving ? "Guardando..." : "Guardar"}
            </button>
            <button className="btn btn-ghost" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="card">
        {snippets.length === 0 ? (
          <p style={{ color: "var(--text-secondary)", fontSize: 14, padding: 20, textAlign: "center" }}>
            No hay snippets de codigo personalizado. Crea uno para insertar scripts de rastreo u otros codigos.
          </p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Posicion</th>
                  <th>Orden</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {snippets.map((s) => (
                  <tr key={s.id}>
                    <td style={{ fontWeight: 500 }}>{s.title}</td>
                    <td>
                      <span className={`badge ${POSITION_BADGE_CLASS[s.position]}`}>
                        {POSITION_LABELS[s.position]}
                      </span>
                    </td>
                    <td>{s.sort_order}</td>
                    <td>
                      <button
                        className={`badge snippet-status-btn ${s.active ? "badge-active" : "badge-inactive"}`}
                        onClick={() => handleToggleActive(s)}
                        title={s.active ? "Click para desactivar" : "Click para activar"}
                      >
                        {s.active ? "Activo" : "Inactivo"}
                      </button>
                    </td>
                    <td>
                      <div className="actions">
                        <button className="btn btn-sm btn-ghost" onClick={() => handleEdit(s)}>
                          Editar
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(s.id)}>
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
