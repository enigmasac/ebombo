import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { setToken, setUser, login } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await login(email, password);
      setToken(result.token);
      setUser(result.user);
      navigate("/posts");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error de conexión";
      setError(msg === "Invalid credentials" ? "Credenciales incorrectas" : msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-logo">
          <img
            src="https://ebombo.com/wp-content/uploads/2025/11/logoEbomboAColor.webp"
            alt="eBombo"
          />
        </div>
        <h1>Panel de Administración</h1>
        <p className="login-subtitle">Gestión del blog eBombo</p>
        {error && <div className="login-error">{error}</div>}
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input"
            placeholder="admin@ebombo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="input"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-accent"
          style={{ width: "100%", justifyContent: "center", marginTop: 8 }}
          disabled={loading || !email || !password}
        >
          {loading ? "Verificando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
}
