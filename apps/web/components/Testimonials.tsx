import Image from "next/image";
import Link from "next/link";

const IMG = "https://ebombo.com/wp-content/uploads/2025/12";

const testimonials = [
  {
    name: "Luz María Luna",
    company: "IQVIA",
    quote:
      "El evento fue un éxito con una excelente organización, un servicio impecable y un ambiente hermoso. Estamos ansiosos por colaborar nuevamente.",
    image: `${IMG}/Luz-Maria-Luna.jpeg.webp`,
  },
  {
    name: "Ericka Chable",
    company: "LOCALIZA",
    quote:
      "¡Un evento fluido y profesional! Todo estuvo bien coordinado, y la dedicación del equipo lo convirtió en un éxito total. ¡Gracias!",
    image: `${IMG}/Ericka-Chable.jpeg.webp`,
  },
  {
    name: "Gabriela López",
    company: "ALLIANZ",
    quote:
      "El equipo de eBombo superó las expectativas con una organización perfecta y atención al detalle. Fue un evento verdaderamente memorable y agradable.",
    image: `${IMG}/Gabriela-Lopez.jpeg.webp`,
  },
  {
    name: "Naomi Méndez",
    company: "DANONE",
    quote:
      "¡Un evento virtual dinámico e interactivo! La impecable organización y profesionalismo del equipo garantizaron una experiencia fluida y exitosa.",
    image: `${IMG}/Naomi-Mendez.jpeg.webp`,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ebombo-light-purple px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-poppins text-[27px] font-bold leading-[1.2] tracking-[-0.2px] text-ebombo-secondary md:text-[38px] md:leading-tight">
            Testimonios De Clientes
          </h2>
          <p className="text-center font-roboto text-[15px] font-semibold leading-[22px] text-ebombo-primary md:text-base">
            eBombo convierte ideas en eventos inolvidables, con dedicación y
            excelencia en cada detalle.
          </p>
        </div>

        <div className="mt-[80px] flex flex-col items-stretch gap-3 md:flex-row md:justify-center md:gap-[2%]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex w-full flex-col items-center rounded-[18px] bg-white p-[5%] pt-0 shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-transform duration-[600ms] hover:scale-105 md:w-[22%] md:p-[1%] md:pt-0"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={100}
                height={100}
                className="-mt-[60px] h-[100px] w-[100px] rounded-full object-cover"
              />
              <div className="flex flex-col items-center gap-[7px] p-[8%]">
                <h4 className="font-poppins text-base font-semibold tracking-[-0.8px] text-ebombo-secondary">
                  {t.name}
                </h4>
                <span className="font-roboto text-sm text-ebombo-secondary">
                  {t.company}
                </span>
                <div className="mx-auto h-px w-1/4 bg-ebombo-divider" />
                <p className="text-center font-roboto text-sm leading-[18px] text-ebombo-secondary">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-[16px]">
          <Link
            href="#contacto"
            className="rounded-[64px] bg-ebombo-orange px-[15px] py-[9px] font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:scale-[1.1] hover:bg-ebombo-orange-dark md:px-5 md:py-2.5 md:text-lg"
          >
            Comienza a planificar
          </Link>
          <Link
            href="/tipos-de-evento"
            className="rounded-[64px] bg-ebombo-primary px-[15px] py-[9px] font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:scale-[1.1] hover:bg-ebombo-accent md:px-5 md:py-2.5 md:text-lg"
          >
            Tipos de evento
          </Link>
        </div>
      </div>
    </section>
  );
}
