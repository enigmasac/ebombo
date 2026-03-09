import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import WhyEbombo from "@/components/WhyEbombo";
import Testimonials from "@/components/Testimonials";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false,
});

export default async function Home({
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
        <Hero lang={lang} />
        <ClientLogos lang={lang} />
        <HowItWorks lang={lang} />
        <Solutions lang={lang} />
        <WhyEbombo lang={lang} />
        <Suspense>
          <Testimonials lang={lang} />
        </Suspense>
        <Suspense>
          <SuccessStories lang={lang} />
        </Suspense>
        <ContactForm lang={lang} />
      </main>
      <Suspense>
        <Footer lang={lang} />
      </Suspense>
      <WhatsAppButton lang={lang} />
    </>
  );
}
