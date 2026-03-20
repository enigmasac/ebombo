import type { Metadata } from "next";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { fetchExperiences, fetchBadges } from "@/lib/api";
import ExperienciasClient from "./ExperienciasClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";

  return {
    title: lang === "en" ? "Experiences | eBombo Internacional" : "Experiencias | eBombo Internacional",
    alternates: {
      canonical: lang === "en" ? "/en/experiencias" : "/experiencias",
    },
  };
}

export default async function ExperienciasPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";

  const [experiences, badges] = await Promise.all([
    fetchExperiences(lang),
    fetchBadges(lang),
  ]);

  return (
    <ExperienciasClient
      lang={lang}
      experiences={experiences}
      badges={badges}
    />
  );
}
