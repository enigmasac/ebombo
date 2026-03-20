import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { isValidLang, localePath } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { momentosCountries } from "@/data/momentos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";

  return {
    title:
      lang === "en"
        ? "Corporate Celebrations | eBombo Momentos"
        : "Celebraciones Corporativas | eBombo Momentos",
    description:
      lang === "en"
        ? "Automated delivery of artisan cakes for birthdays, work anniversaries, and corporate celebrations."
        : "Entrega automatizada de tartas, pasteles y tortas artesanales para cumpleaños, aniversarios y celebraciones corporativas.",
    alternates: {
      canonical: lang === "en" ? "/en/momentos" : "/momentos",
    },
  };
}

export default async function MomentosIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";

  return (
    <>
      <Header lang={lang} />
      <main>
        <section
          className="flex min-h-[400px] items-center px-[5%] py-[60px] md:py-[100px]"
          style={{
            background:
              "linear-gradient(135deg, #0F0520 0%, #3A1078 50%, #6A2C9A 100%)",
          }}
        >
          <div className="mx-auto flex max-w-container flex-col items-center text-center">
            <span className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[3px] text-ebombo-orange">
              EBOMBO MOMENTOS
            </span>
            <h1 className="font-poppins text-[32px] font-bold leading-[1.15] text-white md:text-[52px]">
              Celebraciones corporativas que importan
            </h1>
            <p className="mt-5 max-w-[650px] font-roboto text-base leading-[1.7] text-white/80 md:text-lg">
              Entrega automatizada de tartas y pasteles artesanales para
              cumpleaños, aniversarios y todas las celebraciones de tu equipo.
              Elige tu país para conocer más.
            </p>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              Selecciona tu país
            </h2>
            <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-3">
              {momentosCountries.map((country) => (
                <Link
                  key={country.slug}
                  href={localePath(lang, `/momentos/${country.slug}`)}
                  className="group rounded-2xl border border-[#E5E5E5] bg-white p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#7A33FF]/30 hover:shadow-[0_8px_30px_rgba(122,51,255,0.12)]"
                >
                  <span className="mb-4 block text-[48px]">
                    {country.flag}
                  </span>
                  <h3 className="mb-2 font-poppins text-[20px] font-bold text-[#1E1E1E] group-hover:text-[#7A33FF] md:text-[24px]">
                    {country.country}
                  </h3>
                  <p className="mb-4 font-roboto text-sm text-[#666666]">
                    {country.cakeWordPlural.charAt(0).toUpperCase() +
                      country.cakeWordPlural.slice(1)}{" "}
                    artesanales en{" "}
                    {country.cities.list.slice(0, 3).join(", ")} y más
                  </p>
                  <span className="inline-block font-poppins text-sm font-semibold text-[#7A33FF] transition-transform duration-300 group-hover:translate-x-1">
                    Ver más →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
