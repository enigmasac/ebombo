import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Copa del Mundo 2026 | eBombo Internacional",
  description:
    "Crea la polla del mundial para que tu equipo viva el minuto a minuto de cada partido del mundial Estados Unidos, México, Canadá 2026.",
};

const IMG = "https://ebombo.com/wp-content/uploads/2025/12";

const howToPlayCards = [
  {
    title: "Fase de grupos",
    description:
      "Realiza todas tus predicciones para cada partido de la fase de grupos y consigue un puntaje por cada resultado y marcador acertado.",
    bg: "bg-[#F7F7F7]",
    textColor: "text-[#1E1E1E]",
    descColor: "text-ebombo-text",
    images: [`${IMG}/Grupo-407.webp`, `${IMG}/Grupo-408.webp`],
  },
  {
    title: "Fase de Knock Out",
    description:
      "Apuesta por un ganador y recibe puntaje por cada resultado y marcador acertado.",
    bg: "bg-[#7A33FF]",
    textColor: "text-white",
    descColor: "text-white/90",
    images: [`${IMG}/Grupo-404.webp`],
  },
  {
    title: "Consigue el mayor puntaje y gana!",
    description: "Acumula el puntaje más alto y sé el ganador!",
    bg: "bg-ebombo-orange",
    textColor: "text-white",
    descColor: "text-white/90",
    images: [`${IMG}/368-1.webp`],
  },
];

const steps = [
  { text: "Regístrate y te contactaremos", icon: `${IMG}/Outline.svg` },
  { text: "Crea el prode para tu equipo", icon: `${IMG}/Vector3.svg` },
  { text: "Inscríbanse para jugar", icon: `${IMG}/Vector2.svg` },
  { text: "Que gane el o la mejor!", icon: `${IMG}/Vector1.svg` },
];

const pricingPlans = [
  {
    name: "Avanzado",
    participants: "0 - 100",
    price: "4",
    badgeBg: "bg-ebombo-accent",
    textColor: "text-ebombo-accent",
  },
  {
    name: "Pro",
    participants: "101 - 300",
    price: "3",
    badgeBg: "bg-ebombo-accent",
    textColor: "text-ebombo-accent",
  },
  {
    name: "Platinum",
    participants: "301 - 500",
    price: "2",
    badgeBg: "platinum-gradient",
    textColor: "text-[#4A4A4A]",
  },
  {
    name: "Exclusivo",
    participants: "500 +",
    price: "1.5",
    badgeBg: "gold-gradient",
    textColor: "text-[#D7A83D]",
  },
];

export default function CopaDelMundo() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-[5%] py-[50px] md:py-[80px]"
          style={{
            backgroundImage: `url(${IMG}/Mask-Group.webp)`,
            backgroundColor: "#FBFAFF",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto flex max-w-container flex-col items-center gap-8 md:flex-row md:gap-[50px]">
            <div className="flex flex-col gap-5 text-center md:w-[50%] md:text-left">
              <span className="font-poppins text-base font-semibold tracking-[2px] text-ebombo-orange">
                MUNDIAL 2026 ⚽
              </span>
              <h1 className="font-poppins text-[32px] font-bold leading-[1.15] text-ebombo-primary md:text-[52px]">
                ¡El prode del mundial!
              </h1>
              <h2 className="font-poppins text-[20px] font-semibold text-ebombo-dark md:text-[26px]">
                Que necesitas para unir a todo tu equipo!
              </h2>
              <p className="font-roboto text-[17px] leading-[1.7] text-ebombo-dark">
                Creemos juntos la polla para que solo tú y tus compañeros
                participen y vivan el minuto a minuto de cada partido del mundial
                Estados Unidos, México, Canadá 2026.
              </p>
              <Link
                href="#contacto"
                className="self-center rounded-[50px] bg-ebombo-primary px-8 py-4 font-poppins text-[15px] font-semibold text-white transition-all duration-[600ms] hover:bg-[#E07A00] md:self-start"
              >
                Contáctanos
              </Link>
            </div>
            <div className="md:w-[45%]">
              <Image
                src={`${IMG}/imagen-world-cup.webp`}
                alt="Copa del Mundo 2026"
                width={802}
                height={512}
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px]">
          <div className="mx-auto max-w-container text-center">
            <h2 className="font-poppins text-[32px] font-bold leading-[1.15] text-ebombo-primary md:text-[46px]">
              UNA MANERA INCREÍBLE EN LA FORMA DE DISFRUTAR EL MUNDIAL
            </h2>
            <p className="mt-4 font-roboto text-base text-ebombo-secondary">
              Hemos creado una polla simple y sencilla que asegura la conexión de
              tus trabajadores fanáticos del fútbol.
            </p>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-[#1E1E1E] md:mb-[50px] md:text-[36px]">
              ¿Cómo jugar?
            </h2>
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-8">
              {howToPlayCards.map((card) => (
                <div
                  key={card.title}
                  className={`flex flex-1 flex-col items-center rounded-[24px] ${card.bg} p-6 text-center md:p-8`}
                >
                  <h4
                    className={`mb-4 font-poppins text-lg font-semibold ${card.textColor}`}
                  >
                    {card.title}
                  </h4>
                  <div className="mb-4 flex flex-col gap-2">
                    {card.images.map((img) => (
                      <Image
                        key={img}
                        src={img}
                        alt={card.title}
                        width={362}
                        height={227}
                        className="w-full rounded-lg"
                      />
                    ))}
                  </div>
                  <p
                    className={`font-roboto text-sm font-medium ${card.descColor}`}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[80px]">
          <div className="mx-auto flex max-w-container flex-col items-center gap-10 md:flex-row">
            <div className="md:w-[55%]">
              <h2 className="mb-8 font-poppins text-[17px] font-semibold text-ebombo-secondary md:text-[20px]">
                Crea la polla perfecta para tus colaboradores
              </h2>
              <div className="flex flex-col gap-4">
                {steps.map((step) => (
                  <div
                    key={step.text}
                    className="flex items-center gap-4 rounded-lg bg-ebombo-primary px-4 py-3"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                      <Image
                        src={step.icon}
                        alt=""
                        width={37}
                        height={36}
                        className="h-8 w-8 brightness-0 invert"
                      />
                    </div>
                    <span className="font-poppins text-base font-semibold text-white md:text-lg">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:w-[45%] md:items-center md:justify-end">
              <Image
                src={`${IMG}/chicos.png`}
                alt="Equipo celebrando"
                width={2000}
                height={1339}
                className="w-full max-w-[500px] rounded-[24px] object-cover"
              />
            </div>
          </div>
        </section>

        <section
          className="px-[5%] py-[40px] md:py-[60px]"
          style={{
            backgroundImage: `url(${IMG}/Mask-Group.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-container">
            <h2 className="mb-10 text-center font-poppins text-[27px] font-bold text-ebombo-primary md:text-[36px]">
              Planes y precios
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex w-[47%] flex-col items-center rounded-[20px] border border-white bg-white p-4 shadow-[0_0_10px_rgba(0,0,0,0.23)] md:w-[23%] md:p-5"
                >
                  <span
                    className={`mb-4 rounded-[11px] px-4 py-1 font-poppins text-sm font-semibold text-white ${
                      plan.badgeBg === "platinum-gradient"
                        ? ""
                        : plan.badgeBg === "gold-gradient"
                          ? ""
                          : plan.badgeBg
                    }`}
                    style={
                      plan.badgeBg === "platinum-gradient"
                        ? {
                            background:
                              "linear-gradient(90deg, #AFAFAF 0%, #4A4A4A 100%)",
                          }
                        : plan.badgeBg === "gold-gradient"
                          ? {
                              background:
                                "linear-gradient(90deg, rgba(215,168,61,0.58) 30%, #D7A83D 100%)",
                            }
                          : undefined
                    }
                  >
                    {plan.name}
                  </span>
                  <div className="mb-3 flex items-center justify-center">
                    <Image
                      src={`${IMG}/Vector4.svg`}
                      alt=""
                      width={49}
                      height={49}
                      className="h-12 w-12"
                    />
                  </div>
                  <span
                    className={`font-roboto text-[19px] font-medium ${plan.textColor}`}
                  >
                    {plan.participants}
                  </span>
                  <span className={`mb-3 text-base ${plan.textColor}`}>
                    Participantes
                  </span>
                  <div className="my-2 h-px w-full bg-gray-200" />
                  <span
                    className={`mt-2 text-base font-bold ${plan.textColor}`}
                  >
                    $USD
                  </span>
                  <span
                    className={`font-poppins text-[28px] font-extrabold ${plan.textColor} md:text-[32px]`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-[19px] ${plan.textColor}`}>
                    Por participante
                  </span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-[86%] text-center font-roboto text-base text-ebombo-accent md:text-lg">
              Si hay confirmación en los próximos 30 días, se aplicará un
              descuento del 25% al precio total. No es necesario realizar el
              pago, solo con la confirmación.
            </p>
          </div>
        </section>

        <ContactForm
          title="¿Listo para Vivir el Mundial 2026?"
          subtitle="Creemos juntos la polla para que solo tú y tus compañeros participen y vivan el minuto a minuto de cada partido del mundial Estados Unidos, México, Canadá 2026."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
