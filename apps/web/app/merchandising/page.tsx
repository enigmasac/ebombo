import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Merchandising Personalizado | eBombo Internacional",
  description:
    "Catálogo personalizado de productos exclusivos. Convierte tus ideas en realidad con nuestro servicio de diseño y producción de merchandising.",
};

const IMG = "https://ebombo.com/wp-content/uploads/merchandising";

const categories = [
  {
    title: "Bolsos y Accesorios",
    description: "Mochilas, maletines y bolsas con tu marca.",
    bg: "#FF8A50",
    image: `${IMG}/img-bags.webp`,
  },
  {
    title: "Papelería y Escritura",
    description: "Cuadernos, bolígrafos y accesorios de oficina.",
    bg: "#7A33FF",
    image: `${IMG}/img-stationery.webp`,
  },
  {
    title: "Branding con Estilo",
    description: "Tazas, gorras y artículos de diseño único.",
    bg: "#F78A0A",
    image: `${IMG}/img-stylish.webp`,
  },
  {
    title: "Tecnología y Gadgets",
    description: "USB, cargadores y accesorios tech.",
    bg: "#5B4BD5",
    image: `${IMG}/img-tech.webp`,
  },
  {
    title: "Artículos Temáticos",
    description: "Productos para eventos y temporadas especiales.",
    bg: "#27AE60",
    image: `${IMG}/img-thematic.webp`,
  },
  {
    title: "Cajas de Regalo",
    description: "Kits y cajas con sorpresas personalizadas.",
    bg: "#E74C3C",
    image: `${IMG}/img-gift-collection.webp`,
  },
];

export default function Merchandising() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-[5%] py-[40px] md:py-[60px]"
          style={{
            background: "linear-gradient(135deg, #7A33FF 0%, #5B1FCC 100%)",
          }}
        >
          <div className="mx-auto flex max-w-container flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col gap-5 text-center md:w-[50%] md:text-left">
              <span className="font-poppins text-sm font-medium tracking-[2px] text-white/80">
                Regalos y Merchandising
              </span>
              <h1 className="font-poppins text-[28px] font-bold leading-[1.2] text-white md:text-[42px]">
                Catálogo Personalizado de Productos Exclusivos
              </h1>
              <p className="font-roboto text-base leading-[1.6] text-white/90">
                Convierte tus ideas en realidad con nuestro servicio de diseño y
                producción de merchandising.
              </p>
              <Link
                href="#contacto"
                className="self-center rounded-[50px] bg-white px-8 py-3.5 font-poppins text-[15px] font-semibold text-[#7A33FF] transition-all duration-[600ms] hover:bg-ebombo-orange hover:text-white md:self-start"
              >
                Obtener Catálogo
              </Link>
            </div>
            <div className="flex items-center justify-center md:w-[45%]">
              <Image
                src="https://ebombo.com/wp-content/uploads/2026/01/ebombomertch-e1768602976559.png"
                alt="Merchandising eBombo"
                width={1024}
                height={978}
                className="w-[250px] md:w-[350px]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F7] px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto flex max-w-container flex-col items-center gap-8 md:flex-row">
            <div className="flex items-center justify-center md:w-[40%]">
              <Image
                src={`${IMG}/img-personal-items.webp`}
                alt="Botella personalizada"
                width={400}
                height={400}
                className="w-[200px] md:w-[280px]"
              />
            </div>
            <div className="flex flex-col gap-5 text-center md:w-[55%] md:text-left">
              <span className="font-poppins text-sm font-semibold tracking-[1px] text-[#7A33FF]">
                Artículos Personales
              </span>
              <h2 className="font-poppins text-[24px] font-bold leading-[1.3] text-[#1E1E1E] md:text-[32px]">
                Personaliza Tus Regalos Y Merchandising
              </h2>
              <p className="font-roboto text-base leading-[1.6] text-[#666666]">
                Botellas ecológicas, elegantes tazas y artículos de calidad para
                potenciar tu marca con estilo.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              Nuestro Catálogo
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  className="flex min-h-[320px] w-[47%] flex-col items-center justify-end overflow-hidden rounded-[24px] p-5 pb-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:w-[30%]"
                  style={{ backgroundColor: cat.bg }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={160}
                    height={160}
                    className="mb-5 w-[160px]"
                  />
                  <h3 className="mb-1 text-center font-poppins text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                  <p className="text-center font-roboto text-[13px] leading-[1.4] text-white/85">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm
          title="Lleva tu marca a las manos de tu equipo"
          subtitle="Cotiza kits de bienvenida y regalos corporativos únicos. Dinos qué necesitas y crearemos el merch perfecto que todos querrán usar."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
