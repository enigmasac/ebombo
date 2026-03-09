import type { Metadata } from "next";
import { Poppins, Roboto, Roboto_Slab } from "next/font/google";
import { getDictionary, isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const t = getDictionary(lang);

  return {
    title: t.metadata.siteTitle,
    description: t.metadata.siteDescription,
    alternates: {
      languages: {
        es: "https://ebombo.com",
        en: "https://ebombo.com/en",
      },
    },
    openGraph: {
      title: t.metadata.siteTitle,
      description: t.metadata.siteDescription,
      url: lang === "en" ? "https://ebombo.com/en" : "https://ebombo.com",
      siteName: "eBombo Internacional",
      locale: lang === "en" ? "en_US" : "es_ES",
      type: "website",
      images: [
        {
          url: "https://ebombo.com/wp-content/uploads/2025/11/favicon-ebombo.webp",
          width: 512,
          height: 512,
        },
      ],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "es";

  return (
    <html
      lang={lang}
      className={`${poppins.variable} ${roboto.variable} ${robotoSlab.variable}`}
    >
      <head>
        <link rel="alternate" hrefLang="es" href="https://ebombo.com" />
        <link rel="alternate" hrefLang="en" href="https://ebombo.com/en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://ebombo.com"
        />
      </head>
      <body className="font-roboto text-ebombo-text">{children}</body>
    </html>
  );
}
