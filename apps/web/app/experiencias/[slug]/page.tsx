import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  experiences,
  getExperienceBySlug,
  getExperienceContent,
} from "@/data/experiences";
import type { ContentBlock } from "@/data/experiences";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return { title: "Experiencia no encontrada" };
  return {
    title: `${experience.title} | eBombo Internacional`,
    description:
      experience.heroDescription ||
      `Descubre la experiencia ${experience.title} de eBombo.`,
  };
}

function RenderContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mb-4 mt-8 font-poppins text-[22px] font-bold text-ebombo-secondary md:text-[28px]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mb-3 mt-6 font-poppins text-[18px] font-semibold text-ebombo-secondary md:text-[22px]"
              >
                {block.text}
              </h3>
            );
          case "h4":
            return (
              <h4
                key={i}
                className="mb-2 mt-4 font-poppins text-[16px] font-semibold text-ebombo-secondary md:text-[18px]"
              >
                {block.text}
              </h4>
            );
          case "p":
            return (
              <p
                key={i}
                className="mb-4 font-roboto text-base leading-[1.7] text-ebombo-text"
              >
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mb-4 ml-5 list-disc space-y-2 font-roboto text-base leading-[1.7] text-ebombo-text"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export default async function ExperienciaDetalle({ params }: Props) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  const bodyContent = getExperienceContent(slug);

  return (
    <>
      <Header />
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
                {experience.metaPills && (
                  <div className="flex flex-wrap gap-1">
                    {experience.metaPills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-[18px] bg-ebombo-accent px-4 py-1.5 font-poppins text-xs font-semibold tracking-[-0.5px] text-white"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
                {experience.heroDescription && (
                  <p className="font-roboto text-base leading-[1.6] text-ebombo-text">
                    {experience.heroDescription}
                  </p>
                )}
                <Link
                  href="#contacto"
                  className="self-start rounded-[64px] bg-ebombo-orange px-5 py-2.5 font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:bg-ebombo-orange-dark md:px-6 md:py-3 md:text-lg"
                >
                  Comienza a planificar
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
                  {experience.heroDescription}
                </p>
              )}
            </div>
            <div className="rounded-[33px] bg-ebombo-bg p-[3%] md:sticky md:top-[130px] md:w-[45%]">
              <h3 className="mb-4 text-center font-roboto text-[20px] font-semibold leading-[25px] text-ebombo-primary">
                Hagamos realidad tu proyecto
              </h3>
              <SidebarForm />
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function SidebarForm() {
  const inputStyles =
    "w-full rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-3 font-roboto text-base text-[#1E1E1E] outline-none placeholder:text-ebombo-text/60 focus:border-ebombo-primary";

  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Tu nombre completo"
          required
          className={inputStyles}
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/2">
          <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="Teléfono o WhatsApp"
            required
            className={inputStyles}
          />
        </div>
        <div className="md:w-1/2">
          <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
            Email
          </label>
          <input
            type="email"
            placeholder="Correo electrónico (opcional)"
            className={inputStyles}
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
          Cuéntanos más! (opcional)
        </label>
        <textarea rows={4} className={`${inputStyles} resize-none`} />
      </div>
      <button
        type="submit"
        className="w-full rounded-[50px] bg-ebombo-orange px-8 py-3 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
      >
        Enviar
      </button>
    </form>
  );
}
