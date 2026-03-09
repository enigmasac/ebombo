import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Poppins', system-ui, sans-serif",
          background: "linear-gradient(135deg, #FBFAFF 0%, #EEE8FF 50%, #FBFAFF 100%)",
          color: "#2A2A2A",
          overflow: "hidden",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem", maxWidth: "500px" }}>
          <img
            src="https://ebombo.com/wp-content/uploads/2025/11/logoEbomboAColor.webp"
            alt="eBombo"
            width={180}
            height={48}
            style={{ margin: "0 auto 2rem" }}
          />

          <div
            style={{
              fontSize: "8rem",
              fontWeight: 800,
              lineHeight: 1,
              background: "linear-gradient(135deg, #8056EB, #F78A0A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "0.5rem",
            }}
          >
            404
          </div>

          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#8056EB",
              margin: "0 0 0.5rem",
            }}
          >
            Ups! Este evento no existe
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#444",
              margin: "0 0 2rem",
              lineHeight: 1.6,
            }}
          >
            Parece que esta pagina se fue de fiesta y no volvio.
            <br />
            Pero no te preocupes, tenemos muchos eventos esperandote.
          </p>

          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "linear-gradient(135deg, #8056EB, #220E58)",
              color: "#fff",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              boxShadow: "0 4px 20px rgba(128, 86, 235, 0.35)",
              transition: "transform 0.3s",
            }}
          >
            Volver a la fiesta
          </Link>
        </div>
      </body>
    </html>
  );
}
