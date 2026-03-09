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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <HowItWorks />
        <Solutions />
        <WhyEbombo />
        <Testimonials />
        <SuccessStories />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
