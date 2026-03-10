import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { getToken, getUser, clearToken } from "./api";
import Login from "./pages/Login";
import BlogList from "./pages/BlogList";
import BlogEditor from "./pages/BlogEditor";
import ExperienceList from "./pages/ExperienceList";
import ExperienceEditor from "./pages/ExperienceEditor";
import UsersList from "./pages/UsersList";
import LeadsList from "./pages/LeadsList";
import Settings from "./pages/Settings";
import AuditLog from "./pages/AuditLog";
import Snippets from "./pages/Snippets";
import ComplaintsList from "./pages/ComplaintsList";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getUser();

  function handleLogout() {
    clearToken();
    navigate("/");
  }

  const isSuperAdmin = user?.role === "super_admin";

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <img
            src="https://ebombo.com/wp-content/uploads/2025/11/logoEbomboAColor.webp"
            alt="eBombo"
          />
          <span>Admin</span>
        </div>
        <nav className="admin-sidebar-nav">
          <button
            className={`admin-sidebar-link ${location.pathname.startsWith("/posts") ? "active" : ""}`}
            onClick={() => navigate("/posts")}
          >
            Blog Posts
          </button>
          <button
            className={`admin-sidebar-link ${location.pathname.startsWith("/experiences") ? "active" : ""}`}
            onClick={() => navigate("/experiences")}
          >
            Experiencias
          </button>
          <button
            className={`admin-sidebar-link ${location.pathname === "/leads" ? "active" : ""}`}
            onClick={() => navigate("/leads")}
          >
            Leads
          </button>
          <button
            className={`admin-sidebar-link ${location.pathname === "/complaints" ? "active" : ""}`}
            onClick={() => navigate("/complaints")}
          >
            Reclamaciones
          </button>
          <button
            className={`admin-sidebar-link ${location.pathname === "/audit" ? "active" : ""}`}
            onClick={() => navigate("/audit")}
          >
            Historial
          </button>
          {isSuperAdmin && (
            <>
              <div className="admin-sidebar-divider" />
              <button
                className={`admin-sidebar-link ${location.pathname === "/users" ? "active" : ""}`}
                onClick={() => navigate("/users")}
              >
                Usuarios
              </button>
              <button
                className={`admin-sidebar-link ${location.pathname === "/snippets" ? "active" : ""}`}
                onClick={() => navigate("/snippets")}
              >
                Codigo
              </button>
              <button
                className={`admin-sidebar-link ${location.pathname === "/settings" ? "active" : ""}`}
                onClick={() => navigate("/settings")}
              >
                Configuración
              </button>
            </>
          )}
        </nav>
        <div className="admin-sidebar-spacer" />
        {user && (
          <div className="admin-sidebar-user">
            <span className="admin-sidebar-user-email">{user.email}</span>
            <span className="admin-sidebar-user-role">{user.role === "super_admin" ? "Super Admin" : "Editor"}</span>
          </div>
        )}
        <button className="admin-sidebar-link" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!getToken()) return <Navigate to="/" replace />;
  return <AdminLayout>{children}</AdminLayout>;
}

function SuperAdminRoute({ children }: { children: React.ReactNode }) {
  const user = getUser();
  if (!getToken()) return <Navigate to="/" replace />;
  if (user?.role !== "super_admin") return <Navigate to="/posts" replace />;
  return <AdminLayout>{children}</AdminLayout>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/posts" element={<ProtectedRoute><BlogList /></ProtectedRoute>} />
      <Route path="/posts/:slug" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>} />
      <Route path="/experiences" element={<ProtectedRoute><ExperienceList /></ProtectedRoute>} />
      <Route path="/experiences/:slug" element={<ProtectedRoute><ExperienceEditor /></ProtectedRoute>} />
      <Route path="/leads" element={<ProtectedRoute><LeadsList /></ProtectedRoute>} />
      <Route path="/complaints" element={<ProtectedRoute><ComplaintsList /></ProtectedRoute>} />
      <Route path="/audit" element={<ProtectedRoute><AuditLog /></ProtectedRoute>} />
      <Route path="/users" element={<SuperAdminRoute><UsersList /></SuperAdminRoute>} />
      <Route path="/snippets" element={<SuperAdminRoute><Snippets /></SuperAdminRoute>} />
      <Route path="/settings" element={<SuperAdminRoute><Settings /></SuperAdminRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
