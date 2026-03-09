import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Tipos de Evento", href: "/tipos-de-evento" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Merchandising", href: "/merchandising" },
  { label: "Stands y Ferias", href: "/stands-y-ferias" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Copa del Mundo 2026", href: "/copa-del-mundo" },
];

const extraLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Photobooth", href: "/photobooth" },
];

const partnerLinks = [
  { label: "Enigma Developers", href: "https://enigmasac.com" },
  { label: "Golootza", href: "https://golootza.com/es/" },
  { label: "bilit", href: "https://bilitnow.com" },
];

const offices = [
  {
    title: "Oficinas Perú",
    address: "Av. General Córdova 1145, 15074 Miraflores, Lima",
    mapUrl: "https://maps.app.goo.gl/cKYynetLNCShENjA6",
  },
  {
    title: "Oficinas España",
    address: "CL Manuel Caldeiro 18, Madrid ZIP. 28046",
    mapUrl: "https://maps.app.goo.gl/6MhuGrfCfdjeeAMi8",
  },
  {
    title: "Oficinas México",
    address: "Córdoba 95 Roma Norte. Cuauhtémoc, 06700 CDMX, México",
    mapUrl: "https://maps.app.goo.gl/HAGZ15pmRJ5SAtqW7",
  },
];

const phones = [
  { country: "Perú", number: "+51 948 879 888", tel: "+51948879888" },
  { country: "España", number: "+34 629 484 598", tel: "+34629484598" },
  { country: "México", number: "+52 55 6444 9591", tel: "+525564449591" },
];

const cardStyles =
  "rounded-[18px] bg-white p-[6%] shadow-[0_0_10px_rgba(0,0,0,0.05)] md:p-[2%]";

export default function Footer() {
  return (
    <footer className="bg-ebombo-bg px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto flex max-w-container flex-col flex-wrap gap-5 md:flex-row md:gap-[2%]">
        <div className={`flex flex-col gap-4 md:w-[32%] ${cardStyles}`}>
          <h5 className="font-poppins font-semibold tracking-[-1px] text-ebombo-dark md:text-base">
            Secciones
          </h5>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-poppins text-sm font-normal tracking-[-1px] text-ebombo-text transition-colors duration-[600ms] hover:text-ebombo-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-1">
            {extraLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-poppins text-sm font-normal tracking-[-1px] text-ebombo-text transition-colors duration-[600ms] hover:text-ebombo-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-1">
            {partnerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins text-sm font-bold tracking-[-1px] text-ebombo-secondary transition-colors duration-[600ms] hover:text-ebombo-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={`flex flex-col gap-4 md:w-[32%] ${cardStyles}`}>
          <h5 className="font-poppins font-semibold tracking-[-1px] text-ebombo-dark md:text-base">
            Contacto
          </h5>
          <div className="flex flex-col gap-3 pl-[5%]">
            {offices.map((office) => (
              <a
                key={office.title}
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-[15px]"
              >
                <svg
                  className="h-[22px] w-[22px] shrink-0 text-ebombo-primary"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
                <div>
                  <h6 className="font-poppins text-base font-semibold tracking-[-0.2px] text-ebombo-dark transition-colors duration-[600ms] group-hover:text-ebombo-primary">
                    {office.title}
                  </h6>
                  <p className="font-roboto text-sm text-ebombo-dark">
                    {office.address}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="mx-auto h-px w-1/4 bg-ebombo-divider" />
          <div className="flex flex-col gap-3 pl-[5%]">
            {phones.map((phone) => (
              <div key={phone.country} className="flex items-center gap-[15px]">
                <svg
                  className="h-[22px] w-[22px] shrink-0 text-ebombo-primary"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
                <div>
                  <h6 className="font-poppins text-base font-semibold tracking-[-0.2px] text-ebombo-dark">
                    Teléfonos / WhatsApp {phone.country}
                  </h6>
                  <a
                    href={`tel:${phone.tel}`}
                    className="font-roboto text-sm text-ebombo-dark hover:text-ebombo-primary"
                  >
                    {phone.number}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto h-px w-1/4 bg-ebombo-divider" />
          <div className="flex items-center gap-[15px] pl-[5%]">
            <svg
              className="h-[22px] w-[22px] shrink-0 text-ebombo-primary"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
            </svg>
            <div>
              <h6 className="font-poppins text-base font-semibold tracking-[-0.2px] text-ebombo-dark">
                Correo
              </h6>
              <a
                href="mailto:mateo@ebombo.com"
                className="font-roboto text-sm text-ebombo-dark hover:text-ebombo-primary"
              >
                mateo@ebombo.com
              </a>
            </div>
          </div>
        </div>

        <div
          className={`hidden flex-col gap-4 md:flex md:w-[32%] ${cardStyles}`}
        >
          <div className="flex flex-col gap-3">
            <h5 className="font-poppins font-semibold tracking-[-1px] text-ebombo-dark md:text-base">
              Boletín
            </h5>
            <span className="font-roboto text-sm text-ebombo-text">
              Mantente informado de todos nuestros productos antes que nadie.
            </span>
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              className="w-full border-b-2 border-ebombo-primary bg-transparent px-1 py-2 font-roboto text-base text-ebombo-secondary outline-none placeholder:text-ebombo-text/60 focus:border-ebombo-accent"
            />
            <button
              type="submit"
              className="self-start rounded-[25px] bg-ebombo-primary px-5 py-2 font-poppins text-sm font-semibold tracking-[-0.2px] text-white transition-all duration-[600ms] hover:bg-ebombo-accent"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-[2%] flex max-w-container flex-col items-center gap-3 rounded-[18px] bg-white p-[5%] shadow-[0_0_10px_rgba(0,0,0,0.05)] md:p-[2%]">
        <Image
          src="https://ebombo.com/wp-content/uploads/2025/11/logoEbomboAColor.webp"
          alt="eBombo logo"
          width={200}
          height={53}
          className="w-[200px] transition-transform duration-[600ms]"
        />
        <span className="text-center font-poppins text-xs font-light tracking-[-0.2px] text-ebombo-dark">
          &copy; 2026 Todos los derechos reservados{" "}
          <strong>eBombo</strong>
        </span>
      </div>
    </footer>
  );
}
