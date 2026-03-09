import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { getDictionary, localePath } from "@/lib/i18n";

const IMG = "/uploads/2025/12";

const testimonials = [
  {
    name: "Luz María Luna",
    company: "IQVIA",
    quoteKey: "quote1" as const,
    image: `${IMG}/Luz-Maria-Luna.jpeg.webp`,
  },
  {
    name: "Ericka Chable",
    company: "LOCALIZA",
    quoteKey: "quote2" as const,
    image: `${IMG}/Ericka-Chable.jpeg.webp`,
  },
  {
    name: "Gabriela López",
    company: "ALLIANZ",
    quoteKey: "quote3" as const,
    image: `${IMG}/Gabriela-Lopez.jpeg.webp`,
  },
  {
    name: "Naomi Méndez",
    company: "DANONE",
    quoteKey: "quote4" as const,
    image: `${IMG}/Naomi-Mendez.jpeg.webp`,
  },
];

export default function Testimonials({ lang = "es" as Lang }: { lang?: Lang }) {
  const t = getDictionary(lang);

  return (
    <section className="bg-ebombo-light-purple px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-poppins text-[27px] font-bold leading-[1.2] tracking-[-0.2px] text-ebombo-secondary md:text-[38px] md:leading-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-center font-roboto text-[15px] font-semibold leading-[22px] text-ebombo-primary md:text-base">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="mt-[80px] flex flex-col items-stretch gap-3 md:flex-row md:justify-center md:gap-[2%]">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex w-full flex-col items-center rounded-[18px] bg-white p-[5%] pt-0 shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-transform duration-[600ms] hover:scale-105 md:w-[22%] md:p-[1%] md:pt-0"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="-mt-[60px] h-[100px] w-[100px] rounded-full object-cover"
              />
              <div className="flex flex-col items-center gap-[7px] p-[8%]">
                <h3 className="font-poppins text-base font-semibold tracking-[-0.8px] text-ebombo-secondary">
                  {item.name}
                </h3>
                <span className="font-roboto text-sm text-ebombo-secondary">
                  {item.company}
                </span>
                <div className="mx-auto h-px w-1/4 bg-ebombo-divider" />
                <p className="text-center font-roboto text-sm leading-[18px] text-ebombo-secondary">
                  {t.testimonials[item.quoteKey]}
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
            {t.testimonials.comienzaPlanificar}
          </Link>
          <Link
            href={localePath(lang, "/tipos-de-evento")}
            className="rounded-[64px] bg-ebombo-primary px-[15px] py-[9px] font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:scale-[1.1] hover:bg-ebombo-accent md:px-5 md:py-2.5 md:text-lg"
          >
            {t.testimonials.tiposDeEvento}
          </Link>
        </div>
      </div>
    </section>
  );
}
