import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { getAllPosts } from "@/data/blog";
import BlogListingClient from "./BlogListingClient";

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
