"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { BlogPost } from "@/data/blog";
import { getDictionary, localePath } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const POSTS_PER_PAGE = 12;

function formatDate(isoDate: string, postLang: "es" | "en") {
  const date = new Date(isoDate);
  return date.toLocaleDateString(postLang === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogListingClient({
  lang,
  posts,
}: {
  lang: Lang;
  posts: BlogPost[];
}) {
  const t = getDictionary(lang);

  const [activeLang, setActiveLang] = useState<"all" | "es" | "en">(
    lang === "en" ? "en" : "all"
  );
  const [page, setPage] = useState(1);

  const allPosts = posts;

  const langFilters = [
    { key: "all" as const, label: t.blog.filterAll },
    { key: "es" as const, label: t.blog.filterEs },
    { key: "en" as const, label: t.blog.filterEn },
  ];

  const filtered = useMemo(
    () =>
      activeLang === "all"
        ? allPosts
        : allPosts.filter((p) => p.lang === activeLang),
    [allPosts, activeLang]
  );

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  function handleLangChange(filterLang: "all" | "es" | "en") {
    setActiveLang(filterLang);
    setPage(1);
  }

  return (
    <>
      <Header lang={lang} />
      <main>
        <section className="bg-ebombo-primary px-[5%] py-[40px] md:py-[60px]">
          <div className="mx-auto flex min-h-[350px] max-w-container flex-col items-center justify-center text-center">
            <h5 className="mb-3 font-poppins text-base font-semibold text-ebombo-orange">
              {t.blog.heroSubtitle}
            </h5>
            <h1 className="font-poppins text-[28px] font-bold leading-[1.2] tracking-[-1px] text-white md:text-[42px]">
              {t.blog.heroTitle}
            </h1>
            <p className="mt-4 max-w-[700px] font-roboto text-sm leading-[1.6] text-white md:text-base">
              {t.blog.heroDesc}
            </p>
          </div>
        </section>

        <section className="px-[5%]">
          <div className="mx-auto -mt-[25px] max-w-container rounded-[16px] bg-white px-6 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {langFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => handleLangChange(filter.key)}
                  className={`rounded-[99px] px-3 py-2 font-poppins text-sm font-semibold shadow-[0_0_10px_rgba(0,0,0,0.09)] transition-all duration-300 md:px-4 ${
                    activeLang === filter.key
                      ? "bg-ebombo-primary text-ebombo-bg"
                      : "bg-ebombo-bg text-ebombo-text hover:bg-ebombo-primary hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[50px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-2 font-poppins text-[24px] font-bold text-[#1E1E1E] md:text-[28px]">
              {activeLang === "all"
                ? t.blog.allArticles
                : activeLang === "es"
                  ? t.blog.articlesEs
                  : t.blog.articlesEn}
            </h2>
            <p className="mb-8 font-roboto text-sm text-ebombo-text">
              {filtered.length}{" "}
              {filtered.length === 1
                ? t.blog.articleCountSingle
                : t.blog.articleCount}
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {paginated.map((post) => (
                <Link
                  key={post.slug}
                  href={localePath(lang, `/blog/${post.slug}`)}
                  className="group overflow-hidden rounded-[24px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  {post.thumbnailUrl && !post.thumbnailUrl.includes("logoEbombo") ? (
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        fill
                        quality={90}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-[#8056EB] to-[#5B1FCC]">
                      <Image
                        src="/uploads/2025/11/logoEbomboAColor.webp"
                        alt="eBombo"
                        width={120}
                        height={32}
                        className="w-[120px] brightness-0 invert"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center gap-3">
                      <span className="font-roboto text-xs text-[#666666]">
                        {formatDate(post.datePublished, post.lang)}
                      </span>
                      <span className="rounded-[50px] bg-[#F3EEFF] px-3 py-1 font-poppins text-xs font-medium text-[#7A33FF]">
                        {post.lang === "es" ? "ES" : "EN"}
                      </span>
                    </div>
                    <h3 className="line-clamp-2 font-poppins text-lg font-semibold tracking-[-1px] text-ebombo-secondary">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="line-clamp-2 font-roboto text-sm leading-[1.5] text-[#666666]">
                        {post.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-[50px] px-4 py-2 font-poppins text-sm font-semibold text-ebombo-primary transition-colors hover:bg-ebombo-light-purple disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  {t.blog.previous}
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(
                    (p) =>
                      p === 1 ||
                      p === totalPages ||
                      Math.abs(p - page) <= 2
                  )
                  .reduce<(number | "...")[]>((acc, p, idx, arr) => {
                    if (idx > 0 && p - (arr[idx - 1] as number) > 1) {
                      acc.push("...");
                    }
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((p, idx) =>
                    p === "..." ? (
                      <span
                        key={`dots-${idx}`}
                        className="px-2 font-roboto text-sm text-ebombo-text"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => setPage(p as number)}
                        className={`h-10 w-10 rounded-full font-poppins text-sm font-semibold transition-colors ${
                          page === p
                            ? "bg-ebombo-primary text-white"
                            : "text-ebombo-text hover:bg-ebombo-light-purple"
                        }`}
                      >
                        {p}
                      </button>
                    )
                  )}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-[50px] px-4 py-2 font-poppins text-sm font-semibold text-ebombo-primary transition-colors hover:bg-ebombo-light-purple disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  {t.blog.next}
                </button>
              </div>
            )}
          </div>
        </section>

        <ContactForm lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
