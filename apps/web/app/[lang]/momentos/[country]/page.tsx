import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { getMomentosCountry, getMomentosSlugs } from "@/data/momentos";
import MomentosLanding from "../MomentosLanding";

export function generateStaticParams() {
  return getMomentosSlugs().map((country) => ({ country }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; country: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, country } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const data = getMomentosCountry(country);

  if (!data) return { title: "eBombo Momentos" };

  return {
    title: data.meta.title,
    description: data.meta.description,
    alternates: {
      canonical:
        lang === "en"
          ? `/en/momentos/${country}`
          : `/momentos/${country}`,
    },
  };
}

export default async function MomentosCountryPage({
  params,
}: {
  params: Promise<{ lang: string; country: string }>;
}) {
  const { lang: rawLang, country } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const data = getMomentosCountry(country);

  if (!data) notFound();

  return (
    <>
      <Header lang={lang} />
      <main>
        <MomentosLanding data={data} lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
