import type { Metadata } from "next";
import Header from "@/components/Header";
import ComplaintBookForm from "@/components/ComplaintBookForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { isValidLang, getDictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const t = getDictionary(lang);

  return {
    title: `${t.libroReclamaciones.heroTitle} | eBombo Internacional`,
    description: t.libroReclamaciones.heroDesc,
    alternates: {
      canonical: lang === "en" ? "/en/libro-de-reclamaciones" : "/libro-de-reclamaciones",
    },
  };
}

export default async function LibroDeReclamaciones({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isValidLang(rawLang) ? rawLang : "es";
  const t = getDictionary(lang);
  const lr = t.libroReclamaciones;

  return (
    <>
      <Header lang={lang} />
      <main>
        <section
          className="px-[5%] py-[60px] md:py-[100px]"
          style={{
            background: "linear-gradient(135deg, #382079 0%, #1E1E1E 100%)",
          }}
        >
          <div className="mx-auto flex max-w-container flex-col items-center text-center">
            <span className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[2px] text-ebombo-orange">
              {lr.heroLabel}
            </span>
            <h1 className="font-poppins text-[28px] font-bold leading-[1.2] text-white md:text-[48px]">
              {lr.heroTitle}
            </h1>
            <p className="mt-5 max-w-[700px] font-roboto text-base leading-[1.6] text-white/85 md:text-xl">
              {lr.heroDesc}
            </p>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[60px]">
          <div className="mx-auto flex max-w-container flex-col gap-8 md:flex-row md:gap-[40px]">
            <div className="md:w-[60%]">
              <ComplaintBookForm lang={lang} />
            </div>

            <div className="flex flex-col gap-6 md:w-[40%]">
              <div className="rounded-[24px] bg-[#F7F7F7] px-5 py-8 md:px-8">
                <h3 className="mb-5 font-poppins text-[20px] font-semibold text-ebombo-primary">
                  {lr.proveedorTitle}
                </h3>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="font-roboto text-xs font-medium uppercase tracking-[1px] text-ebombo-text/60">
                      {lr.razonSocial}
                    </span>
                    <p className="font-roboto text-[15px] font-medium text-[#1E1E1E]">
                      {lr.razonSocialValue}
                    </p>
                  </div>
                  <div>
                    <span className="font-roboto text-xs font-medium uppercase tracking-[1px] text-ebombo-text/60">
                      {lr.ruc}
                    </span>
                    <p className="font-roboto text-[15px] font-medium text-[#1E1E1E]">
                      {lr.rucValue}
                    </p>
                  </div>
                  <div>
                    <span className="font-roboto text-xs font-medium uppercase tracking-[1px] text-ebombo-text/60">
                      {lr.domicilio}
                    </span>
                    <p className="font-roboto text-[15px] font-medium text-[#1E1E1E]">
                      {lr.domicilioValue}
                    </p>
                  </div>
                  <div>
                    <span className="font-roboto text-xs font-medium uppercase tracking-[1px] text-ebombo-text/60">
                      {lr.emailProveedor}
                    </span>
                    <p className="font-roboto text-[15px] font-medium text-[#1E1E1E]">
                      {lr.emailProveedorValue}
                    </p>
                  </div>
                  <div>
                    <span className="font-roboto text-xs font-medium uppercase tracking-[1px] text-ebombo-text/60">
                      {lr.webProveedor}
                    </span>
                    <p className="font-roboto text-[15px] font-medium text-[#1E1E1E]">
                      {lr.webProveedorValue}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] bg-[#F7F7F7] px-5 py-8 md:px-8">
                <div className="mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-ebombo-orange/10">
                  <svg className="h-6 w-6 text-ebombo-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 font-poppins text-[18px] font-semibold text-[#1E1E1E]">
                  {lr.plazoTitle}
                </h3>
                <p className="font-roboto text-sm leading-[1.7] text-ebombo-text">
                  {lr.plazoDesc}
                </p>
              </div>

              <div className="rounded-[24px] bg-[#F7F7F7] px-5 py-8 md:px-8">
                <h3 className="mb-4 font-poppins text-[18px] font-semibold text-[#1E1E1E]">
                  {lr.definicionesTitle}
                </h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-ebombo-primary" />
                      <span className="font-poppins text-sm font-semibold text-ebombo-primary">
                        {lr.reclamo}
                      </span>
                    </div>
                    <p className="pl-4 font-roboto text-sm leading-[1.6] text-ebombo-text">
                      {lr.reclamoDesc}
                    </p>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-ebombo-orange" />
                      <span className="font-poppins text-sm font-semibold text-ebombo-orange">
                        {lr.queja}
                      </span>
                    </div>
                    <p className="pl-4 font-roboto text-sm leading-[1.6] text-ebombo-text">
                      {lr.quejaDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
