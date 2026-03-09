import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre Nosotros | eBombo Internacional",
  description:
    "Conoce a eBombo: impulsados por un propósito, enfocados en las personas. Empoderando organizaciones con soluciones innovadoras para el engagement laboral.",
};

const IMG = "https://ebombo.com/wp-content/uploads";

const stats = [
  { number: "+10", label: "Años de experiencia" },
  { number: "+500", label: "Eventos realizados" },
  { number: "+50K", label: "Participantes" },
  { number: "5", label: "Países" },
];

const values = [
  {
    icon: "lightbulb",
    title: "Innovación",
    description:
      "Rompemos límites y abrazamos la creatividad para ofrecer soluciones visionarias.",
    bg: "bg-[#7A33FF]",
  },
  {
    icon: "bolt",
    title: "Eficiencia",
    description:
      "Simplificamos procesos y optimizamos el tiempo para resultados más rápidos y efectivos.",
    bg: "bg-ebombo-orange",
  },
  {
    icon: "heart",
    title: "Enfoque en el Cliente",
    description:
      "Nuestros clientes están en el centro de todo. Escuchamos, nos adaptamos y vamos más allá.",
    bg: "bg-[#1E1E1E]",
  },
];

const founders = [
  {
    name: "Mateo Suarez Stewart",
    role: "Co-Founder & CEO",
    roleColor: "#7A33FF",
    shadowColor: "rgba(122,51,255,0.2)",
    bio: "Apasionado por la innovación y el desarrollo de soluciones que transformen la experiencia laboral.",
    image: `${IMG}/2025/12/1681340380458.jpeg`,
  },
  {
    name: "Santiago Suarez Stewart",
    role: "Co-Founder & CTO",
    roleColor: "#F78A0A",
    shadowColor: "rgba(247,138,10,0.2)",
    bio: "Experto en tecnología y desarrollo de plataformas que conectan equipos y potencian el engagement.",
    image: `${IMG}/2025/12/1666126684651.jpeg`,
  },
  {
    name: "Mariel Figallo",
    role: "Co-Founder & CCO",
    roleColor: "#7A33FF",
    shadowColor: "rgba(122,51,255,0.2)",
    bio: "Líder en gestión comercial y marketing, dedicada a desarrollar oportunidades de alto valor que potencian el alcance de la empresa.",
    image: `${IMG}/2025/12/1666216414819.jpeg`,
  },
];

const visionPoints = [
  "Conexiones auténticas entre equipos",
  "Experiencias memorables y transformadoras",
  "Tecnología al servicio de las personas",
];

export default function Nosotros() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-[5%] py-[60px] md:py-[100px]"
          style={{
            background: "linear-gradient(135deg, #382079 0%, #1E1E1E 100%)",
          }}
        >
          <div className="mx-auto flex max-w-container flex-col items-center text-center">
            <span className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[2px] text-ebombo-orange">
              SOBRE NOSOTROS
            </span>
            <h1 className="font-poppins text-[28px] font-bold leading-[1.2] text-white md:text-[48px]">
              Impulsados por un Propósito, Enfocados en las Personas
            </h1>
            <p className="mt-5 max-w-[700px] font-roboto text-base leading-[1.6] text-white/85 md:text-xl">
              Empoderando a las organizaciones para que se centren en lo que más
              importa: Su gente.
            </p>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto flex max-w-container flex-col items-center gap-10 md:flex-row md:gap-[60px]">
            <div className="md:w-[49%]">
              <span className="mb-4 block font-poppins text-[13px] font-semibold uppercase tracking-[1.5px] text-[#7A33FF]">
                NUESTRA MISIÓN
              </span>
              <h2 className="mb-5 font-poppins text-[24px] font-bold leading-[1.3] text-[#1E1E1E] md:text-[32px]">
                Redefiniendo la experiencia laboral moderna
              </h2>
              <p className="font-roboto text-base leading-[1.7] text-[#666666]">
                En eBombo, estamos comprometidos a empoderar a las
                organizaciones con soluciones innovadoras diseñadas para el
                dinámico entorno laboral actual. Nuestra misión es potenciar el
                compromiso de los empleados y permitir que los equipos se
                enfoquen en lo que realmente importa: su gente.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-5 md:w-[40%]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex w-[47%] flex-col items-center rounded-[20px] bg-[#F3EEFF] px-4 py-6"
                >
                  <span className="font-poppins text-[36px] font-bold text-[#7A33FF]">
                    {stat.number}
                  </span>
                  <span className="text-center font-roboto text-[13px] text-[#666666]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto flex max-w-container flex-col items-center gap-8 md:flex-row md:gap-[50px]">
            <div className="md:w-[45%]">
              <Image
                src={`${IMG}/nosotros/hands-working-together.jpg`}
                alt="Equipo trabajando juntos"
                width={600}
                height={400}
                className="w-full rounded-[24px] object-cover"
              />
            </div>
            <div className="md:w-[50%]">
              <span className="mb-4 block font-poppins text-[13px] font-semibold uppercase tracking-[1.5px] text-ebombo-orange">
                NUESTRA VISIÓN
              </span>
              <h2 className="mb-5 font-poppins text-[24px] font-bold leading-[1.3] text-[#1E1E1E] md:text-[32px]">
                Construyendo el futuro del trabajo colaborativo
              </h2>
              <p className="mb-6 font-roboto text-base leading-[1.7] text-[#666666]">
                Aspiramos a ser líderes globales en soluciones de engagement y
                team building, creando experiencias que inspiren, conecten y
                transformen la cultura organizacional de las empresas más
                innovadoras del mundo.
              </p>
              <div className="flex flex-col gap-3">
                {visionPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <svg
                      className="h-[18px] w-[18px] shrink-0 text-[#27AE60]"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                    </svg>
                    <span className="font-roboto text-[15px] font-medium text-ebombo-text">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container text-center">
            <span className="mb-3 block font-poppins text-[13px] font-semibold uppercase tracking-[1.5px] text-[#7A33FF]">
              VALORES FUNDAMENTALES
            </span>
            <h2 className="mb-10 font-poppins text-[24px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[32px]">
              La Base de Todo lo que Hacemos
            </h2>
            <div className="flex flex-col items-stretch gap-6 md:flex-row md:justify-center">
              {values.map((value) => (
                <div
                  key={value.title}
                  className={`flex flex-1 flex-col items-center rounded-[24px] ${value.bg} px-8 py-10`}
                >
                  <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-white/60 bg-white/20">
                    {value.icon === "lightbulb" && (
                      <svg
                        className="h-8 w-8"
                        fill="white"
                        viewBox="0 0 352 512"
                      >
                        <path d="M96 454.5v25c0 18 14.3 32.5 32 32.5h96c17.7 0 32-14.5 32-32.5v-25H96zm128-310.5c0 33.3-12.9 63.6-34 86.2-17.6 18.8-30 42.5-34 69.3H148c-4-26.8-16.4-50.5-34-69.3C92.9 207.6 80 177.3 80 144 80 64.5 144.5 0 224 0s144 64.5 144 144z" />
                      </svg>
                    )}
                    {value.icon === "bolt" && (
                      <svg
                        className="h-8 w-8"
                        fill="white"
                        viewBox="0 0 320 512"
                      >
                        <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z" />
                      </svg>
                    )}
                    {value.icon === "heart" && (
                      <svg
                        className="h-8 w-8"
                        fill="white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                      </svg>
                    )}
                  </div>
                  <h4 className="mb-3 font-poppins text-[22px] font-semibold text-white">
                    {value.title}
                  </h4>
                  <p className="font-roboto text-[15px] leading-[1.6] text-white/90">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F7] px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container text-center">
            <span className="mb-4 block font-poppins text-[13px] font-semibold uppercase tracking-[1.5px] text-[#7A33FF]">
              NUESTRO EQUIPO
            </span>
            <h2 className="mb-10 font-poppins text-[26px] font-bold text-[#1E1E1E] md:text-[36px]">
              Los fundadores de eBombo
            </h2>
            <div className="flex flex-col items-stretch gap-6 md:flex-row md:justify-center">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="flex w-full flex-col items-center rounded-[24px] bg-white px-8 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:w-[350px]"
                >
                  <div
                    className="mb-5 h-[150px] w-[150px] overflow-hidden rounded-full"
                    style={{
                      boxShadow: `0px 4px 20px ${founder.shadowColor}`,
                    }}
                  >
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 font-poppins text-[22px] font-bold text-[#1E1E1E]">
                    {founder.name}
                  </h3>
                  <span
                    className="mb-4 font-poppins text-sm font-semibold"
                    style={{ color: founder.roleColor }}
                  >
                    {founder.role}
                  </span>
                  <p className="font-roboto text-[15px] leading-[1.6] text-[#666666]">
                    {founder.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm
          title="¿Quieres conectar con eBombo?"
          subtitle="Si te inspira nuestra misión o quieres saber más sobre cómo trabajamos, escríbenos. Estamos listos para ser el aliado estratégico de tu empresa."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
