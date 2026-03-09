import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
    title: `${t.copaDelMundo.heroTitle} | eBombo Internacional`,
    description: t.copaDelMundo.heroDesc,
  };
}

const IMG = "https://ebombo.com/wp-content/uploads/2025/12";

const howToPlayCardsData = [
  {
    bg: "bg-[#F7F7F7]",
    textColor: "text-[#1E1E1E]",
    descColor: "text-ebombo-text",
    images: [`${IMG}/Grupo-407.webp`, `${IMG}/Grupo-408.webp`],
  },
  {
    bg: "bg-[#7A33FF]",
    textColor: "text-white",
    descColor: "text-white/90",
    images: [`${IMG}/Grupo-404.webp`],
  },
  {
    bg: "bg-ebombo-orange",
    textColor: "text-white",
    descColor: "text-white/90",
    images: [`${IMG}/368-1.webp`],
  },
];

const stepIcons = [
  `${IMG}/Outline.svg`,
  `${IMG}/Vector3.svg`,
  `${IMG}/Vector2.svg`,
  `${IMG}/Vector1.svg`,
];

const pricingPlans = [
  {
    name: "Avanzado",
    participants: "0 - 100",
    price: "4",
    badgeBg: "bg-ebombo-accent",
    textColor: "text-ebombo-accent",
  },
  {
    name: "Pro",
    participants: "101 - 300",
    price: "3",
    badgeBg: "bg-ebombo-accent",
    textColor: "text-ebombo-accent",
  },
  {
    name: "Platinum",
    participants: "301 - 500",
    price: "2",
    badgeBg: "platinum-gradient",
    textColor: "text-[#4A4A4A]",
  },
  {
    name: "Exclusivo",
    participants: "500 +",
    price: "1.5",
    badgeBg: "gold-gradient",
    textColor: "text-[#D7A83D]",
  },
];

export default async function CopaDelMundo({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const t = getDictionary(lang);

  const cardTitles = [t.copaDelMundo.card1Title, t.copaDelMundo.card2Title, t.copaDelMundo.card3Title];
  const cardDescs = [t.copaDelMundo.card1Desc, t.copaDelMundo.card2Desc, t.copaDelMundo.card3Desc];
  const stepTexts = [t.copaDelMundo.step1, t.copaDelMundo.step2, t.copaDelMundo.step3, t.copaDelMundo.step4];

  return (
    <>
      <Header lang={lang} />
      <main>
        <section
          className="px-[5%] py-[50px] md:py-[80px]"
          style={{
            backgroundImage: `url(${IMG}/Mask-Group.webp)`,
            backgroundColor: "#FBFAFF",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto flex max-w-container flex-col items-center gap-8 md:flex-row md:gap-[50px]">
            <div className="flex flex-col gap-5 text-center md:w-[50%] md:text-left">
              <span className="font-poppins text-base font-semibold tracking-[2px] text-ebombo-orange">
                {t.copaDelMundo.heroLabel} ⚽
              </span>
              <h1 className="font-poppins text-[32px] font-bold leading-[1.15] text-ebombo-primary md:text-[52px]">
                {t.copaDelMundo.heroTitle}
              </h1>
              <h2 className="font-poppins text-[20px] font-semibold text-ebombo-dark md:text-[26px]">
                {t.copaDelMundo.heroSubtitle}
              </h2>
              <p className="font-roboto text-[17px] leading-[1.7] text-ebombo-dark">
                {t.copaDelMundo.heroDesc}
              </p>
              <Link
                href={localePath(lang, "#contacto")}
                className="self-center rounded-[50px] bg-ebombo-primary px-8 py-4 font-poppins text-[15px] font-semibold text-white transition-all duration-[600ms] hover:bg-[#E07A00] md:self-start"
              >
                {t.copaDelMundo.contactanos}
              </Link>
            </div>
            <div className="md:w-[45%]">
              <Image
                src={`${IMG}/imagen-world-cup.webp`}
                alt="Copa del Mundo 2026"
                width={802}
                height={512}
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px]">
          <div className="mx-auto max-w-container text-center">
            <h2 className="font-poppins text-[32px] font-bold leading-[1.15] text-ebombo-primary md:text-[46px]">
              {t.copaDelMundo.increibleTitle}
            </h2>
            <p className="mt-4 font-roboto text-base text-ebombo-secondary">
              {t.copaDelMundo.increibleDesc}
            </p>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              {t.copaDelMundo.comoJugar}
            </h2>
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-8">
              {howToPlayCardsData.map((card, i) => (
                <div
                  key={cardTitles[i]}
                  className={`flex flex-1 flex-col items-center rounded-[24px] ${card.bg} p-6 text-center md:p-8`}
                >
                  <h4
                    className={`mb-4 font-poppins text-lg font-semibold ${card.textColor}`}
                  >
                    {cardTitles[i]}
                  </h4>
                  <div className="mb-4 flex flex-col gap-2">
                    {card.images.map((img) => (
                      <Image
                        key={img}
                        src={img}
                        alt={cardTitles[i]}
                        width={362}
                        height={227}
                        className="w-full rounded-lg"
                      />
                    ))}
                  </div>
                  <p
                    className={`font-roboto text-sm font-medium ${card.descColor}`}
                  >
                    {cardDescs[i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto flex max-w-container flex-col items-center gap-10 md:flex-row">
            <div className="md:w-[55%]">
              <h2 className="mb-8 font-poppins text-[17px] font-semibold text-ebombo-secondary md:text-[20px]">
                {t.copaDelMundo.creaPolla}
              </h2>
              <div className="flex flex-col gap-4">
                {stepTexts.map((text, i) => (
                  <div
                    key={text}
                    className="flex items-center gap-4 rounded-lg bg-ebombo-primary px-4 py-3"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                      <Image
                        src={stepIcons[i]}
                        alt=""
                        width={37}
                        height={36}
                        className="h-8 w-8 brightness-0 invert"
                      />
                    </div>
                    <span className="font-poppins text-base font-semibold text-white md:text-lg">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:w-[45%] md:items-center md:justify-end">
              <Image
                src={`${IMG}/chicos.png`}
                alt="Equipo celebrando"
                width={2000}
                height={1339}
                className="w-full max-w-[500px] rounded-[24px] object-cover"
              />
            </div>
          </div>
        </section>

        <section
          className="px-[5%] py-[40px] md:py-[60px]"
          style={{
            backgroundImage: `url(${IMG}/Mask-Group.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-ebombo-primary md:text-[36px]">
              {t.copaDelMundo.planesPrecios}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex w-[47%] flex-col items-center rounded-[20px] border border-white bg-white p-4 shadow-[0_0_10px_rgba(0,0,0,0.23)] md:w-[23%] md:p-5"
                >
                  <span
                    className={`mb-4 rounded-[11px] px-4 py-1 font-poppins text-sm font-semibold text-white ${
                      plan.badgeBg === "platinum-gradient"
                        ? ""
                        : plan.badgeBg === "gold-gradient"
                          ? ""
                          : plan.badgeBg
                    }`}
                    style={
                      plan.badgeBg === "platinum-gradient"
                        ? {
                            background:
                              "linear-gradient(90deg, #AFAFAF 0%, #4A4A4A 100%)",
                          }
                        : plan.badgeBg === "gold-gradient"
                          ? {
                              background:
                                "linear-gradient(90deg, rgba(215,168,61,0.58) 30%, #D7A83D 100%)",
                            }
                          : undefined
                    }
                  >
                    {plan.name}
                  </span>
                  <div className="mb-3 flex items-center justify-center">
                    <Image
                      src={`${IMG}/Vector4.svg`}
                      alt=""
                      width={49}
                      height={49}
                      className="h-12 w-12"
                    />
                  </div>
                  <span
                    className={`font-roboto text-[19px] font-medium ${plan.textColor}`}
                  >
                    {plan.participants}
                  </span>
                  <span className={`mb-3 text-base ${plan.textColor}`}>
                    {t.copaDelMundo.participantes}
                  </span>
                  <div className="my-2 h-px w-full bg-gray-200" />
                  <span
                    className={`mt-2 text-base font-bold ${plan.textColor}`}
                  >
                    $USD
                  </span>
                  <span
                    className={`font-poppins text-[28px] font-extrabold ${plan.textColor} md:text-[32px]`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-[19px] ${plan.textColor}`}>
                    {t.copaDelMundo.porParticipante}
                  </span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-[86%] text-center font-roboto text-base text-ebombo-accent md:text-lg">
              {t.copaDelMundo.descuento}
            </p>
          </div>
        </section>

        <ContactForm
          lang={lang}
          title={t.copaDelMundo.contactTitle}
          subtitle={t.copaDelMundo.contactSubtitle}
        />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton />
    </>
  );
}
