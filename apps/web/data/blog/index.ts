import type { BlogPost, BlogContentBlock } from "./types";
import { postsEs1 } from "./posts-es-1";
import { postsEs2 } from "./posts-es-2";
import { postsEs3 } from "./posts-es-3";
import { postsEn1 } from "./posts-en-1";
import { postsEn2 } from "./posts-en-2";

export type { BlogPost, BlogContentBlock };

const API_URL = process.env.API_URL || "http://localhost:4000";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ebombo.com";

const staticPosts: BlogPost[] = [
  ...postsEs1,
  ...postsEs2,
  ...postsEs3,
  ...postsEn1,
  ...postsEn2,
];

const staticBySlug = new Map(staticPosts.map((p) => [p.slug, p]));

function mergeWithStatic(apiPost: BlogPost): BlogPost {
  const staticPost = staticBySlug.get(apiPost.slug);
  if (!staticPost) return apiPost;
  return {
    ...apiPost,
    bodyContent:
      apiPost.bodyContent.length > 0
        ? apiPost.bodyContent
        : staticPost.bodyContent,
    thumbnailUrl:
      apiPost.thumbnailUrl && !apiPost.thumbnailUrl.includes("logoEbombo")
        ? apiPost.thumbnailUrl
        : staticPost.thumbnailUrl,
    lang: staticPost.lang,
  };
}

function mapApiPost(raw: Record<string, unknown>): BlogPost {
  return {
    slug: raw.slug as string,
    title: raw.title as string,
    description: (raw.description as string) || "",
    datePublished: (raw.date_published as string) || "",
    lang: raw.lang as "es" | "en",
    thumbnailUrl: raw.thumbnail_url
      ? (raw.thumbnail_url as string).startsWith("/api/")
        ? `${SITE_URL}${raw.thumbnail_url}`
        : (raw.thumbnail_url as string)
      : "",
    wordCount: (raw.word_count as number) || 0,
    bodyContent: (raw.body_content as BlogContentBlock[]) || [],
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  let apiPosts: BlogPost[] = [];
  try {
    const res = await fetch(`${API_URL}/api/blog/posts?limit=1000`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      apiPosts = data.posts.map(mapApiPost).map(mergeWithStatic);
    }
  } catch {}

  const slugSet = new Set(apiPosts.map((p) => p.slug));
  const merged = [
    ...apiPosts,
    ...staticPosts.filter((p) => !slugSet.has(p.slug)),
  ];
  return merged
    .filter((p) => p.datePublished)
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

export async function getPostBySlug(
  slug: string,
  lang?: "es" | "en"
): Promise<BlogPost | undefined> {
  const qs = lang ? `?lang=${lang}` : "";
  try {
    const res = await fetch(`${API_URL}/api/blog/posts/${slug}${qs}`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      return mergeWithStatic(mapApiPost(data));
    }
  } catch {}
  return staticPosts.find(
    (p) => p.slug === slug && (!lang || p.lang === lang)
  ) || staticPosts.find((p) => p.slug === slug);
}

export async function getPostsByLang(lang: "es" | "en"): Promise<BlogPost[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.lang === lang);
}
