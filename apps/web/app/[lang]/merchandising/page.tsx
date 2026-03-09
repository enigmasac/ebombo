import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { isValidLang, getDictionary, localePath } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const t = getDictionary(lang);

  return {
    title: `${t.merchandising.heroTitle} | eBombo Internacional`,
    description: t.merchandising.heroDesc,
  };
}

const IMG = "/uploads/merchandising";

const categoriesData = [
  {
    bg: "#FF8A50",
    image: `${IMG}/img-bags.webp`,
  },
  {
    bg: "#7A33FF",
    image: `${IMG}/img-stationery.webp`,
  },
  {
    bg: "#F78A0A",
    image: `${IMG}/img-stylish.webp`,
  },
  {
    bg: "#5B4BD5",
    image: `${IMG}/img-tech.webp`,
  },
  {
    bg: "#27AE60",
    image: `${IMG}/img-thematic.webp`,
  },
  {
    bg: "#E74C3C",
    image: `${IMG}/img-gift-collection.webp`,
  },
];

export default async function Merchandising({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const t = getDictionary(lang);

  return (
    <>
      <Header lang={lang} />
      <main>
        <section
          className="px-[5%] py-[40px] md:py-[60px]"
          style={{
            background: "linear-gradient(135deg, #7A33FF 0%, #5B1FCC 100%)",
          }}
        >
          <div className="mx-auto flex max-w-container flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col gap-5 text-center md:w-[50%] md:text-left">
              <span className="font-poppins text-sm font-medium tracking-[2px] text-white/80">
                {t.merchandising.heroLabel}
              </span>
              <h1 className="font-poppins text-[28px] font-bold leading-[1.2] text-white md:text-[42px]">
                {t.merchandising.heroTitle}
              </h1>
              <p className="font-roboto text-base leading-[1.6] text-white/90">
                {t.merchandising.heroDesc}
              </p>
              <Link
                href={localePath(lang, "#contacto")}
                className="self-center rounded-[50px] bg-white px-8 py-3.5 font-poppins text-[15px] font-semibold text-[#7A33FF] transition-all duration-[600ms] hover:bg-ebombo-orange hover:text-white md:self-start"
              >
                {t.merchandising.obtenerCatalogo}
              </Link>
            </div>
            <div className="flex items-center justify-center md:w-[45%]">
              <Image
                src="/uploads/2026/01/ebombomertch-e1768602976559.png"
                alt="Merchandising eBombo"
                width={1024}
                height={978}
                className="w-[250px] md:w-[350px]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F7] px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto flex max-w-container flex-col items-center gap-8 md:flex-row">
            <div className="flex items-center justify-center md:w-[40%]">
              <Image
                src={`${IMG}/img-personal-items.webp`}
                alt="Botella personalizada"
                width={400}
                height={400}
                className="w-[200px] md:w-[280px]"
              />
            </div>
            <div className="flex flex-col gap-5 text-center md:w-[55%] md:text-left">
              <span className="font-poppins text-sm font-semibold tracking-[1px] text-[#7A33FF]">
                {t.merchandising.articulosLabel}
              </span>
              <h2 className="font-poppins text-[24px] font-bold leading-[1.3] text-[#1E1E1E] md:text-[32px]">
                {t.merchandising.articulosTitle}
              </h2>
              <p className="font-roboto text-base leading-[1.6] text-[#666666]">
                {t.merchandising.articulosDesc}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              {t.merchandising.catalogoTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {categoriesData.map((cat, i) => (
                <div
                  key={t.merchandising.categories[i].title}
                  className="flex min-h-[320px] w-[47%] flex-col items-center justify-end overflow-hidden rounded-[24px] p-5 pb-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:w-[30%]"
                  style={{ backgroundColor: cat.bg }}
                >
                  <Image
                    src={cat.image}
                    alt={t.merchandising.categories[i].title}
                    width={160}
                    height={160}
                    className="mb-5 w-[160px]"
                  />
                  <h3 className="mb-1 text-center font-poppins text-lg font-semibold text-white">
                    {t.merchandising.categories[i].title}
                  </h3>
                  <p className="text-center font-roboto text-[13px] leading-[1.4] text-white/85">
                    {t.merchandising.categories[i].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm
          lang={lang}
          title={t.merchandising.contactTitle}
          subtitle={t.merchandising.contactSubtitle}
        />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
