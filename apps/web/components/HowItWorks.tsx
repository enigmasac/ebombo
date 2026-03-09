import Image from "next/image";
import Link from "next/link";
import { Lang, getDictionary, localePath } from "@/lib/i18n";

const stepIcons = [
  <svg key="plan" className="h-7 w-7" fill="currentColor" viewBox="0 0 384 512">
    <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17l22.7-22.5c4.7-4.7 12.3-4.6 17 .1l54.8 55.1 114.7-113.9c4.7-4.7 12.3-4.6 17 .1l22.5 22.7c4.7 4.7 4.6 12.3-.2 17z" />
  </svg>,
  <svg key="book" className="h-7 w-7" fill="currentColor" viewBox="0 0 448 512">
    <path d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm333.3 130.7l-29.1-27.3c-4.8-4.5-12.3-4.3-16.8.5L194.1 402.2l-65.6-69.5c-4.5-4.8-12.1-5-16.8-.5l-29.1 27.3c-4.8 4.5-5 12.1-.5 16.8l101.2 107.2c4.5 4.8 12.1 5 16.8.5l189.2-200.5c4.5-4.8 4.3-12.3-.5-16.8z" />
  </svg>,
  <svg key="execute" className="h-7 w-7" fill="currentColor" viewBox="0 0 512 512">
    <path d="M505.1 19.1C503.8 13 499 8.2 492.9 6.9 460.7 0 435.5 0 410.4 0 307.2 0 245.3 55.2 199.1 128H94.9c-18.2 0-34.8 10.3-42.9 26.5L2.6 253.3c-8 16 3.6 34.7 21.5 34.7h95.1c-5.9 12.8-11.9 25.5-18 37.7-3.1 6.2-1.9 13.6 3 18.5l63.6 63.6c4.9 4.9 12.3 6.1 18.5 3 12.2-6.1 24.9-12.1 37.7-18v95.1c0 17.9 18.8 29.5 34.7 21.5l98.7-49.4c16.3-8.1 26.5-24.8 26.5-42.9V312.8c72.6-46.3 128-108.4 128-211.1.1-25.2.1-50.4-6.8-82.6zM400 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" />
  </svg>,
];

export default function HowItWorks({ lang = "es" }: { lang?: Lang }) {
  const t = getDictionary(lang);

  const steps = [
    {
      icon: stepIcons[0],
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
    },
    {
      icon: stepIcons[1],
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
    },
    {
      icon: stepIcons[2],
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
    },
  ];

  return (
    <section className="bg-white px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto flex max-w-container flex-col items-center justify-center gap-[30px] md:flex-row md:gap-[60px]">
        <div className="order-last hidden md:order-first md:block md:flex-1">
          <Image
            src="https://ebombo.com/wp-content/uploads/2025/12/events-awards-and-Recognition.jpg.webp"
            alt="Eventos corporativos"
            width={1700}
            height={1001}
            className="h-[600px] w-full rounded-[28px] object-cover"
          />
        </div>

        <div className="flex flex-col gap-[30px] md:flex-1">
          <div className="flex flex-col gap-[8px] text-center md:gap-[12px] md:pl-[43px] md:text-left">
            <h2 className="font-poppins text-[27px] font-bold leading-[1.2] tracking-[-1px] text-ebombo-secondary md:text-[46px] md:leading-tight">
              {t.howItWorks.title}
            </h2>
            <h3 className="font-poppins text-[16px] font-semibold text-ebombo-primary md:text-[22px]">
              {t.howItWorks.subtitle}
            </h3>
          </div>

          <div className="flex flex-col gap-[20px] md:gap-[28px]">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex items-start gap-[15px] text-left"
              >
                <div className="mt-1 shrink-0 text-ebombo-primary">
                  {step.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-roboto text-[16px] font-semibold leading-none text-ebombo-primary">
                    {step.title}
                  </h3>
                  <p className="font-roboto text-[15px] font-normal leading-[1.5] text-ebombo-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-[16px] md:justify-start">
            <Link
              href="#contacto"
              className="rounded-[64px] bg-ebombo-orange px-[15px] py-[9px] font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:scale-[1.1] hover:bg-ebombo-orange-dark md:px-5 md:py-2.5 md:text-lg"
            >
              {t.howItWorks.comienzaPlanificar}
            </Link>
            <Link
              href={localePath(lang, "/tipos-de-evento")}
              className="rounded-[64px] bg-ebombo-primary px-[15px] py-[9px] font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:scale-[1.1] hover:bg-ebombo-accent md:px-5 md:py-2.5 md:text-lg"
            >
              {t.howItWorks.tiposDeEvento}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
