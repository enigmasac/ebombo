import { useState, useEffect, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getExperience,
  createExperience,
  updateExperience,
  uploadExperienceImage,
  type Experience,
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

export default function ExperienceEditor() {
  const { slug } = useParams<{ slug: string }>();
  const isNew = !slug || slug === "new";
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [expSlug, setExpSlug] = useState("");
  const [lang, setLang] = useState<"es" | "en">("es");
  const [badge, setBadge] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [metaPills, setMetaPills] = useState<string[]>([""]);
  const [blocks, setBlocks] = useState<ContentBlock[]>([emptyBlock("h2"), emptyBlock()]);
  const [expId, setExpId] = useState<number | null>(null);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [autoSlug, setAutoSlug] = useState(true);

  useEffect(() => {
    if (!isNew && slug) {
      getExperience(slug).then((exp: Experience) => {
        setTitle(exp.title);
        setExpSlug(exp.slug);
        setLang(exp.lang);
        setBadge(exp.badge || "");
        setDuration(exp.duration || "");
        setImage(exp.image || "");
        setHeroDescription(exp.hero_description || "");
        setMetaPills(
          exp.meta_pills && exp.meta_pills.length > 0 ? exp.meta_pills : [""]
        );
        setBlocks(
          exp.body_content && exp.body_content.length > 0
            ? exp.body_content
            : [emptyBlock()]
        );
        setExpId(exp.id);
        setAutoSlug(false);
        setLoading(false);
      });
    }
  }, [isNew, slug]);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (autoSlug) setExpSlug(slugify(value));
  }

  function updatePill(index: number, value: string) {
    setMetaPills((prev) => prev.map((p, i) => (i === index ? value : p)));
  }

  function addPill() {
    setMetaPills((prev) => [...prev, ""]);
  }

  function removePill(index: number) {
    if (metaPills.length <= 1) return;
    setMetaPills((prev) => prev.filter((_, i) => i !== index));
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
    if (!title.trim() || !expSlug.trim()) return;
    setSaving(true);

    const filteredPills = metaPills.filter((p) => p.trim());

    const data = {
      title: title.trim(),
      slug: expSlug.trim(),
      lang,
      badge: badge.trim(),
      duration: duration.trim(),
      image: image.trim(),
      hero_description: heroDescription.trim(),
      meta_pills: filteredPills,
      body_content: blocks,
    };

    try {
      if (isNew) {
        await createExperience(data);
      } else if (expId) {
        await updateExperience(expId, data);
      }
      navigate("/experiences");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="loading">Cargando experiencia...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="page-header">
        <h1>{isNew ? "Nueva Experiencia" : "Editar Experiencia"}</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => navigate("/experiences")}
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
              placeholder="Título de la experiencia"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Slug *</label>
            <input
              className="input"
              value={expSlug}
              onChange={(e) => {
                setExpSlug(e.target.value);
                setAutoSlug(false);
              }}
              placeholder="slug-de-la-experiencia"
              required
            />
          </div>
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
            <label className="form-label">Badge (categoría)</label>
            <input
              className="input"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="Cocina, Trivia, Deporte..."
            />
          </div>
          <div className="form-group">
            <label className="form-label">Duración</label>
            <input
              className="input"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="30 min, 60 min..."
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Imagen destacada</label>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              className="input"
              value={image}
              onChange={(e) => setImage(e.target.value)}
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
                    const url = await uploadExperienceImage(file);
                    setImage(url);
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
          {image && (
            <img
              src={image}
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
        <div className="form-group">
          <label className="form-label">Descripción hero</label>
          <textarea
            className="textarea"
            value={heroDescription}
            onChange={(e) => setHeroDescription(e.target.value)}
            placeholder="Descripción que aparece en la sección hero..."
            rows={3}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Meta pills</label>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {metaPills.map((pill, idx) => (
              <div key={idx} style={{ display: "flex", gap: 4 }}>
                <input
                  className="input"
                  value={pill}
                  onChange={(e) => updatePill(idx, e.target.value)}
                  placeholder={`Pill ${idx + 1}`}
                />
                <button
                  type="button"
                  className="block-btn delete"
                  onClick={() => removePill(idx)}
                  title="Eliminar pill"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-block-btn"
              style={{ alignSelf: "flex-start" }}
              onClick={addPill}
            >
              + Pill
            </button>
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
