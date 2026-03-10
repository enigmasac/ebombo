import { useState, useEffect, type FormEvent } from "react";
import { getSettings, updateSetting, testSmtp } from "../api";

export default function Settings() {
  const [emails, setEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [smtp, setSmtp] = useState({ host: "", port: "", user: "", pass: "", from: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const data = await getSettings();
      if (Array.isArray(data.notification_emails)) setEmails(data.notification_emails as string[]);
      if (data.smtp_config && typeof data.smtp_config === "object") {
        const cfg = data.smtp_config as Record<string, string>;
        setSmtp({ host: cfg.host || "", port: cfg.port || "", user: cfg.user || "", pass: cfg.pass || "", from: cfg.from || "" });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  function addEmail() {
    if (!newEmail || !newEmail.includes("@")) return;
    if (emails.includes(newEmail)) return;
    const updated = [...emails, newEmail];
    setEmails(updated);
    setNewEmail("");
    saveEmails(updated);
  }

  function removeEmail(email: string) {
    const updated = emails.filter((e) => e !== email);
    setEmails(updated);
    saveEmails(updated);
  }

  async function saveEmails(list: string[]) {
    try {
      await updateSetting("notification_emails", list);
      setSuccess("Emails guardados");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  async function handleSaveSmtp(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await updateSetting("smtp_config", smtp);
      setSuccess("Configuración SMTP guardada");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setSaving(false);
    }
  }

  async function handleTestSmtp() {
    setTesting(true);
    setError("");
    try {
      await testSmtp(smtp);
      setSuccess("Conexión SMTP exitosa");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error de conexión SMTP");
    } finally {
      setTesting(false);
    }
  }

  if (loading) return <div className="loading">Cargando configuración...</div>;

  return (
    <div>
      <div className="page-header">
        <h1>Configuración</h1>
      </div>

      {error && <div className="login-error" style={{ marginBottom: 16 }}>{error}</div>}
      {success && <div className="alert-success" style={{ marginBottom: 16 }}>{success}</div>}

      <div className="card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 16 }}>Emails de notificación</h3>
        <p style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
          Los leads del formulario de contacto y las reclamaciones del Libro de Reclamaciones se enviarán a estos correos.
        </p>
        <div className="pills-container">
          {emails.map((email) => (
            <span key={email} className="pill">
              {email}
              <button className="pill-remove" onClick={() => removeEmail(email)}>&times;</button>
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <input
            className="input"
            type="email"
            placeholder="nuevo@email.com"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addEmail())}
            style={{ maxWidth: 300 }}
          />
          <button className="btn btn-primary btn-sm" onClick={addEmail}>Agregar</button>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 16 }}>Configuración SMTP</h3>
        <p style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
          Configura el servidor SMTP para enviar notificaciones de leads por email.
        </p>
        <form onSubmit={handleSaveSmtp}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Host</label>
              <input className="input" placeholder="smtp.gmail.com" value={smtp.host} onChange={(e) => setSmtp({ ...smtp, host: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Puerto</label>
              <input className="input" placeholder="587" value={smtp.port} onChange={(e) => setSmtp({ ...smtp, port: e.target.value })} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Usuario</label>
              <input className="input" placeholder="user@gmail.com" value={smtp.user} onChange={(e) => setSmtp({ ...smtp, user: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <input className="input" type="password" value={smtp.pass} onChange={(e) => setSmtp({ ...smtp, pass: e.target.value })} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Remitente (From)</label>
            <input className="input" placeholder="noreply@ebombo.com" value={smtp.from} onChange={(e) => setSmtp({ ...smtp, from: e.target.value })} style={{ maxWidth: 400 }} />
          </div>
          <div className="actions" style={{ marginTop: 16 }}>
            <button type="submit" className="btn btn-primary" disabled={saving}>{saving ? "Guardando..." : "Guardar SMTP"}</button>
            <button type="button" className="btn btn-ghost" onClick={handleTestSmtp} disabled={testing || !smtp.host}>{testing ? "Probando..." : "Probar conexión"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
