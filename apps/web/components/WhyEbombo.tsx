import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export default function WhyEbombo({ lang = "es" as Lang }: { lang?: Lang }) {
  const t = getDictionary(lang);

  const features = [
    {
      title: t.whyEbombo.feature1Title,
      description: t.whyEbombo.feature1Desc,
    },
    {
      title: t.whyEbombo.feature2Title,
      description: t.whyEbombo.feature2Desc,
    },
    {
      title: t.whyEbombo.feature3Title,
      description: t.whyEbombo.feature3Desc,
    },
    {
      title: t.whyEbombo.feature4Title,
      description: t.whyEbombo.feature4Desc,
    },
  ];

  return (
    <section className="bg-white px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto flex max-w-container flex-col items-center justify-center gap-[30px] md:flex-row md:gap-[42px]">
        <div className="flex flex-col gap-3 md:flex-1 md:gap-[17px]">
          <div className="flex flex-col gap-[10px] text-center md:gap-[15px] md:text-left">
            <h2 className="font-poppins text-[27px] font-bold leading-[1.2] tracking-[-1px] text-ebombo-secondary md:text-[46px] md:leading-tight">
              {t.whyEbombo.title}
            </h2>
            <p className="font-roboto text-[15px] font-semibold leading-[22px] text-ebombo-primary md:text-base">
              {t.whyEbombo.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[6px] border-l-4 border-ebombo-primary py-[15px] pl-[15px] shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-transform duration-[600ms] hover:scale-105"
              >
                <h3 className="mb-3 font-poppins font-semibold leading-none tracking-[-0.1px] text-ebombo-primary">
                  {feature.title}
                </h3>
                <p className="font-roboto text-sm font-normal text-ebombo-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-last hidden md:block md:flex-1">
          <Image
            src="https://ebombo.com/wp-content/uploads/2025/12/events-home4.jpg.webp"
            alt={t.whyEbombo.title}
            width={1651}
            height={1101}
            className="h-[600px] w-full rounded-[28px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
