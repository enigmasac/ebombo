import { useState, useEffect, type FormEvent } from "react";
import { getUsers, createUser, updateUser, resetUserPassword, type AdminUser } from "../api";

export default function UsersList() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [resetId, setResetId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("editor");

  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");

  const [resetPassword, setResetPassword] = useState("");

  async function load() {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await createUser({ email: newEmail, password: newPassword, name: newName, role: newRole });
      setShowCreate(false);
      setNewEmail("");
      setNewPassword("");
      setNewName("");
      setNewRole("editor");
      setSuccess("Usuario creado");
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  async function handleUpdate(e: FormEvent) {
    e.preventDefault();
    if (!editingId) return;
    setError("");
    try {
      await updateUser(editingId, { name: editName, role: editRole });
      setEditingId(null);
      setSuccess("Usuario actualizado");
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  async function handleToggleActive(user: AdminUser) {
    try {
      await updateUser(user.id, { active: !user.active });
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  async function handleResetPassword(e: FormEvent) {
    e.preventDefault();
    if (!resetId) return;
    setError("");
    try {
      await resetUserPassword(resetId, resetPassword);
      setResetId(null);
      setResetPassword("");
      setSuccess("Contraseña actualizada");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  function startEdit(user: AdminUser) {
    setEditingId(user.id);
    setEditName(user.name);
    setEditRole(user.role);
    setResetId(null);
    setShowCreate(false);
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  if (loading) return <div className="loading">Cargando usuarios...</div>;

  return (
    <div>
      <div className="page-header">
        <h1>Usuarios</h1>
        <button className="btn btn-accent" onClick={() => { setShowCreate(!showCreate); setEditingId(null); setResetId(null); }}>
          {showCreate ? "Cancelar" : "+ Nuevo usuario"}
        </button>
      </div>

      {error && <div className="login-error" style={{ marginBottom: 16 }}>{error}</div>}
      {success && <div className="alert-success" style={{ marginBottom: 16 }}>{success}</div>}

      {showCreate && (
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ marginBottom: 16 }}>Crear usuario</h3>
          <form onSubmit={handleCreate}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input className="input" value={newName} onChange={(e) => setNewName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input className="input" type="email" required value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Contraseña *</label>
                <input className="input" type="password" required minLength={6} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Rol</label>
                <select className="select" value={newRole} onChange={(e) => setNewRole(e.target.value)}>
                  <option value="editor">Editor</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Crear</button>
          </form>
        </div>
      )}

      {editingId && (
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ marginBottom: 16 }}>Editar usuario</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input className="input" value={editName} onChange={(e) => setEditName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Rol</label>
                <select className="select" value={editRole} onChange={(e) => setEditRole(e.target.value)}>
                  <option value="editor">Editor</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </div>
            </div>
            <div className="actions">
              <button type="submit" className="btn btn-primary">Guardar</button>
              <button type="button" className="btn btn-ghost" onClick={() => setEditingId(null)}>Cancelar</button>
            </div>
          </form>
        </div>
      )}

      {resetId && (
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ marginBottom: 16 }}>Resetear contraseña</h3>
          <form onSubmit={handleResetPassword}>
            <div className="form-group">
              <label className="form-label">Nueva contraseña</label>
              <input className="input" type="password" required minLength={6} value={resetPassword} onChange={(e) => setResetPassword(e.target.value)} />
            </div>
            <div className="actions">
              <button type="submit" className="btn btn-primary">Actualizar</button>
              <button type="button" className="btn btn-ghost" onClick={() => setResetId(null)}>Cancelar</button>
            </div>
          </form>
        </div>
      )}

      <div className="card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.name || "—"}</td>
                  <td>{u.email}</td>
                  <td><span className={`badge ${u.role === "super_admin" ? "badge-es" : "badge-en"}`}>{u.role === "super_admin" ? "Super Admin" : "Editor"}</span></td>
                  <td><span className={`badge ${u.active ? "badge-en" : "badge-inactive"}`}>{u.active ? "Activo" : "Inactivo"}</span></td>
                  <td>
                    <div className="actions">
                      <button className="btn btn-sm btn-ghost" onClick={() => startEdit(u)}>Editar</button>
                      <button className="btn btn-sm btn-ghost" onClick={() => { setResetId(u.id); setEditingId(null); setShowCreate(false); }}>Contraseña</button>
                      <button className="btn btn-sm btn-ghost" onClick={() => handleToggleActive(u)}>
                        {u.active ? "Desactivar" : "Activar"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
