import type { Metadata } from "next";
import { Poppins, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title:
    "Empresa de Eventos Corporativos Productora y Organizadora | eBombo Internacional",
  description:
    "Desde eventos corporativos hasta retiros de team building, creamos celebraciones corporativas interactivas y de alto impacto diseñadas para conectar e inspirar a tus equipos.",
  openGraph: {
    title:
      "Empresa de Eventos Corporativos Productora y Organizadora | eBombo Internacional",
    description:
      "Desde eventos corporativos hasta retiros de team building, creamos celebraciones corporativas interactivas y de alto impacto diseñadas para conectar e inspirar a tus equipos.",
    url: "https://ebombo.com",
    siteName: "eBombo Internacional",
    locale: "es_ES",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${roboto.variable} ${robotoSlab.variable}`}
    >
      <body className="font-roboto text-ebombo-text">{children}</body>
    </html>
  );
}
