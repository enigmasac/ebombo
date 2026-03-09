import type { BlogPost, BlogContentBlock } from "./types";
import { postsEs1 } from "./posts-es-1";
import { postsEs2 } from "./posts-es-2";
import { postsEs3 } from "./posts-es-3";
import { postsEn1 } from "./posts-en-1";
import { postsEn2 } from "./posts-en-2";

export type { BlogPost, BlogContentBlock };

const allPosts: BlogPost[] = [
  ...postsEs1,
  ...postsEs2,
  ...postsEs3,
  ...postsEn1,
  ...postsEn2,
];

export function getAllPosts(): BlogPost[] {
  return allPosts.sort(
    (a, b) => b.datePublished.localeCompare(a.datePublished)
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getPostsByLang(lang: "es" | "en"): BlogPost[] {
  return allPosts
    .filter((p) => p.lang === lang)
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}
