import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import WhyEbombo from "@/components/WhyEbombo";
import Testimonials from "@/components/Testimonials";
import SuccessStories from "@/components/SuccessStories";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

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
        <Testimonials lang={lang} />
        <SuccessStories lang={lang} />
        <ContactForm lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
