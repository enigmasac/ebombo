"use client";

import { useState } from "react";
import Image from "next/image";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  title = "¿Listo para transformar tu próximo evento?",
  subtitle = "Cuéntanos tus ideas y diseñemos juntos una experiencia corporativa inolvidable que conecte, motive y sorprenda a tu equipo.",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputStyles =
    "w-full rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-3 font-roboto text-base text-[#1E1E1E] outline-none placeholder:text-ebombo-text/60 focus:border-ebombo-primary";

  return (
    <section id="contacto" className="bg-white px-[5%] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-container">
        <div className="rounded-[24px] bg-[#F7F7F7] px-5 py-10 md:px-10 md:py-[65px]">
          <div className="flex flex-col items-center gap-4 mb-8">
            <h2 className="text-center font-poppins text-[27px] font-semibold leading-[1.2] tracking-[-1px] text-ebombo-primary md:text-[42px] md:leading-tight">
              {title}
            </h2>
            <p className="text-center font-roboto text-[14px] text-ebombo-dark md:text-xl">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col items-center gap-[35px] md:flex-row md:items-start">
            <form
              onSubmit={handleSubmit}
              className="mt-5 flex w-full flex-col gap-5 md:w-[60%]"
            >
              <div>
                <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputStyles}
                />
              </div>
              <div className="flex flex-col gap-5 md:flex-row md:gap-4">
                <div className="md:w-1/2">
                  <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Teléfono o WhatsApp"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={inputStyles}
                  />
                </div>
                <div className="md:w-1/2">
                  <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Correo electrónico (opcional)"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputStyles}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                  Cuéntanos más! (opcional)
                </label>
                <textarea
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
                className="w-full rounded-[50px] bg-ebombo-orange px-8 py-3 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
              >
                Enviar
              </button>
            </form>

            <div className="hidden md:flex md:w-[40%] md:items-center md:justify-center">
              <Image
                src="https://ebombo.com/wp-content/uploads/2025/12/Mask-Group-27.png.webp"
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
