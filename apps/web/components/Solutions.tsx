import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { getDictionary, localePath } from "@/lib/i18n";

const IMG = "/uploads/2025/12";

export default function Solutions({ lang = "es" as Lang }: { lang?: Lang }) {
  const t = getDictionary(lang);

  const cards = [
    {
      image: `${IMG}/event-type.webp`,
      title: t.solutions.card1Title,
      description: t.solutions.card1Desc,
    },
    {
      image: `${IMG}/company-merch.webp`,
      title: t.solutions.card2Title,
      description: t.solutions.card2Desc,
    },
    {
      image: `${IMG}/budget.webp`,
      title: t.solutions.card3Title,
      description: t.solutions.card3Desc,
    },
  ];

  return (
    <section className="bg-ebombo-light-purple px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-poppins text-[27px] font-bold leading-[1.2] tracking-[-0.2px] text-ebombo-secondary md:text-[38px] md:leading-tight">
            {t.solutions.title}
          </h2>
          <p className="text-center font-roboto text-[15px] font-semibold leading-[22px] text-ebombo-primary md:text-base">
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-[1%]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full rounded-[18px] bg-white p-[5%] shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-transform duration-[600ms] hover:scale-105 md:w-[30%] md:p-[1%]"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={340}
                height={188}
                sizes="(max-width: 768px) 90vw, 340px"
                className="w-full rounded-[18px]"
              />
              <div className="flex flex-col items-center gap-[7px] p-[8%]">
                <h3 className="text-center font-poppins text-base font-semibold tracking-[-0.8px] text-ebombo-secondary">
                  {card.title}
                </h3>
                <div className="mx-auto h-px w-1/4 bg-ebombo-divider" />
                <p className="text-center font-roboto text-sm font-normal text-ebombo-secondary">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-[16px]">
          <Link
            href="#contacto"
            className="rounded-[64px] bg-ebombo-orange px-[15px] py-[9px] font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:scale-[1.1] hover:bg-ebombo-orange-dark md:px-5 md:py-2.5 md:text-lg"
          >
            {t.solutions.comienzaPlanificar}
          </Link>
          <Link
            href={localePath(lang, "/tipos-de-evento")}
            className="rounded-[64px] bg-ebombo-primary px-[15px] py-[9px] font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:scale-[1.1] hover:bg-ebombo-accent md:px-5 md:py-2.5 md:text-lg"
          >
            {t.solutions.tiposDeEvento}
          </Link>
        </div>
      </div>
    </section>
  );
}
