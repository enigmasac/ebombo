import { unstable_cache } from "next/cache";

const API_URL = process.env.API_URL || "http://localhost:4000";

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

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export async function fetchExperiences(lang: string): Promise<Experience[]> {
  try {
    const res = await fetch(`${API_URL}/api/experiences?lang=${lang}&limit=100`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.experiences;
  } catch {
    return [];
  }
}

export async function fetchExperience(slug: string, lang?: string): Promise<Experience | null> {
  try {
    const qs = lang ? `?lang=${lang}` : "";
    const res = await fetch(`${API_URL}/api/experiences/${slug}${qs}`, {
      next: { revalidate: 60 },
    });
    return res.json();
  } catch {
    return null;
  }
}

export interface ActiveSnippets {
  head_start: string[];
  head_end: string[];
  body_start: string[];
  body_end: string[];
}

export const fetchActiveSnippets = unstable_cache(
  async (): Promise<ActiveSnippets> => {
    try {
      const res = await fetch(`${API_URL}/api/snippets/active`);
      if (!res.ok) return { head_start: [], head_end: [], body_start: [], body_end: [] };
      return res.json();
    } catch {
      return { head_start: [], head_end: [], body_start: [], body_end: [] };
    }
  },
  ["active-snippets"],
  { revalidate: 300 }
);

export async function fetchBadges(lang: string): Promise<string[]> {
  try {
    const res = await fetch(`${API_URL}/api/experiences/badges?lang=${lang}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
