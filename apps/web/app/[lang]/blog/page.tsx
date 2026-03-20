import type { Metadata } from "next";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { getAllPosts } from "@/data/blog";
import BlogListingClient from "./BlogListingClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";

  return {
    title: lang === "en" ? "Blog | eBombo Internacional" : "Blog | eBombo Internacional",
    alternates: {
      canonical: lang === "en" ? "/en/blog" : "/blog",
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const posts = await getAllPosts();
  return <BlogListingClient lang={lang} posts={posts} />;
}
