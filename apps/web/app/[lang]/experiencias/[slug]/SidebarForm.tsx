"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function SidebarForm({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

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
          ...formData,
          source: "sidebar_form",
          page_url: window.location.href,
          lang,
        }),
      });
      if (!res.ok) throw new Error("Error");
      setStatus("sent");
      setFormData({ name: "", phone: "", email: "", message: "" });
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
        <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
          {t.contactForm.nombreCompleto} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder={t.contactForm.nombrePlaceholder}
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputStyles}
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/2">
          <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
            {t.contactForm.telefono} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder={t.contactForm.telefonoPlaceholder}
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputStyles}
          />
        </div>
        <div className="md:w-1/2">
          <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
            {t.contactForm.email}
          </label>
          <input
            type="email"
            placeholder={t.contactForm.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputStyles}
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
          {t.contactForm.mensaje}
        </label>
        <textarea
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
