import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { getDictionary, localePath } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNav from "./MobileNav";

export default function Header({ lang = "es" as Lang }: { lang?: Lang }) {
  const t = getDictionary(lang);

  const navLinks = [
    { label: t.nav.tiposDeEvento, href: localePath(lang, "/tipos-de-evento") },
    { label: t.nav.experiencias, href: localePath(lang, "/experiencias") },
    { label: t.nav.merchandising, href: localePath(lang, "/merchandising") },
    { label: t.nav.standsYFerias, href: localePath(lang, "/stand-ferias") },
    { label: t.nav.nosotros, href: localePath(lang, "/nosotros") },
    { label: t.nav.copaDelMundo, href: localePath(lang, "/copa-del-mundo") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ebombo-bg shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
      <div className="relative mx-auto flex min-h-[100px] items-center px-[5%]">
        <div className="shrink-0 md:w-[17%]">
          <Link href={localePath(lang, "/")}>
            <Image
              src="/uploads/2025/11/logoEbomboAColor.webp"
              alt="eBombo logo"
              width={150}
              height={40}
              sizes="(max-width: 768px) 100px, 150px"
              priority
              className="w-[100px] md:w-[150px]"
            />
          </Link>
        </div>

        <nav className="hidden flex-1 md:flex">
          <ul className="flex w-full items-center justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-[10px] font-poppins text-base font-normal tracking-[-0.2px] text-ebombo-dark transition-colors hover:text-ebombo-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <LanguageSwitcher lang={lang} />
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-[64px] bg-ebombo-primary px-4 py-2.5 font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-colors duration-[600ms] hover:bg-ebombo-accent md:px-5 md:py-3 md:text-base"
          >
            <span>{t.nav.solicitarReunion}</span>
            <svg
              className="h-3 w-3 md:h-3.5 md:w-3.5"
              viewBox="0 0 256 512"
              fill="currentColor"
            >
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
            </svg>
          </Link>

          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
