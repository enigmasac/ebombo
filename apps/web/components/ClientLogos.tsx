import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

const IMG = "/uploads/2025/12";

const logos = [
  { src: `${IMG}/accenture.png`, alt: "Accenture" },
  { src: `${IMG}/allianz.png`, alt: "Allianz" },
  { src: `${IMG}/adidas.png`, alt: "Adidas" },
  { src: `${IMG}/banregio.png`, alt: "Banregio" },
  { src: `${IMG}/bbva.png`, alt: "BBVA" },
  { src: `${IMG}/bcp-2.png`, alt: "BCP" },
  { src: `${IMG}/bioiberica.png`, alt: "Bioiberica" },
  { src: `${IMG}/bluespace.png`, alt: "Bluespace" },
  { src: `${IMG}/cbre.png`, alt: "CBRE" },
  { src: `${IMG}/cisco.png`, alt: "Cisco" },
  { src: `${IMG}/colgate.png`, alt: "Colgate" },
  { src: `${IMG}/danone.png`, alt: "Danone" },
  { src: `${IMG}/factorial.png`, alt: "Factorial" },
  { src: `${IMG}/logo-amazon.png`, alt: "Amazon" },
  { src: `${IMG}/loreal.png`, alt: "L'Oreal" },
  { src: `${IMG}/louis-vuitton.png`, alt: "Louis Vuitton" },
  { src: `${IMG}/mapfre.png`, alt: "Mapfre" },
  { src: `${IMG}/sap.png`, alt: "SAP" },
];

export default function ClientLogos({ lang = "es" as Lang }: { lang?: Lang }) {
  const t = getDictionary(lang);

  return (
    <section className="bg-ebombo-light-purple px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-poppins text-[27px] font-bold leading-[1.2] tracking-[-1px] text-ebombo-secondary md:text-[46px] md:leading-tight">
            {t.clientLogos.title}
          </h2>
          <p className="text-center font-roboto text-[15px] leading-[22px] text-ebombo-secondary md:text-base">
            {t.clientLogos.subtitle}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-[13px]">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className={`flex w-[30%] items-center justify-center rounded-[18px] bg-white p-[5%] shadow-[0_0_10px_rgba(0,0,0,0.05)] md:w-[13%] md:p-[2%]${logo.alt === "Danone" ? " hidden md:flex" : ""}`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={48}
                className="h-auto w-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
