"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getCountriesByLang, getDefaultPrefix, detectPrefixByIP } from "@/lib/countries";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

interface ContactFormProps {
  lang?: Lang;
  title?: string;
  subtitle?: string;
}

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactForm({
  lang = "es",
  title,
  subtitle,
}: ContactFormProps) {
  const t = getDictionary(lang);
  const displayTitle = title ?? t.contactForm.defaultTitle;
  const displaySubtitle = subtitle ?? t.contactForm.defaultSubtitle;
  const countries = useMemo(() => getCountriesByLang(lang), [lang]);
  const defaultPrefix = getDefaultPrefix(lang);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    interest: "",
    prefix: defaultPrefix,
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    detectPrefixByIP().then((detected) => {
      if (detected) setFormData((prev) => ({ ...prev, prefix: detected }));
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: `${formData.prefix}${formData.phone}`,
          email: formData.email,
          message: formData.message,
          interest: formData.interest,
          source: "contact_form",
          page_url: window.location.href,
          lang,
        }),
      });
      if (!res.ok) throw new Error("Error");
      setStatus("sent");
      setFormData({ name: "", phone: "", email: "", message: "", interest: "", prefix: defaultPrefix });
    } catch {
      setStatus("error");
    }
  };

  const inputStyles =
    "w-full rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-3 font-roboto text-base text-[#1E1E1E] outline-none placeholder:text-ebombo-text/60 focus:border-ebombo-primary";

  if (status === "sent") {
    return (
      <section id="contacto" className="bg-white px-[5%] py-[40px] md:py-[60px]">
        <div className="mx-auto max-w-container">
          <div className="rounded-[24px] bg-[#F7F7F7] px-5 py-10 md:px-10 md:py-[65px]">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="font-poppins text-[27px] font-semibold leading-[1.2] tracking-[-1px] text-ebombo-primary md:text-[42px]">
                {lang === "es" ? "¡Mensaje enviado!" : "Message sent!"}
              </h2>
              <p className="font-roboto text-[14px] text-ebombo-dark md:text-xl">
                {lang === "es" ? "Nos pondremos en contacto contigo pronto." : "We'll get back to you soon."}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 rounded-[50px] bg-ebombo-orange px-8 py-3 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
              >
                {lang === "es" ? "Enviar otro mensaje" : "Send another message"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="bg-white px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-container">
        <div className="rounded-[24px] bg-[#F7F7F7] px-5 py-10 md:px-10 md:py-[65px]">
          <div className="flex flex-col items-center gap-4 mb-8">
            <h2 className="text-center font-poppins text-[27px] font-semibold leading-[1.2] tracking-[-1px] text-ebombo-primary md:text-[42px] md:leading-tight">
              {displayTitle}
            </h2>
            <p className="text-center font-roboto text-[14px] text-ebombo-dark md:text-xl">
              {displaySubtitle}
            </p>
          </div>

          <div className="flex flex-col items-center gap-[35px] md:flex-row md:items-start">
            <form
              onSubmit={handleSubmit}
              className="mt-5 flex w-full flex-col gap-5 md:w-[60%]"
            >
              {status === "error" && (
                <div className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
                  {lang === "es" ? "Error al enviar. Intenta de nuevo." : "Error sending. Please try again."}
                </div>
              )}
              <div>
                <label htmlFor="contact-name" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                  {t.contactForm.nombreCompleto} <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder={t.contactForm.nombrePlaceholder}
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="contact-interest" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                  {t.contactForm.interes}
                </label>
                <select
                  id="contact-interest"
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  className={`${inputStyles} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
                >
                  <option value="">{t.contactForm.interesPlaceholder}</option>
                  {t.contactForm.interesOpciones.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-5 md:flex-row md:gap-4">
                <div className="md:w-1/2">
                  <label htmlFor="contact-phone" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                    {t.contactForm.telefono} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.prefix}
                      onChange={(e) =>
                        setFormData({ ...formData, prefix: e.target.value })
                      }
                      className={`${inputStyles} w-[90px] shrink-0 appearance-none !px-2 bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_6px_center] bg-no-repeat pr-5`}
                    >
                      {countries.map((c) => (
                        <option key={c.code} value={c.dial}>{c.flag} {c.dial}</option>
                      ))}
                    </select>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder={t.contactForm.telefonoPlaceholder}
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`${inputStyles} flex-1`}
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <label htmlFor="contact-email" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                    {t.contactForm.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder={t.contactForm.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputStyles}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                  {t.contactForm.mensaje}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`${inputStyles} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-[50px] bg-ebombo-orange px-8 py-3 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00] disabled:opacity-60"
              >
                {status === "sending"
                  ? (lang === "es" ? "Enviando..." : "Sending...")
                  : t.contactForm.enviar}
              </button>
            </form>

            <div className="hidden md:flex md:w-[40%] md:items-center md:justify-center">
              <Image
                src="/uploads/2025/12/Mask-Group-27.png.webp"
                alt="Photobooth 360 de eBombo en evento"
                width={539}
                height={390}
                className="w-full max-w-[450px] rounded-[32px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
