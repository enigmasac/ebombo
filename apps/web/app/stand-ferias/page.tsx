import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Stands y Ferias | eBombo Internacional",
  description:
    "Diseñamos y construimos stands personalizados que destacan tu marca en ferias y eventos comerciales.",
};

const IMG = "https://ebombo.com/wp-content/uploads/stand-ferias";

const features = [
  {
    icon: "map-marker",
    title: "Ubicación Estratégica",
    description:
      "Talleres a menos de 10 km de los principales recintos feriales en cada ciudad.",
    bg: "bg-[#F7F7F7]",
    textColor: "text-[#1E1E1E]",
    descColor: "text-[#666666]",
    iconColor: "#7A33FF",
    hidden: false,
  },
  {
    icon: "award",
    title: "+10 Años de Experiencia",
    description:
      "Más de una década construyendo stands exitosos para marcas de todo el mundo.",
    bg: "bg-[#7A33FF]",
    textColor: "text-white",
    descColor: "text-white/90",
    iconColor: "#FFFFFF",
    hidden: false,
  },
  {
    icon: "expand",
    title: "+5,000 m² de Talleres",
    description:
      "Capacidad para proyectos de cualquier escala, desde 12 m² hasta pabellones nacionales.",
    bg: "bg-[#F7F7F7]",
    textColor: "text-[#1E1E1E]",
    descColor: "text-[#666666]",
    iconColor: "#7A33FF",
    hidden: true,
  },
];

const galleryImages = Array.from({ length: 9 }, (_, i) => ({
  src: `${IMG}/stand-${i + 4}.png`,
  alt: [
    "Stand corporativo",
    "Stand de exhibición",
    "Stand modular",
    "Stand con pantallas LED",
    "Stand personalizado",
    "Stand de marca",
    "Stand creativo",
    "Stand tecnológico",
    "Stand de experiencias",
  ][i],
}));

const services = [
  {
    title: "Diseño de Stands",
    description:
      "Creamos diseños únicos que reflejan la identidad de tu marca y maximizan el impacto visual en ferias y eventos.",
  },
  {
    title: "Construcción y Montaje",
    description:
      "Fabricamos y montamos tu stand con materiales de primera calidad, garantizando acabados profesionales y tiempos de entrega.",
  },
  {
    title: "Equipamiento y Mobiliario",
    description:
      "Proveemos todo el mobiliario y equipamiento necesario: pantallas, iluminación, mostradores y más.",
  },
  {
    title: "Logística Integral",
    description:
      "Nos encargamos del transporte, almacenamiento y desmontaje. Tú solo preocúpate de tu negocio.",
  },
];

export default function StandFerias() {
  return (
    <>
      <Header />
      <main>
        <section
          className="flex min-h-[450px] items-center px-[5%] py-[60px] md:py-[100px]"
          style={{
            background: "linear-gradient(135deg, #1E1E1E 0%, #382079 100%)",
          }}
        >
          <div className="mx-auto flex max-w-container flex-col items-center text-center">
            <span className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[2px] text-ebombo-orange">
              CONSTRUCCIÓN DE STANDS
            </span>
            <h1 className="font-poppins text-[32px] font-bold leading-[1.2] text-white md:text-[52px]">
              Stands y Ferias que Impactan
            </h1>
            <p className="mt-5 max-w-[650px] font-roboto text-base leading-[1.6] text-white/85 md:text-lg">
              Diseñamos y construimos stands personalizados que destacan tu marca
              en ferias y eventos comerciales.
            </p>
            <Link
              href="#contacto"
              className="mt-8 rounded-[50px] bg-ebombo-orange px-9 py-4 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
            >
              Solicitar Cotización
            </Link>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              ¿Por qué elegirnos?
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-[30px]">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className={`flex w-[47%] flex-col items-center rounded-[24px] ${feature.bg} px-4 py-8 text-center md:w-[30%] md:px-8 md:py-10 ${feature.hidden ? "hidden md:flex" : "flex"}`}
                >
                  <div className="mb-5">
                    {feature.icon === "map-marker" && (
                      <svg
                        className="h-[50px] w-[50px]"
                        fill="none"
                        stroke={feature.iconColor}
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    )}
                    {feature.icon === "award" && (
                      <svg
                        className="h-[50px] w-[50px]"
                        fill="none"
                        stroke={feature.iconColor}
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m9-9V4.5a1.5 1.5 0 00-1.5-1.5h-6a1.5 1.5 0 00-1.5 1.5v4.5"
                        />
                        <circle cx="12" cy="7" r="2.5" />
                      </svg>
                    )}
                    {feature.icon === "expand" && (
                      <svg
                        className="h-[50px] w-[50px]"
                        fill="none"
                        stroke={feature.iconColor}
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                        />
                      </svg>
                    )}
                  </div>
                  <h4
                    className={`mb-3 font-poppins text-[14px] font-semibold ${feature.textColor} md:text-[20px]`}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className={`font-roboto text-[11px] ${feature.descColor} md:text-[15px]`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F7] px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-4 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:text-[36px]">
              Nuestros Proyectos
            </h2>
            <p className="mb-10 text-center font-roboto text-base leading-[1.6] text-[#666666]">
              Descubre algunos de nuestros stands y ferias más destacados
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  className="w-[47%] overflow-hidden rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.03] md:w-[30%]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="h-[161px] w-full object-cover md:h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F7] px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              Nuestros Servicios
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="w-[47%] rounded-[24px] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:w-[48%] md:p-8"
                >
                  <h4 className="mb-4 font-poppins text-[14px] font-semibold text-[#7A33FF] md:text-[22px]">
                    {service.title}
                  </h4>
                  <p className="font-roboto text-[11px] leading-[1.6] text-[#666666] md:text-[15px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm
          title="Haz que tu marca destaque en el evento"
          subtitle="Diseñamos y producimos stands que capturan miradas. Cuéntanos sobre tu próxima feria y te ayudaremos a impactar a cada visitante."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
