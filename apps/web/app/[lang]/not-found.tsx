import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-roboto), system-ui, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "6rem", margin: 0, fontWeight: 700, color: "#7B2FBE" }}>
          404
        </h1>
        <p style={{ fontSize: "1.25rem", margin: "1rem 0 2rem", color: "#666" }}>
          Página no encontrada
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            backgroundColor: "#7B2FBE",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
