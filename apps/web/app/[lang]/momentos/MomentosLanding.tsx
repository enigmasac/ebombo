import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import CelebrationTypesGrid from "./CelebrationTypesGrid";
import type { MomentosCountryData } from "@/data/momentos";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

export default function MomentosLanding({
  data,
  lang,
}: {
  data: MomentosCountryData;
  lang: Lang;
}) {
  return (
    <>
      <section
        className="flex min-h-[500px] items-center px-[5%] py-[60px] md:py-[120px]"
        style={{
          background:
            "linear-gradient(135deg, #0F0520 0%, #3A1078 50%, #6A2C9A 100%)",
        }}
      >
        <div className="mx-auto flex max-w-container flex-col items-center text-center">
          <span className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[3px] text-ebombo-orange">
            {data.hero.label}
          </span>
          <h1 className="font-poppins text-[36px] font-bold leading-[1.15] text-white md:text-[56px]">
            {data.hero.title}
          </h1>
          <p className="mt-6 max-w-[700px] font-roboto text-base leading-[1.7] text-white/80 md:text-lg">
            {data.hero.subtitle}
          </p>
          <Link
            href={localePath(lang, "#contacto")}
            className="mt-10 rounded-[50px] bg-ebombo-orange px-10 py-4 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
          >
            {data.hero.cta}
          </Link>
        </div>
      </section>

      <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
        <div className="mx-auto max-w-[750px] text-center">
          <h2 className="mb-6 font-poppins text-[27px] font-bold text-[#1E1E1E] md:text-[36px]">
            {data.intro.title}
          </h2>
          <p className="font-roboto text-base leading-[1.7] text-[#666666] md:text-lg">
            {data.intro.text}
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAFA] px-[5%] py-[40px] md:py-[80px]">
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
            Tipos de celebración
          </h2>
          <CelebrationTypesGrid types={data.celebrationTypes} />
        </div>
      </section>

      <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
            {data.howItWorks.title}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.howItWorks.steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <span className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 font-poppins text-[80px] font-bold leading-none text-[#7A33FF]/10 md:text-[100px]">
                  {step.number}
                </span>
                <div className="relative pt-12 md:pt-16">
                  <h3 className="mb-3 font-poppins text-[16px] font-semibold text-[#1E1E1E] md:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="font-roboto text-[13px] leading-[1.6] text-[#666666] md:text-[14px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-[5%] py-[40px] md:py-[80px]"
        style={{
          background:
            "linear-gradient(135deg, #0F0520 0%, #3A1078 100%)",
        }}
      >
        <div className="mx-auto max-w-container text-center">
          <h2 className="mb-10 font-poppins text-[27px] font-bold text-white md:mb-[50px] md:text-[36px]">
            {data.cities.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.cities.list.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-poppins text-sm font-medium text-white backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
            {data.reasons.title}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.reasons.items.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl bg-[#F7F7F7] p-6 md:p-8"
              >
                <h3 className="mb-3 font-poppins text-[16px] font-semibold text-[#7A33FF] md:text-[20px]">
                  {reason.title}
                </h3>
                <p className="font-roboto text-[13px] leading-[1.6] text-[#666666] md:text-[15px]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] px-[5%] py-[40px] md:py-[80px]">
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
            {data.companyTypes.title}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.companyTypes.items.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              >
                <h3 className="mb-2 font-poppins text-[15px] font-semibold text-[#1E1E1E] md:text-[17px]">
                  {type.title}
                </h3>
                <p className="font-roboto text-[13px] leading-[1.6] text-[#666666] md:text-[14px]">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
        <div className="mx-auto max-w-container">
          <h2 className="mb-3 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:text-[36px]">
            {data.personalization.title}
          </h2>
          <p className="mb-10 text-center font-roboto text-base text-[#666666] md:mb-[50px]">
            {data.personalization.subtitle}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.personalization.options.map((option) => (
              <div key={option.title} className="rounded-2xl border border-[#E5E5E5] p-6">
                <h3 className="mb-4 font-poppins text-[16px] font-semibold text-[#1E1E1E] md:text-[18px]">
                  {option.title}
                </h3>
                <ul className="space-y-2">
                  {option.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-roboto text-[13px] text-[#666666] md:text-[14px]"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A33FF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-[5%] py-[40px] md:py-[80px]"
        style={{
          background: "linear-gradient(135deg, #382079 0%, #7A33FF 100%)",
        }}
      >
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-white md:mb-[50px] md:text-[36px]">
            {data.benefits.title}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.benefits.items.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <h3 className="mb-3 font-poppins text-[15px] font-semibold text-white md:text-[17px]">
                  {benefit.title}
                </h3>
                <p className="font-roboto text-[13px] leading-[1.6] text-white/80 md:text-[14px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto max-w-[800px]">
            <FaqAccordion faqs={data.faqs} />
          </div>
        </div>
      </section>

      <ContactForm
        lang={lang}
        title={data.contact.title}
        subtitle={data.contact.subtitle}
      />
    </>
  );
}
