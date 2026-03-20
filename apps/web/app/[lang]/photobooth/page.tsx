import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaqAccordion from "@/components/FaqAccordion";
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
    title: `${t.photobooth.heroTitle} | eBombo Internacional`,
    description: t.photobooth.heroDesc,
    alternates: {
      canonical: lang === "en" ? "/en/photobooth" : "/photobooth",
    },
  };
}

const featuresData = [
  {
    icon: "camera" as const,
    bg: "bg-[#F7F7F7]",
    textColor: "text-[#1E1E1E]",
    descColor: "text-[#666666]",
    iconColor: "#7A33FF",
    hidden: false,
  },
  {
    icon: "palette" as const,
    bg: "bg-[#7A33FF]",
    textColor: "text-white",
    descColor: "text-white/90",
    iconColor: "#FFFFFF",
    hidden: false,
  },
  {
    icon: "star" as const,
    bg: "bg-[#F7F7F7]",
    textColor: "text-[#1E1E1E]",
    descColor: "text-[#666666]",
    iconColor: "#7A33FF",
    hidden: true,
  },
];

const featureTitleKeys = ["feature1Title", "feature2Title", "feature3Title"] as const;
const featureDescKeys = ["feature1Desc", "feature2Desc", "feature3Desc"] as const;

export default async function Photobooth({
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
          className="flex min-h-[450px] items-center px-[5%] py-[60px] md:py-[100px]"
          style={{
            background: "linear-gradient(135deg, #1E1E1E 0%, #382079 100%)",
          }}
        >
          <div className="mx-auto flex max-w-container flex-col items-center text-center">
            <span className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[2px] text-ebombo-orange">
              {t.photobooth.heroLabel}
            </span>
            <h1 className="font-poppins text-[32px] font-bold leading-[1.2] text-white md:text-[52px]">
              {t.photobooth.heroTitle}
            </h1>
            <p className="mt-5 max-w-[650px] font-roboto text-base leading-[1.6] text-white/85 md:text-lg">
              {t.photobooth.heroDesc}
            </p>
            <Link
              href={localePath(lang, "#contacto")}
              className="mt-8 rounded-[50px] bg-ebombo-orange px-9 py-4 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
            >
              {t.photobooth.solicitarCotizacion}
            </Link>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              {t.photobooth.porQueElegirnos}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-[30px]">
              {featuresData.map((feature, i) => (
                <div
                  key={t.photobooth[featureTitleKeys[i]]}
                  className={`flex w-[47%] flex-col items-center rounded-[24px] ${feature.bg} px-4 py-8 text-center md:w-[30%] md:px-8 md:py-10 ${feature.hidden ? "hidden md:flex" : "flex"}`}
                >
                  <div className="mb-5">
                    {feature.icon === "camera" && (
                      <svg
                        className="h-[50px] w-[50px]"
                        fill="none"
                        stroke={feature.iconColor}
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                        />
                      </svg>
                    )}
                    {feature.icon === "palette" && (
                      <svg
                        className="h-[50px] w-[50px]"
                        fill="none"
                        stroke={feature.iconColor}
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                        />
                      </svg>
                    )}
                    {feature.icon === "star" && (
                      <svg
                        className="h-[50px] w-[50px]"
                        fill="none"
                        stroke={feature.iconColor}
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    )}
                  </div>
                  <h4
                    className={`mb-3 font-poppins text-[14px] font-semibold ${feature.textColor} md:text-[20px]`}
                  >
                    {t.photobooth[featureTitleKeys[i]]}
                  </h4>
                  <p
                    className={`font-roboto text-[11px] ${feature.descColor} md:text-[15px]`}
                  >
                    {t.photobooth[featureDescKeys[i]]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F7] px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              {t.photobooth.tiposTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {t.photobooth.types.map((type) => (
                <div
                  key={type.title}
                  className="w-[47%] rounded-[24px] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:w-[48%] md:p-8"
                >
                  <h4 className="mb-4 font-poppins text-[14px] font-semibold text-[#7A33FF] md:text-[22px]">
                    {type.title}
                  </h4>
                  <p className="font-roboto text-[11px] leading-[1.6] text-[#666666] md:text-[15px]">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[5%] py-[40px] md:py-[80px]" style={{ background: "linear-gradient(135deg, #382079 0%, #7A33FF 100%)" }}>
          <div className="mx-auto flex max-w-container flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-poppins text-[27px] font-bold leading-[1.2] text-white md:text-[36px]">
                {t.photobooth.ctaTitle}
              </h2>
              <p className="mt-4 font-roboto text-base leading-[1.6] text-white/85 md:text-lg">
                {t.photobooth.ctaDesc}
              </p>
              <Link
                href={localePath(lang, "#contacto")}
                className="mt-8 inline-block rounded-[50px] bg-ebombo-orange px-9 py-4 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
              >
                {t.photobooth.solicitarCotizacion}
              </Link>
            </div>
            <div className="w-full max-w-[400px] flex-shrink-0 md:w-[45%]">
              <Image
                src="/uploads/2025/12/Mask-Group-27.png.webp"
                alt="Photobooth 360"
                width={500}
                height={400}
                className="w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              {t.photobooth.faqTitle}
            </h2>
            <div className="mx-auto max-w-[800px]">
              <FaqAccordion faqs={t.photobooth.faqs} />
            </div>
          </div>
        </section>

        <ContactForm
          lang={lang}
          title={t.photobooth.contactTitle}
          subtitle={t.photobooth.contactSubtitle}
        />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
