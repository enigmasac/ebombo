"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { experiences, filterCategories } from "@/data/experiences";

export default function Experiencias() {
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filtered =
    activeFilter === "Todas"
      ? experiences
      : experiences.filter((e) => e.badge === activeFilter);

  return (
    <>
      <Header />
      <main>
        <section className="bg-ebombo-primary px-[5%] py-[40px] md:py-[60px]">
          <div className="mx-auto flex min-h-[350px] max-w-container flex-col items-center justify-center text-center">
            <h5 className="mb-3 font-poppins text-base font-semibold text-ebombo-orange">
              Casos de éxito
            </h5>
            <h1 className="font-poppins text-[28px] font-bold leading-[1.2] tracking-[-1px] text-white md:text-[42px]">
              Actividades y Eventos Corporativos para el Trabajo en Equipo
            </h1>
            <p className="mt-4 max-w-[700px] font-roboto text-sm leading-[1.6] text-white md:text-base">
              Descubre más de 25 actividades de team building disponibles en
              cualquier lugar. Mejora el compromiso, eleva la moral y fortalece
              la camaradería de tu equipo.
            </p>
          </div>
        </section>

        <section className="px-[5%]">
          <div className="mx-auto -mt-[25px] max-w-container rounded-[16px] bg-white px-6 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-[99px] px-3 py-2 font-poppins text-sm font-semibold shadow-[0_0_10px_rgba(0,0,0,0.09)] transition-all duration-300 md:px-4 ${
                    activeFilter === cat
                      ? "bg-ebombo-primary text-ebombo-bg"
                      : "bg-ebombo-bg text-ebombo-text hover:bg-ebombo-primary hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px] md:py-[50px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-8 font-poppins text-[24px] font-bold text-[#1E1E1E] md:text-[28px]">
              {activeFilter === "Todas"
                ? "Todas las Experiencias"
                : activeFilter}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {filtered.map((exp) => (
                <Link
                  key={exp.slug}
                  href={`/experiencias/${exp.slug}`}
                  className="group overflow-hidden rounded-[24px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <h3 className="font-poppins text-lg font-semibold tracking-[-1px] text-ebombo-secondary">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="rounded-[50px] bg-[#F3EEFF] px-3 py-1 font-poppins text-xs font-medium text-[#7A33FF]">
                        {exp.badge}
                      </span>
                      <span className="font-roboto text-sm text-[#666666]">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F7] px-[5%] py-[40px] md:py-[50px]">
          <div className="mx-auto max-w-container">
            <h2 className="mb-8 font-poppins text-[20px] font-bold text-[#1E1E1E] md:text-[24px]">
              Otras Colecciones Que Te Pueden Gustar:
            </h2>
            <div className="flex flex-wrap gap-5">
              {[
                {
                  title: "Favoritos",
                  color: "#F78A0A",
                  description:
                    "Nuestras experiencias más reservadas y queridas por miles de clientes. A ti también te encantarán!",
                },
                {
                  title: "Experiencias en tendencia",
                  color: "#7A33FF",
                  description:
                    "Descubre lo que más les gusta a nuestros clientes! Nuestras experiencias más nuevas y de moda.",
                },
                {
                  title: "Nuevas experiencias",
                  color: "#27AE60",
                  description:
                    "Siempre estamos añadiendo experiencias nuevas a nuestro creciente catálogo de eventos.",
                },
              ].map((collection) => (
                <div
                  key={collection.title}
                  className="w-full rounded-[16px] bg-white p-5 sm:w-[47%] md:w-[31%]"
                >
                  <h3
                    className="mb-3 font-poppins text-lg font-semibold"
                    style={{ color: collection.color }}
                  >
                    {collection.title}
                  </h3>
                  <p className="font-roboto text-sm leading-[1.5] text-[#666666]">
                    {collection.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
