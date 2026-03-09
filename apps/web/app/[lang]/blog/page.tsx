import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import BlogListingClient from "./BlogListingClient";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  return <BlogListingClient lang={lang} />;
}
