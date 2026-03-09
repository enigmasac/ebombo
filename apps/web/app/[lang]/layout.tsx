import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { getDictionary, isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ebombo.enigmasac.com";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
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
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      languages: {
        es: SITE_URL,
        en: `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: t.metadata.siteTitle,
      description: t.metadata.siteDescription,
      url: lang === "en" ? `${SITE_URL}/en` : SITE_URL,
      siteName: "eBombo Internacional",
      locale: lang === "en" ? "en_US" : "es_ES",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "eBombo Internacional",
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
      className={`${poppins.variable} ${roboto.variable}`}
    >
      <head>
        <link rel="alternate" hrefLang="es" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={SITE_URL}
        />
      </head>
      <body className="font-roboto text-ebombo-text">{children}</body>
    </html>
  );
}
