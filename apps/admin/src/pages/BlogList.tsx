import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, deletePost, type BlogPost } from "../api";

const LIMIT = 25;

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState("");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getPosts({ page, limit: LIMIT, lang, search });
      setPosts(data.posts);
      setTotal(data.total);
    } catch {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [page, lang, search]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  function handleSearch() {
    setSearch(searchInput);
    setPage(1);
  }

  async function handleDelete(post: BlogPost) {
    if (!confirm(`¿Eliminar "${post.title}"?`)) return;
    await deletePost(post.id);
    fetchPosts();
  }

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <>
      <div className="page-header">
        <h1>Blog Posts</h1>
        <button className="btn btn-accent" onClick={() => navigate("/posts/new")}>
          + Nuevo Post
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
            {total} posts
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
                  <th>Idioma</th>
                  <th>Palabras</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <div className="truncate" title={post.title}>
                        {post.title}
                      </div>
                    </td>
                    <td>
                      <div
                        className="truncate"
                        style={{ maxWidth: 200, fontSize: 13, color: "#666" }}
                        title={post.slug}
                      >
                        {post.slug}
                      </div>
                    </td>
                    <td>
                      <span className={`badge badge-${post.lang}`}>
                        {post.lang.toUpperCase()}
                      </span>
                    </td>
                    <td>{post.word_count}</td>
                    <td style={{ fontSize: 13, whiteSpace: "nowrap" }}>
                      {post.date_published
                        ? new Date(post.date_published).toLocaleDateString()
                        : "—"}
                    </td>
                    <td>
                      <div className="actions">
                        <button
                          className="btn btn-ghost btn-sm"
                          onClick={() => navigate(`/posts/${post.slug}`)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(post)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!posts.length && (
                  <tr>
                    <td colSpan={6} style={{ textAlign: "center", padding: 40 }}>
                      No se encontraron posts
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
