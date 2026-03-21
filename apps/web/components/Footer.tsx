import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { getDictionary, localePath } from "@/lib/i18n";
import EmailLink from "./EmailLink";

const partnerLinks = [
  { label: "Golootza", href: "https://golootza.com/es/" },
  { label: "bilit", href: "https://bilitnow.com" },
];

const officesByLang = {
  es: [
    {
      titleKey: "oficinaPeru" as const,
      address: "Av. General Cordova 1145, 15074 Miraflores, Lima",
      mapUrl: "https://maps.app.goo.gl/cKYynetLNCShENjA6",
    },
    {
      titleKey: "oficinaEspana" as const,
      address: "CL Manuel Caldeiro 18, Madrid ZIP. 28046",
      mapUrl: "https://maps.app.goo.gl/6MhuGrfCfdjeeAMi8",
    },
    {
      titleKey: "oficinaMexico" as const,
      address: "Cordoba 95 Roma Norte. Cuauhtemoc, 06700 CDMX, Mexico",
      mapUrl: "https://maps.app.goo.gl/HAGZ15pmRJ5SAtqW7",
    },
  ],
  en: [
    {
      titleKey: "oficinaUSA" as const,
      address: "8 The Green, Ste A Dover, DE 19901",
      mapUrl: "https://maps.app.goo.gl/Dover8TheGreen",
    },
  ],
};

const phonesByLang = {
  es: [
    { country: "Peru", number: "+51 948 879 888", tel: "+51948879888" },
    { country: "Spain", number: "+34 629 484 598", tel: "+34629484598" },
    { country: "Mexico", number: "+52 55 6444 9591", tel: "+525564449591" },
  ],
  en: [
    { country: "", number: "+52 55 6444 9591", tel: "+525564449591" },
  ],
};

const cardStyles =
  "rounded-[18px] bg-white p-[6%] shadow-[0_0_10px_rgba(0,0,0,0.05)] md:p-[2%]";

export default function Footer({ lang = "es" as Lang }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const offices = officesByLang[lang] || officesByLang.es;
  const phones = phonesByLang[lang] || phonesByLang.es;

  const navLinks = [
    { label: t.nav.tiposDeEvento, href: localePath(lang, "/tipos-de-evento") },
    { label: t.nav.experiencias, href: localePath(lang, "/experiencias") },
    { label: t.nav.merchandising, href: localePath(lang, "/merchandising") },
    { label: t.nav.standsYFerias, href: localePath(lang, "/stand-ferias") },
    { label: t.nav.nosotros, href: localePath(lang, "/nosotros") },
    { label: t.nav.copaDelMundo, href: localePath(lang, "/copa-del-mundo") },
  ];

  const extraLinks = [
    { label: t.nav.blog, href: localePath(lang, "/blog") },
    { label: t.nav.photobooth, href: localePath(lang, "/photobooth") },
    ...(lang === "es" ? [{ label: t.nav.libroReclamaciones, href: "/libro-de-reclamaciones" }] : []),
  ];

  return (
    <footer className="bg-ebombo-bg px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto flex max-w-container flex-col flex-wrap gap-5 md:flex-row md:gap-[2%]">
        <div className={`flex flex-col gap-4 md:w-[32%] ${cardStyles}`}>
          <h3 className="font-poppins font-semibold tracking-[-1px] text-ebombo-dark md:text-base">
            {t.footer.secciones}
          </h3>
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
          <h3 className="font-poppins font-semibold tracking-[-1px] text-ebombo-dark md:text-base">
            {t.footer.contacto}
          </h3>
          <div className="flex flex-col gap-3 pl-[5%]">
            {offices.map((office) => (
              <a
                key={office.titleKey}
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
                  <h4 className="font-poppins text-base font-semibold tracking-[-0.2px] text-ebombo-dark transition-colors duration-[600ms] group-hover:text-ebombo-primary">
                    {t.footer[office.titleKey]}
                  </h4>
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
                  <h4 className="font-poppins text-base font-semibold tracking-[-0.2px] text-ebombo-dark">
                    {t.footer.telefonosWhatsApp}{phone.country ? ` ${phone.country}` : ""}
                  </h4>
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
              <h4 className="font-poppins text-base font-semibold tracking-[-0.2px] text-ebombo-dark">
                {t.footer.correo}
              </h4>
              <EmailLink
                user="mateo"
                domain="ebombo.com"
                className="font-roboto text-sm text-ebombo-dark hover:text-ebombo-primary"
              />
            </div>
          </div>
        </div>

        <div
          className={`hidden flex-col gap-4 md:flex md:w-[32%] ${cardStyles}`}
        >
          <div className="flex flex-col gap-3">
            <h3 className="font-poppins font-semibold tracking-[-1px] text-ebombo-dark md:text-base">
              {t.footer.boletin}
            </h3>
            <span className="font-roboto text-sm text-ebombo-text">
              {t.footer.boletinDesc}
            </span>
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder={t.footer.correoPlaceholder}
              required
              className="w-full border-b-2 border-ebombo-primary bg-transparent px-1 py-2 font-roboto text-base text-ebombo-secondary outline-none placeholder:text-ebombo-text/60 focus:border-ebombo-accent"
            />
            <button
              type="submit"
              className="self-start rounded-[25px] bg-ebombo-primary px-5 py-2 font-poppins text-sm font-semibold tracking-[-0.2px] text-white transition-all duration-[600ms] hover:bg-ebombo-accent"
            >
              {t.footer.suscribirse}
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-[2%] flex max-w-container flex-col items-center gap-3 rounded-[18px] bg-white p-[5%] shadow-[0_0_10px_rgba(0,0,0,0.05)] md:p-[2%]">
        <Image
          src="/uploads/2025/11/logoEbomboAColor.webp"
          alt="eBombo logo"
          width={200}
          height={53}
          sizes="200px"
          className="w-[200px] transition-transform duration-[600ms]"
        />
        <span className="text-center font-poppins text-xs font-light tracking-[-0.2px] text-ebombo-dark">
          &copy; 2026 {t.footer.copyright}{" "}
          <strong>eBombo</strong>
        </span>
        <a
          href="https://enigmasac.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-poppins text-[10px] tracking-[-0.2px] text-ebombo-text/50 transition-colors hover:text-ebombo-primary"
        >
          Developed by Enigma
        </a>
      </div>
    </footer>
  );
}
