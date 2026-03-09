import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { fetchExperience } from "@/lib/api";
import RenderContent from "@/components/RenderContent";
import { isValidLang, getDictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import SidebarForm from "./SidebarForm";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const experience = await fetchExperience(slug, lang);
  if (!experience) return { title: "Experiencia no encontrada" };
  return {
    title: `${experience.title} | eBombo Internacional`,
    description:
      experience.hero_description ||
      `Descubre la experiencia ${experience.title} de eBombo.`,
  };
}

export default async function ExperienciaDetalle({ params }: Props) {
  const { lang: rawLang, slug } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const t = getDictionary(lang);
  const experience = await fetchExperience(slug, lang);
  if (!experience) notFound();

  const bodyContent = experience.body_content || [];
  const metaPills = experience.meta_pills || [];

  return (
    <>
      <Header lang={lang} />
      <main>
        <section className="bg-white px-[5%] pt-[20px] md:pt-[30px]">
          <div className="mx-auto max-w-container">
            <div className="flex overflow-hidden rounded-[28px] bg-ebombo-light-purple shadow-[0_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col gap-5 p-[5%] md:w-[60%]">
                <span className="inline-block self-start rounded-[50px] bg-white px-3 py-1.5 font-poppins text-xs font-medium text-[#7A33FF]">
                  {experience.badge}
                </span>
                <h1 className="font-poppins text-[27px] font-bold leading-[1.13] tracking-[-1px] text-ebombo-secondary md:text-[46px]">
                  {experience.title}
                </h1>
                {metaPills.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {metaPills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-[18px] bg-ebombo-accent px-4 py-1.5 font-poppins text-xs font-semibold tracking-[-0.5px] text-white"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
                {experience.hero_description && (
                  <p className="font-roboto text-base leading-[1.6] text-ebombo-text">
                    {experience.hero_description}
                  </p>
                )}
                <Link
                  href="#contacto"
                  className="self-start rounded-[64px] bg-ebombo-orange px-5 py-2.5 font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:bg-ebombo-orange-dark md:px-6 md:py-3 md:text-lg"
                >
                  {t.experiencias.comienzaPlanificar}
                </Link>
              </div>
              <div
                className="hidden bg-cover bg-center md:block md:w-[40%]"
                style={{
                  backgroundImage: `url(${experience.image})`,
                  borderRadius: "0 28px 28px 0",
                }}
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px]">
          <div className="mx-auto flex max-w-container flex-col gap-10 md:flex-row md:items-start">
            <div className="md:w-[55%]">
              {bodyContent.length > 0 ? (
                <RenderContent blocks={bodyContent} />
              ) : (
                <p className="mb-5 font-roboto text-base leading-[1.7] text-ebombo-text">
                  {experience.hero_description}
                </p>
              )}
            </div>
            <div className="rounded-[33px] bg-ebombo-bg p-[3%] md:sticky md:top-[130px] md:w-[45%]">
              <h3 className="mb-4 text-center font-roboto text-[20px] font-semibold leading-[25px] text-ebombo-primary">
                {t.experiencias.hagamosRealidad}
              </h3>
              <SidebarForm lang={lang} />
            </div>
          </div>
        </section>

        <ContactForm lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton />
    </>
  );
}

