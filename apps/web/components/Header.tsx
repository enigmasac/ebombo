"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { getDictionary, localePath } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ lang = "es" as Lang }: { lang?: Lang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const t = getDictionary(lang);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const serviceLinks = [
    { label: t.nav.tiposDeEvento, href: localePath(lang, "/tipos-de-evento") },
    { label: t.nav.experiencias, href: localePath(lang, "/experiencias") },
    { label: t.nav.merchandising, href: localePath(lang, "/merchandising") },
    { label: t.nav.standsYFerias, href: localePath(lang, "/stand-ferias") },
  ];

  const standaloneLinks = [
    ...(lang === "es" ? [{ label: t.nav.momentos, href: localePath(lang, "/momentos") }] : []),
    { label: t.nav.nosotros, href: localePath(lang, "/nosotros") },
    { label: t.nav.copaDelMundo, href: localePath(lang, "/copa-del-mundo") },
  ];

  const allMobileLinks = [
    ...serviceLinks,
    ...standaloneLinks,
  ];

  const openDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  const linkClass =
    "block px-3 xl:px-5 font-poppins text-base font-normal tracking-[-0.2px] text-ebombo-dark transition-colors hover:text-ebombo-primary";

  return (
    <header className="sticky top-0 z-50 bg-ebombo-bg shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex min-h-[100px] items-center px-[5%]">
        <div className="shrink-0 lg:w-[17%]">
          <Link href={localePath(lang, "/")}>
            <Image
              src="/uploads/2025/11/logoEbomboAColor.webp"
              alt="eBombo logo"
              width={150}
              height={40}
              quality={60}
              sizes="(max-width: 768px) 100px, 150px"
              priority
              className="w-[100px] lg:w-[150px]"
            />
          </Link>
        </div>

        <nav className="hidden flex-1 lg:flex">
          <ul className="flex w-full items-center justify-center">
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className={`${linkClass} flex items-center gap-1`}
              >
                <span>{t.nav.servicios}</span>
                <svg
                  className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <ul className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block px-5 py-2.5 font-poppins text-sm font-normal text-ebombo-dark transition-colors hover:bg-ebombo-light-purple hover:text-ebombo-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {standaloneLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
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
            className="inline-flex items-center gap-2 rounded-[64px] bg-ebombo-primary px-4 py-2.5 font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-colors duration-[600ms] hover:bg-ebombo-accent lg:px-5 lg:py-3 lg:text-base"
          >
            <span>{t.nav.solicitarReunion}</span>
            <svg
              className="h-3 w-3 lg:h-3.5 lg:w-3.5"
              viewBox="0 0 256 512"
              fill="currentColor"
            >
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
            </svg>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ebombo-dark transition-colors hover:text-ebombo-primary lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 448 512">
              {mobileMenuOpen ? (
                <path d="M400 145.49L366.51 112 224 254.49 81.49 112 48 145.49 190.51 288 48 430.51 81.49 464 224 321.49 366.51 464 400 430.51 257.49 288z" />
              ) : (
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-ebombo-light-purple bg-white px-[5%] py-4 lg:hidden">
          <ul className="flex flex-col">
            {allMobileLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 font-poppins text-base text-ebombo-dark transition-colors hover:text-ebombo-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
