"use client";

import { useState, useMemo, useEffect } from "react";
import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getCountriesByLang, getDefaultPrefix, detectPrefixByIP } from "@/lib/countries";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function SidebarForm({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const countries = useMemo(() => getCountriesByLang(lang), [lang]);
  const defaultPrefix = getDefaultPrefix(lang);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "", interest: "", prefix: defaultPrefix });
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    detectPrefixByIP().then((detected) => {
      if (detected) setFormData((prev) => ({ ...prev, prefix: detected }));
    });
  }, []);

  const inputStyles =
    "w-full rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-3 font-roboto text-base text-[#1E1E1E] outline-none placeholder:text-ebombo-text/60 focus:border-ebombo-primary";

  async function handleSubmit(e: React.FormEvent) {
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
          source: "sidebar_form",
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
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 py-4 text-center">
        <p className="font-poppins text-lg font-semibold text-ebombo-primary">
          {lang === "es" ? "¡Mensaje enviado!" : "Message sent!"}
        </p>
        <p className="font-roboto text-sm text-ebombo-text">
          {lang === "es" ? "Te contactaremos pronto." : "We'll contact you soon."}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-[50px] bg-ebombo-orange px-6 py-2 font-poppins text-sm font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
        >
          {lang === "es" ? "Enviar otro" : "Send another"}
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-2 text-center text-xs text-red-600">
          {lang === "es" ? "Error al enviar. Intenta de nuevo." : "Error sending. Try again."}
        </div>
      )}
      <div>
        <label htmlFor="sidebar-name" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
          {t.contactForm.nombreCompleto} <span className="text-red-500">*</span>
        </label>
        <input
          id="sidebar-name"
          type="text"
          placeholder={t.contactForm.nombrePlaceholder}
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputStyles}
        />
      </div>
      <div>
        <label htmlFor="sidebar-interest" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
          {t.contactForm.interes}
        </label>
        <select
          id="sidebar-interest"
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className={`${inputStyles} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
        >
          <option value="">{t.contactForm.interesPlaceholder}</option>
          {t.contactForm.interesOpciones.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/2">
          <label htmlFor="sidebar-phone" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
            {t.contactForm.telefono} <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <select
              value={formData.prefix}
              onChange={(e) => setFormData({ ...formData, prefix: e.target.value })}
              className="w-[80px] shrink-0 appearance-none rounded-[12px] border border-[#E0E0E0] bg-white px-1.5 py-3 font-roboto text-sm text-[#1E1E1E] outline-none focus:border-ebombo-primary bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px] bg-[right_4px_center] bg-no-repeat pr-4"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.dial}>{c.flag} {c.dial}</option>
              ))}
            </select>
            <input
              id="sidebar-phone"
              type="tel"
              placeholder={t.contactForm.telefonoPlaceholder}
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`${inputStyles} flex-1`}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <label htmlFor="sidebar-email" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
            {t.contactForm.email}
          </label>
          <input
            id="sidebar-email"
            type="email"
            placeholder={t.contactForm.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputStyles}
          />
        </div>
      </div>
      <div>
        <label htmlFor="sidebar-message" className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
          {t.contactForm.mensaje}
        </label>
        <textarea
          id="sidebar-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
  );
}
