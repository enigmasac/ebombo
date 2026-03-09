import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RenderContent from "@/components/RenderContent";
import { slugify } from "@/components/RenderContent";
import { getAllPosts, getPostBySlug } from "@/data/blog";
import type { BlogContentBlock } from "@/data/blog";
import { isValidLang, getDictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().flatMap((post) => [
    { lang: "es", slug: post.slug },
    { lang: "en", slug: post.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post no encontrado" };
  return {
    title: `${post.title} | eBombo Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.thumbnailUrl ? [{ url: post.thumbnailUrl }] : [],
      type: "article",
      publishedTime: post.datePublished,
      locale: lang === "es" ? "es_ES" : "en_US",
    },
  };
}

function formatDate(isoDate: string, postLang: "es" | "en") {
  const date = new Date(isoDate);
  return date.toLocaleDateString(postLang === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function TableOfContents({
  blocks,
  lang,
}: {
  blocks: BlogContentBlock[];
  lang: "es" | "en";
}) {
  const headings = blocks.filter(
    (b): b is { type: "h2" | "h3" | "h4"; text: string } =>
      b.type === "h2" || b.type === "h3" || b.type === "h4"
  );
  if (headings.length < 3) return null;

  let topCounter = 0;
  let subCounter = 0;
  let lastTopNumber = 0;
  let seenH2 = false;

  const numbered = headings.map((h) => {
    if (h.type === "h2") {
      seenH2 = true;
      topCounter++;
      lastTopNumber = topCounter;
      subCounter = 0;
      return { ...h, number: `${topCounter}`, indent: false };
    }
    if (h.type === "h3" && seenH2) {
      subCounter++;
      return { ...h, number: `${lastTopNumber}.${subCounter}`, indent: true };
    }
    topCounter++;
    return { ...h, number: `${topCounter}`, indent: false };
  });

  return (
    <nav className="mb-8 rounded-[16px] border border-[#E0E0E0] bg-[#FAFAFA] p-5">
      <h4 className="mb-3 font-poppins text-base font-semibold text-ebombo-secondary">
        {lang === "es" ? "Tabla de contenidos" : "Table of contents"}
      </h4>
      <ol className="list-none space-y-1.5">
        {numbered.map((h, i) => (
          <li key={i} className={h.indent ? "pl-4" : ""}>
            <a
              href={`#${slugify(h.text)}`}
              className="font-roboto text-sm leading-[1.6] text-ebombo-text transition-colors hover:text-ebombo-primary"
            >
              {h.number && (
                <span className="mr-1.5 font-semibold text-[#7A33FF]">
                  {h.number}.
                </span>
              )}
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default async function BlogPost({ params }: Props) {
  const { lang: rawLang, slug } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const t = getDictionary(lang);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header lang={lang} />
      <main>
        <section className="bg-white px-[5%] pt-[20px] md:pt-[30px]">
          <div className="mx-auto max-w-container">
            <div className="flex overflow-hidden rounded-[28px] bg-ebombo-light-purple shadow-[0_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col gap-5 p-[5%] md:w-[60%]">
                <div className="flex items-center gap-3">
                  <span className="inline-block rounded-[50px] bg-white px-3 py-1.5 font-poppins text-xs font-medium text-[#7A33FF]">
                    {post.lang === "es" ? "Espanol" : "English"}
                  </span>
                  <span className="font-roboto text-sm text-ebombo-text">
                    {formatDate(post.datePublished, post.lang)}
                  </span>
                </div>
                <h1 className="font-poppins text-[27px] font-bold leading-[1.13] tracking-[-1px] text-ebombo-secondary md:text-[46px]">
                  {post.title}
                </h1>
                {post.description && (
                  <p className="font-roboto text-base leading-[1.6] text-ebombo-text">
                    {post.description}
                  </p>
                )}
                <Link
                  href="#contacto"
                  className="self-start rounded-[64px] bg-ebombo-orange px-5 py-2.5 font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:bg-ebombo-orange-dark md:px-6 md:py-3 md:text-lg"
                >
                  {post.lang === "es"
                    ? "Comienza a planificar"
                    : "Start planning"}
                </Link>
              </div>
              {post.thumbnailUrl && (
                <div className="relative hidden md:block md:w-[40%]">
                  <Image
                    src={post.thumbnailUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    style={{ borderRadius: "0 28px 28px 0" }}
                    sizes="40vw"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px]">
          <div className="mx-auto flex max-w-container flex-col gap-10 md:flex-row md:items-start">
            <aside className="hidden md:block md:w-[280px] md:shrink-0">
              <div className="md:sticky md:top-[100px]">
                <TableOfContents
                  blocks={post.bodyContent}
                  lang={post.lang}
                />
              </div>
            </aside>
            <div className="min-w-0 flex-1">
              <div className="md:hidden">
                <TableOfContents
                  blocks={post.bodyContent}
                  lang={post.lang}
                />
              </div>
              {post.bodyContent.length > 0 ? (
                <RenderContent blocks={post.bodyContent} />
              ) : (
                <p className="mb-5 font-roboto text-base leading-[1.7] text-ebombo-text">
                  {post.description}
                </p>
              )}
            </div>
          </div>
        </section>

        <ContactForm lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
