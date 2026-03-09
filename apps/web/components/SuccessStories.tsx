import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "Penka Corporativa Uruguay",
    image:
      "https://ebombo.com/wp-content/uploads/2026/03/Penka-Corporativa-Uruguay-.jpg",
    badge: "Deporte",
    duration: "30 min",
    href: "/experiencias/penka-corporativa-uruguay",
  },
  {
    title: "Agencia de Eventos en Madrid",
    image:
      "https://ebombo.com/wp-content/uploads/2026/03/Agencia-de-Eventos-en-Madrid-.jpg",
    badge: "Outdoor",
    duration: "30 min",
    href: "/experiencias/agencia-eventos-madrid",
  },
  {
    title: "Clase de Mixología para Team Building",
    image:
      "https://ebombo.com/wp-content/uploads/2026/01/Clase-de-Mixologia-de-Cocteles-para-Team-Building.jpg",
    badge: "Cocina",
    duration: "30 min",
    href: "/experiencias/clase-mixologia-team-building",
  },
  {
    title: "Conferencias",
    image:
      "https://ebombo.com/wp-content/uploads/2026/02/Conferencias.jpg",
    badge: "Innovación",
    duration: "30 min",
    href: "/experiencias/conferencias",
  },
  {
    title: "Duelo de Compañeros",
    image:
      "https://ebombo.com/wp-content/uploads/2025/12/6a2PyEck.jpeg",
    badge: "Trivia",
    duration: "30 min",
    href: "/experiencias/duelo-de-companeros",
  },
  {
    title: "Evento de Team Building Solidario",
    image:
      "https://ebombo.com/wp-content/uploads/2026/01/Evento-de-Team-Building-Solidario.jpg",
    badge: "Voluntariado",
    duration: "30 min",
    href: "/experiencias/team-building-solidario",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-white px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-poppins text-[27px] font-bold leading-[1.2] tracking-[-0.2px] text-ebombo-secondary md:text-[38px] md:leading-tight">
            Descubre Nuestras Historias De Éxito
          </h2>
          <p className="text-center font-roboto text-[15px] font-semibold leading-[22px] text-ebombo-primary md:text-base">
            Explora cómo hemos hecho eventos extraordinarios
          </p>
        </div>

        <div className="mt-8 flex flex-col flex-wrap items-stretch gap-5 md:flex-row md:justify-center md:gap-[2%]">
          {stories.map((story) => (
            <Link
              key={story.title}
              href={story.href}
              className="group w-full overflow-hidden rounded-[24px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-transform duration-[600ms] hover:scale-[1.02] md:w-[30%]"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-poppins text-base font-semibold tracking-[-0.8px] text-ebombo-secondary">
                  {story.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#F3EEFF] px-3 py-1.5 font-poppins text-xs font-medium text-[#7A33FF]">
                    {story.badge}
                  </span>
                  <span className="font-roboto text-xs text-ebombo-text">
                    {story.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
