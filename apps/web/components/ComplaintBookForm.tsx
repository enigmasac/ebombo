"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ComplaintBookForm({ lang = "es" as Lang }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const lr = t.libroReclamaciones;

  const [formData, setFormData] = useState({
    name: "",
    document_type: "DNI",
    document_number: "",
    address: "",
    phone: "",
    email: "",
    is_minor: false,
    guardian_name: "",
    type: "reclamo" as "reclamo" | "queja",
    service_description: "",
    amount_claimed: "",
    detail: "",
    consumer_request: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [complaintId, setComplaintId] = useState<number | null>(null);

  const set = (field: string, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/complaints`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Error");
      const data = await res.json();
      setComplaintId(data.id);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const inputStyles =
    "w-full rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-3 font-roboto text-base text-[#1E1E1E] outline-none placeholder:text-ebombo-text/60 focus:border-ebombo-primary";

  const labelStyles = "mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]";

  if (status === "sent") {
    return (
      <div className="rounded-[24px] bg-[#F7F7F7] px-5 py-10 md:px-10 md:py-[65px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-poppins text-[27px] font-semibold leading-[1.2] tracking-[-1px] text-ebombo-primary md:text-[42px]">
            {lr.exito}
          </h2>
          <p className="font-roboto text-[14px] text-ebombo-dark md:text-xl">
            {lr.exitoDesc}
          </p>
          {complaintId && (
            <div className="mt-2 rounded-[12px] bg-ebombo-primary/10 px-6 py-3">
              <span className="font-roboto text-sm text-ebombo-dark">{lr.exitoId}: </span>
              <span className="font-poppins text-lg font-bold text-ebombo-primary">#{complaintId}</span>
            </div>
          )}
          <button
            onClick={() => {
              setStatus("idle");
              setComplaintId(null);
              setFormData({
                name: "", document_type: "DNI", document_number: "", address: "",
                phone: "", email: "", is_minor: false, guardian_name: "",
                type: "reclamo", service_description: "", amount_claimed: "",
                detail: "", consumer_request: "",
              });
            }}
            className="mt-4 rounded-[50px] bg-ebombo-orange px-8 py-3 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
          >
            {lr.enviarOtra}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] bg-[#F7F7F7] px-5 py-10 md:px-10 md:py-[50px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        {status === "error" && (
          <div className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
            {lr.errorEnvio}
          </div>
        )}

        <div>
          <h3 className="mb-5 font-poppins text-[20px] font-semibold text-ebombo-primary md:text-[24px]">
            {lr.datosConsumidor}
          </h3>
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="complaint-name" className={labelStyles}>
                {lr.nombreCompleto} <span className="text-red-500">*</span>
              </label>
              <input
                id="complaint-name"
                type="text"
                required
                placeholder={lr.nombrePlaceholder}
                value={formData.name}
                onChange={(e) => set("name", e.target.value)}
                className={inputStyles}
              />
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:gap-4">
              <div className="md:w-1/3">
                <label htmlFor="complaint-doctype" className={labelStyles}>
                  {lr.tipoDocumento}
                </label>
                <select
                  id="complaint-doctype"
                  value={formData.document_type}
                  onChange={(e) => set("document_type", e.target.value)}
                  className={`${inputStyles} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
                >
                  {lr.tipoDocumentoOpciones.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="md:w-2/3">
                <label htmlFor="complaint-docnum" className={labelStyles}>
                  {lr.numeroDocumento} <span className="text-red-500">*</span>
                </label>
                <input
                  id="complaint-docnum"
                  type="text"
                  required
                  placeholder={lr.numeroDocumentoPlaceholder}
                  value={formData.document_number}
                  onChange={(e) => set("document_number", e.target.value)}
                  className={inputStyles}
                />
              </div>
            </div>

            <div>
              <label htmlFor="complaint-address" className={labelStyles}>
                {lr.direccion}
              </label>
              <input
                id="complaint-address"
                type="text"
                placeholder={lr.direccionPlaceholder}
                value={formData.address}
                onChange={(e) => set("address", e.target.value)}
                className={inputStyles}
              />
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:gap-4">
              <div className="md:w-1/2">
                <label htmlFor="complaint-phone" className={labelStyles}>
                  {lr.telefono}
                </label>
                <input
                  id="complaint-phone"
                  type="tel"
                  placeholder={lr.telefonoPlaceholder}
                  value={formData.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={inputStyles}
                />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="complaint-email" className={labelStyles}>
                  {lr.email}
                </label>
                <input
                  id="complaint-email"
                  type="email"
                  placeholder={lr.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputStyles}
                />
              </div>
            </div>

            <div>
              <label className={labelStyles}>{lr.menorDeEdad}</label>
              <div className="mt-1 flex gap-4">
                <button
                  type="button"
                  onClick={() => set("is_minor", true)}
                  className={`rounded-[12px] px-6 py-2 font-roboto text-sm font-medium transition-all duration-300 ${
                    formData.is_minor
                      ? "bg-ebombo-primary text-white"
                      : "border border-[#E0E0E0] bg-white text-[#1E1E1E] hover:border-ebombo-primary"
                  }`}
                >
                  {lr.si}
                </button>
                <button
                  type="button"
                  onClick={() => { set("is_minor", false); set("guardian_name", ""); }}
                  className={`rounded-[12px] px-6 py-2 font-roboto text-sm font-medium transition-all duration-300 ${
                    !formData.is_minor
                      ? "bg-ebombo-primary text-white"
                      : "border border-[#E0E0E0] bg-white text-[#1E1E1E] hover:border-ebombo-primary"
                  }`}
                >
                  {lr.no}
                </button>
              </div>
            </div>

            {formData.is_minor && (
              <div>
                <label htmlFor="complaint-guardian" className={labelStyles}>
                  {lr.apoderado} <span className="text-red-500">*</span>
                </label>
                <input
                  id="complaint-guardian"
                  type="text"
                  required
                  placeholder={lr.apoderadoPlaceholder}
                  value={formData.guardian_name}
                  onChange={(e) => set("guardian_name", e.target.value)}
                  className={inputStyles}
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-poppins text-[20px] font-semibold text-ebombo-primary md:text-[24px]">
            {lr.tipoTitle}
          </h3>
          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <button
              type="button"
              onClick={() => set("type", "reclamo")}
              className={`flex-1 rounded-[16px] p-5 text-left transition-all duration-300 ${
                formData.type === "reclamo"
                  ? "border-2 border-ebombo-primary bg-ebombo-primary/5 shadow-[0_0_0_1px_rgba(128,86,235,0.2)]"
                  : "border-2 border-[#E0E0E0] bg-white hover:border-ebombo-primary/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  formData.type === "reclamo" ? "border-ebombo-primary" : "border-[#CCC]"
                }`}>
                  {formData.type === "reclamo" && (
                    <div className="h-2.5 w-2.5 rounded-full bg-ebombo-primary" />
                  )}
                </div>
                <span className="font-poppins text-base font-semibold text-[#1E1E1E]">
                  {lr.reclamo}
                </span>
              </div>
              <p className="mt-2 pl-8 font-roboto text-sm text-ebombo-text">
                {lr.reclamoDesc}
              </p>
            </button>
            <button
              type="button"
              onClick={() => set("type", "queja")}
              className={`flex-1 rounded-[16px] p-5 text-left transition-all duration-300 ${
                formData.type === "queja"
                  ? "border-2 border-ebombo-orange bg-ebombo-orange/5 shadow-[0_0_0_1px_rgba(247,138,10,0.2)]"
                  : "border-2 border-[#E0E0E0] bg-white hover:border-ebombo-orange/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  formData.type === "queja" ? "border-ebombo-orange" : "border-[#CCC]"
                }`}>
                  {formData.type === "queja" && (
                    <div className="h-2.5 w-2.5 rounded-full bg-ebombo-orange" />
                  )}
                </div>
                <span className="font-poppins text-base font-semibold text-[#1E1E1E]">
                  {lr.queja}
                </span>
              </div>
              <p className="mt-2 pl-8 font-roboto text-sm text-ebombo-text">
                {lr.quejaDesc}
              </p>
            </button>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-poppins text-[20px] font-semibold text-ebombo-primary md:text-[24px]">
            {lr.detalleServicio}
          </h3>
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="complaint-service" className={labelStyles}>
                {lr.descripcionServicio}
              </label>
              <textarea
                id="complaint-service"
                rows={3}
                placeholder={lr.descripcionServicioPlaceholder}
                value={formData.service_description}
                onChange={(e) => set("service_description", e.target.value)}
                className={`${inputStyles} resize-none`}
              />
            </div>
            <div className="md:w-1/3">
              <label htmlFor="complaint-amount" className={labelStyles}>
                {lr.montoReclamado}
              </label>
              <input
                id="complaint-amount"
                type="text"
                placeholder={lr.montoReclamadoPlaceholder}
                value={formData.amount_claimed}
                onChange={(e) => set("amount_claimed", e.target.value)}
                className={inputStyles}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-poppins text-[20px] font-semibold text-ebombo-primary md:text-[24px]">
            {lr.detalleReclamo}
          </h3>
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="complaint-detail" className={labelStyles}>
                {lr.detalle} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="complaint-detail"
                rows={4}
                required
                placeholder={lr.detallePlaceholder}
                value={formData.detail}
                onChange={(e) => set("detail", e.target.value)}
                className={`${inputStyles} resize-none`}
              />
            </div>
            <div>
              <label htmlFor="complaint-request" className={labelStyles}>
                {lr.pedidoConsumidor}
              </label>
              <textarea
                id="complaint-request"
                rows={3}
                placeholder={lr.pedidoConsumidorPlaceholder}
                value={formData.consumer_request}
                onChange={(e) => set("consumer_request", e.target.value)}
                className={`${inputStyles} resize-none`}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-[50px] bg-ebombo-orange px-8 py-3 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00] disabled:opacity-60"
        >
          {status === "sending" ? lr.enviando : lr.enviar}
        </button>
      </form>
    </div>
  );
}
