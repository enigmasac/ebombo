import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { isValidLang, getDictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import WorldCupDemo from "./WorldCupDemo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const t = getDictionary(lang);

  return {
    title: `${t.copaDelMundoDemo.title} | eBombo Internacional`,
    description: t.copaDelMundoDemo.subtitle,
    alternates: {
      canonical: lang === "en" ? "/en/copa-del-mundo/demo" : "/copa-del-mundo/demo",
    },
  };
}

export default async function CopaDelMundoDemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";

  return (
    <>
      <Header lang={lang} />
      <main>
        <WorldCupDemo lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
