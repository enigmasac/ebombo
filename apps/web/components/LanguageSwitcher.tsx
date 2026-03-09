"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();

  const targetPath =
    lang === "es"
      ? `/en${pathname}`
      : pathname.replace(/^\/en/, "") || "/";

  return (
    <Link
      href={targetPath}
      className="flex items-center gap-1 rounded-[64px] border border-ebombo-primary px-3 py-2 font-poppins text-xs font-semibold tracking-[-0.4px] text-ebombo-primary transition-colors duration-300 hover:bg-ebombo-primary hover:text-white md:px-4 md:py-2.5 md:text-sm"
    >
      {lang === "es" ? "EN" : "ES"}
    </Link>
  );
}
