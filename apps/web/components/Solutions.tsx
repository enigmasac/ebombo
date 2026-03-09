import Image from "next/image";
import Link from "next/link";

const IMG = "https://ebombo.com/wp-content/uploads/2025/12";

const cards = [
  {
    image: `${IMG}/event-type.webp`,
    title: "Descubre opciones de eventos",
    description: "Elige el tipo de evento ideal para tus necesidades",
  },
  {
    image: `${IMG}/company-merch.webp`,
    title: "Merchandising Personalizado de la Empresa",
    description: "Merchandising personalizado para destacar tu marca",
  },
  {
    image: `${IMG}/budget.webp`,
    title: "Planifica tu Presupuesto",
    description:
      "Planifica y gestiona fácilmente el presupuesto de tu evento",
  },
];

export default function Solutions() {
  return (
    <section className="bg-ebombo-light-purple px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-poppins text-[27px] font-bold leading-[1.2] tracking-[-0.2px] text-ebombo-secondary md:text-[38px] md:leading-tight">
            Todas Las Soluciones Que Necesitas En Un Solo Lugar
          </h2>
          <p className="text-center font-roboto text-[15px] font-semibold leading-[22px] text-ebombo-primary md:text-base">
            Simplifica la planificación de tu evento con todo lo que necesitas,
            todo en una sola plataforma
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-[1%]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full rounded-[18px] bg-white p-[5%] shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-transform duration-[600ms] hover:scale-105 md:w-[30%] md:p-[1%]"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={600}
                height={332}
                className="w-full rounded-[18px]"
              />
              <div className="flex flex-col items-center gap-[7px] p-[8%]">
                <h3 className="text-center font-poppins text-base font-semibold tracking-[-0.8px] text-ebombo-secondary">
                  {card.title}
                </h3>
                <div className="mx-auto h-px w-1/4 bg-ebombo-divider" />
                <p className="text-center font-roboto text-sm font-normal text-ebombo-secondary">
                  {card.description}
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
