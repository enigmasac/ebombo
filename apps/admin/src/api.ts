const BLOG_BASE = "/api/blog";
const EXP_BASE = "/api/experiences";
const AUTH_BASE = "/api/auth";

export interface AuthUser {
  userId: number;
  email: string;
  role: "super_admin" | "editor";
  name: string;
}

let token = sessionStorage.getItem("admin_token") || "";
let currentUser: AuthUser | null = (() => {
  try {
    const raw = sessionStorage.getItem("admin_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
})();

export function setToken(t: string) {
  token = t;
  sessionStorage.setItem("admin_token", t);
}

export function getToken() {
  return token;
}

export function setUser(user: AuthUser) {
  currentUser = user;
  sessionStorage.setItem("admin_user", JSON.stringify(user));
}

export function getUser(): AuthUser | null {
  return currentUser;
}

export function clearToken() {
  token = "";
  currentUser = null;
  sessionStorage.removeItem("admin_token");
  sessionStorage.removeItem("admin_user");
}

async function request<T>(base: string, path: string, options?: RequestInit): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options?.headers as Record<string, string>),
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const res = await fetch(`${base}${path}`, { ...options, headers });
  if (res.status === 401) {
    clearToken();
    window.location.href = "/";
    throw new Error("Unauthorized");
  }
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export async function login(email: string, password: string): Promise<{ token: string; user: AuthUser }> {
  const res = await fetch(`${AUTH_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "Login failed");
  }
  return res.json();
}

export async function changeMyPassword(currentPassword: string, newPassword: string) {
  return request<{ ok: boolean }>(AUTH_BASE, "/me/password", {
    method: "PUT",
    body: JSON.stringify({ currentPassword, newPassword }),
  });
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  date_published: string;
  lang: "es" | "en";
  thumbnail_url: string;
  word_count: number;
  body_content: ContentBlock[];
  created_at: string;
  updated_at: string;
}

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface PostListResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  limit: number;
}

export function getPosts(params: {
  page?: number;
  limit?: number;
  lang?: string;
  search?: string;
}) {
  const qs = new URLSearchParams();
  if (params.page) qs.set("page", String(params.page));
  if (params.limit) qs.set("limit", String(params.limit));
  if (params.lang) qs.set("lang", params.lang);
  if (params.search) qs.set("search", params.search);
  return request<PostListResponse>(BLOG_BASE, `/posts?${qs}`);
}

export function getPost(slug: string) {
  return request<BlogPost>(BLOG_BASE, `/posts/${slug}`);
}

export function createPost(data: Partial<BlogPost>) {
  return request<{ id: number; slug: string }>(BLOG_BASE, "/posts", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updatePost(id: number, data: Partial<BlogPost>) {
  return request<{ ok: boolean }>(BLOG_BASE, `/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function deletePost(id: number) {
  return request<{ ok: boolean }>(BLOG_BASE, `/posts/${id}`, {
    method: "DELETE",
  });
}

export async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const res = await fetch(`${BLOG_BASE}/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });
  if (!res.ok) throw new Error("Error al subir imagen");
  const data = await res.json();
  return data.url;
}

export interface Experience {
  id: number;
  slug: string;
  title: string;
  lang: "es" | "en";
  badge: string;
  duration: string;
  image: string;
  hero_description: string;
  meta_pills: string[];
  body_content: ContentBlock[];
  word_count: number;
  created_at: string;
  updated_at: string;
}

export interface ExperienceListResponse {
  experiences: Experience[];
  total: number;
  page: number;
  limit: number;
}

export function getExperiences(params: {
  page?: number;
  limit?: number;
  lang?: string;
  badge?: string;
  search?: string;
}) {
  const qs = new URLSearchParams();
  if (params.page) qs.set("page", String(params.page));
  if (params.limit) qs.set("limit", String(params.limit));
  if (params.lang) qs.set("lang", params.lang);
  if (params.badge) qs.set("badge", params.badge);
  if (params.search) qs.set("search", params.search);
  return request<ExperienceListResponse>(EXP_BASE, `?${qs}`);
}

export function getExperience(slug: string) {
  return request<Experience>(EXP_BASE, `/${slug}`);
}

export function createExperience(data: Partial<Experience>) {
  return request<{ id: number; slug: string }>(EXP_BASE, "", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateExperience(id: number, data: Partial<Experience>) {
  return request<{ ok: boolean }>(EXP_BASE, `/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function deleteExperience(id: number) {
  return request<{ ok: boolean }>(EXP_BASE, `/${id}`, {
    method: "DELETE",
  });
}

export async function uploadExperienceImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const res = await fetch(`${EXP_BASE}/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });
  if (!res.ok) throw new Error("Error al subir imagen");
  const data = await res.json();
  return data.url;
}

export interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: "super_admin" | "editor";
  active: boolean;
  created_at: string;
  updated_at: string;
}

export function getUsers() {
  return request<AdminUser[]>(AUTH_BASE, "/users");
}

export function createUser(data: { email: string; password: string; name: string; role: string }) {
  return request<{ id: number; email: string; name: string; role: string }>(AUTH_BASE, "/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateUser(id: number, data: { name?: string; role?: string; active?: boolean }) {
  return request<{ ok: boolean }>(AUTH_BASE, `/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function resetUserPassword(id: number, password: string) {
  return request<{ ok: boolean }>(AUTH_BASE, `/users/${id}/password`, {
    method: "PUT",
    body: JSON.stringify({ password }),
  });
}

export interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  source: string;
  page_url: string;
  lang: string;
  notified: boolean;
  created_at: string;
}

export interface LeadListResponse {
  leads: Lead[];
  total: number;
  page: number;
  limit: number;
}

export function getLeads(params: { page?: number; limit?: number; source?: string; search?: string }) {
  const qs = new URLSearchParams();
  if (params.page) qs.set("page", String(params.page));
  if (params.limit) qs.set("limit", String(params.limit));
  if (params.source) qs.set("source", params.source);
  if (params.search) qs.set("search", params.search);
  return request<LeadListResponse>("/api/leads", `?${qs}`);
}

export function deleteLead(id: number) {
  return request<{ ok: boolean }>("/api/leads", `/${id}`, { method: "DELETE" });
}

export function getSettings() {
  return request<Record<string, unknown>>("/api/settings", "");
}

export function updateSetting(key: string, value: unknown) {
  return request<{ ok: boolean }>("/api/settings", `/${key}`, {
    method: "PUT",
    body: JSON.stringify({ value }),
  });
}

export function testSmtp(config: { host: string; port: string; user: string; pass: string; from: string }) {
  return request<{ ok: boolean }>("/api/settings", "/test-smtp", {
    method: "POST",
    body: JSON.stringify(config),
  });
}

export interface AuditEntry {
  id: number;
  user_id: number;
  user_email: string;
  action: string;
  entity_type: string;
  entity_id: string;
  entity_title: string;
  details: Record<string, unknown> | null;
  created_at: string;
}

export interface AuditListResponse {
  entries: AuditEntry[];
  total: number;
  page: number;
  limit: number;
}

export function getAuditLog(params: { page?: number; limit?: number; entity_type?: string; user_id?: string }) {
  const qs = new URLSearchParams();
  if (params.page) qs.set("page", String(params.page));
  if (params.limit) qs.set("limit", String(params.limit));
  if (params.entity_type) qs.set("entity_type", params.entity_type);
  if (params.user_id) qs.set("user_id", params.user_id);
  return request<AuditListResponse>("/api/audit", `?${qs}`);
}
