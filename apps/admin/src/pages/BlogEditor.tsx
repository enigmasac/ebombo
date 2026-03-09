import { useState, useEffect, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPost,
  createPost,
  updatePost,
  uploadImage,
  type BlogPost,
  type ContentBlock,
} from "../api";

const BLOCK_TYPES = ["h2", "h3", "h4", "p", "ul", "ol"] as const;

function emptyBlock(type: ContentBlock["type"] = "p"): ContentBlock {
  if (type === "ul" || type === "ol") return { type, items: [""] };
  return { type, text: "" } as ContentBlock;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function BlogEditor() {
  const { slug } = useParams<{ slug: string }>();
  const isNew = !slug || slug === "new";
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [postSlug, setPostSlug] = useState("");
  const [description, setDescription] = useState("");
  const [lang, setLang] = useState<"es" | "en">("es");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [blocks, setBlocks] = useState<ContentBlock[]>([emptyBlock("h2"), emptyBlock()]);
  const [postId, setPostId] = useState<number | null>(null);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [autoSlug, setAutoSlug] = useState(true);

  useEffect(() => {
    if (!isNew && slug) {
      getPost(slug).then((post: BlogPost) => {
        setTitle(post.title);
        setPostSlug(post.slug);
        setDescription(post.description || "");
        setLang(post.lang);
        setThumbnailUrl(post.thumbnail_url || "");
        setBlocks(
          post.body_content && post.body_content.length > 0
            ? post.body_content
            : [emptyBlock()]
        );
        setPostId(post.id);
        setAutoSlug(false);
        setLoading(false);
      });
    }
  }, [isNew, slug]);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (autoSlug) setPostSlug(slugify(value));
  }

  function updateBlock(index: number, updated: ContentBlock) {
    setBlocks((prev) => prev.map((b, i) => (i === index ? updated : b)));
  }

  function changeBlockType(index: number, newType: ContentBlock["type"]) {
    const block = blocks[index];
    if (newType === "ul" || newType === "ol") {
      const text = "text" in block ? block.text : "";
      const items = text ? text.split("\n").filter(Boolean) : [""];
      updateBlock(index, { type: newType, items });
    } else {
      const text =
        "items" in block ? block.items.join("\n") : "text" in block ? block.text : "";
      updateBlock(index, { type: newType, text } as ContentBlock);
    }
  }

  function addBlock(type: ContentBlock["type"]) {
    setBlocks((prev) => [...prev, emptyBlock(type)]);
  }

  function removeBlock(index: number) {
    if (blocks.length <= 1) return;
    setBlocks((prev) => prev.filter((_, i) => i !== index));
  }

  function moveBlock(index: number, dir: -1 | 1) {
    const target = index + dir;
    if (target < 0 || target >= blocks.length) return;
    setBlocks((prev) => {
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim() || !postSlug.trim()) return;
    setSaving(true);

    const data = {
      title: title.trim(),
      slug: postSlug.trim(),
      description: description.trim(),
      lang,
      thumbnail_url: thumbnailUrl.trim(),
      body_content: blocks,
    };

    try {
      if (isNew) {
        await createPost(data);
      } else if (postId) {
        await updatePost(postId, data);
      }
      navigate("/posts");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="loading">Cargando post...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="page-header">
        <h1>{isNew ? "Nuevo Post" : "Editar Post"}</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => navigate("/posts")}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn btn-accent"
            disabled={saving || !title.trim()}
          >
            {saving ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Título *</label>
            <input
              className="input"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Título del artículo"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Slug *</label>
            <input
              className="input"
              value={postSlug}
              onChange={(e) => {
                setPostSlug(e.target.value);
                setAutoSlug(false);
              }}
              placeholder="slug-del-articulo"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Descripción</label>
          <textarea
            className="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Breve descripción del artículo..."
            rows={2}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Idioma *</label>
            <select
              className="select"
              value={lang}
              onChange={(e) => setLang(e.target.value as "es" | "en")}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Imagen destacada</label>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                className="input"
                value={thumbnailUrl}
                onChange={(e) => setThumbnailUrl(e.target.value)}
                placeholder="URL o sube un archivo"
                style={{ flex: 1 }}
              />
              <label
                className="btn btn-ghost btn-sm"
                style={{ cursor: "pointer", whiteSpace: "nowrap" }}
              >
                {uploading ? "Subiendo..." : "Subir"}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setUploading(true);
                    try {
                      const url = await uploadImage(file);
                      setThumbnailUrl(url);
                    } catch {
                      alert("Error al subir la imagen");
                    } finally {
                      setUploading(false);
                      e.target.value = "";
                    }
                  }}
                />
              </label>
            </div>
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt="Preview"
                style={{
                  marginTop: 8,
                  maxHeight: 120,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: 18, marginBottom: 16 }}>Contenido</h2>

        <div className="block-editor">
          {blocks.map((block, idx) => (
            <div className="block-item" key={idx}>
              <select
                className="select"
                value={block.type}
                onChange={(e) =>
                  changeBlockType(idx, e.target.value as ContentBlock["type"])
                }
              >
                {BLOCK_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t.toUpperCase()}
                  </option>
                ))}
              </select>

              {"text" in block ? (
                <textarea
                  className="textarea"
                  value={block.text}
                  onChange={(e) =>
                    updateBlock(idx, { ...block, text: e.target.value } as ContentBlock)
                  }
                  placeholder={
                    block.type === "p"
                      ? "Párrafo de texto..."
                      : `Encabezado ${block.type}...`
                  }
                  rows={block.type === "p" ? 3 : 1}
                />
              ) : (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                  {block.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ display: "flex", gap: 4 }}>
                      <input
                        className="input"
                        value={item}
                        onChange={(e) => {
                          const newItems = [...block.items];
                          newItems[itemIdx] = e.target.value;
                          updateBlock(idx, { ...block, items: newItems });
                        }}
                        placeholder={`Item ${itemIdx + 1}`}
                      />
                      <button
                        type="button"
                        className="block-btn delete"
                        onClick={() => {
                          if (block.items.length <= 1) return;
                          const newItems = block.items.filter((_, i) => i !== itemIdx);
                          updateBlock(idx, { ...block, items: newItems });
                        }}
                        title="Eliminar item"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="add-block-btn"
                    style={{ alignSelf: "flex-start" }}
                    onClick={() =>
                      updateBlock(idx, { ...block, items: [...block.items, ""] })
                    }
                  >
                    + Item
                  </button>
                </div>
              )}

              <div className="block-actions">
                <button
                  type="button"
                  className="block-btn"
                  onClick={() => moveBlock(idx, -1)}
                  title="Subir"
                >
                  ↑
                </button>
                <button
                  type="button"
                  className="block-btn"
                  onClick={() => moveBlock(idx, 1)}
                  title="Bajar"
                >
                  ↓
                </button>
                <button
                  type="button"
                  className="block-btn delete"
                  onClick={() => removeBlock(idx)}
                  title="Eliminar bloque"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="add-block-bar">
          {BLOCK_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              className="add-block-btn"
              onClick={() => addBlock(t)}
            >
              + {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}
