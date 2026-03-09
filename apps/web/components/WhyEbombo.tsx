import Image from "next/image";

const features = [
  {
    title: "Planificación Integral",
    description:
      "Nos encargamos de cada detalle para que disfrutes de un evento impecable de principio a fin",
  },
  {
    title: "Diseño Personalizado",
    description:
      "Creamos experiencias únicas adaptadas a tus gustos y necesidades",
  },
  {
    title: "Gestión en Tiempo Real",
    description:
      "Monitoreo constante para garantizar que cada momento fluya sin problemas",
  },
  {
    title: "Equipo de Expertos en Planificación",
    description:
      "Profesionales apasionados con experiencia y dedicación en cada proyecto",
  },
];

export default function WhyEbombo() {
  return (
    <section className="bg-white px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto flex max-w-container flex-col items-center justify-center gap-[30px] md:flex-row md:gap-[42px]">
        <div className="flex flex-col gap-3 md:flex-1 md:gap-[17px]">
          <div className="flex flex-col gap-[10px] text-center md:gap-[15px] md:text-left">
            <h2 className="font-poppins text-[27px] font-bold leading-[1.2] tracking-[-1px] text-ebombo-secondary md:text-[46px] md:leading-tight">
              Por qué Elegir eBombo
            </h2>
            <p className="font-roboto text-[15px] font-semibold leading-[22px] text-ebombo-primary md:text-base">
              Planificación de eventos integral, diseño personalizado de eventos
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[6px] border-l-4 border-ebombo-primary py-[15px] pl-[15px] shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-transform duration-[600ms] hover:scale-105"
              >
                <h5 className="mb-3 font-poppins font-semibold leading-none tracking-[-0.1px] text-ebombo-primary">
                  {feature.title}
                </h5>
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
            alt="Por qué elegir eBombo"
            width={1651}
            height={1101}
            className="h-[600px] w-full rounded-[28px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
