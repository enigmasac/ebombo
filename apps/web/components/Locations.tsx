import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export default function Locations({ lang = "es" as Lang }: { lang?: Lang }) {
  const t = getDictionary(lang);

  return (
    <section className="bg-white px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-poppins text-[27px] font-bold leading-[1.2] tracking-[-1px] text-ebombo-secondary md:text-[46px] md:leading-tight">
            {t.locations.title}
          </h2>
          <p className="max-w-[700px] font-roboto text-[15px] leading-[22px] text-ebombo-secondary md:text-base">
            {t.locations.subtitle}
          </p>
        </div>

        <div className={`mt-8 grid gap-6 ${t.locations.countries.length === 1 ? "mx-auto max-w-[500px] grid-cols-1" : `grid-cols-1 ${t.locations.countries.length === 2 ? "mx-auto max-w-[800px] md:grid-cols-2" : "md:grid-cols-3"}`}`}>
          {t.locations.countries.map((country) => (
            <div
              key={country.name}
              className="flex flex-col gap-4 rounded-[18px] border-t-4 border-ebombo-primary bg-ebombo-light-purple p-6 shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-transform duration-[600ms] hover:scale-105"
            >
              <h3 className="font-poppins text-[22px] font-bold tracking-[-0.5px] text-ebombo-secondary">
                <span className="mr-2">{country.flag}</span>
                {country.name}
              </h3>
              <p className="flex-1 font-roboto text-sm leading-[20px] text-ebombo-secondary">
                {country.description}
              </p>
              <Link
                href="#contacto"
                className="mt-auto w-fit rounded-[64px] bg-ebombo-orange px-5 py-2 font-poppins text-sm font-semibold text-white transition-all duration-[600ms] hover:bg-ebombo-orange-dark"
              >
                {t.locations.contactCta} {country.name.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
