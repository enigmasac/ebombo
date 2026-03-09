"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  "https://ebombo.com/wp-content/uploads/2025/12/589815987_18094649159498979_6288247503322878337_n.jpg",
  "https://ebombo.com/wp-content/uploads/2025/12/588720329_18094649147498979_1544328596509381935_n.jpg",
  "https://ebombo.com/wp-content/uploads/2025/12/589152199_18094649138498979_5046094930520157946_n.jpg",
  "https://ebombo.com/wp-content/uploads/2025/12/588293929_18094649129498979_3666561184829064941_n.jpg",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="bg-ebombo-primary">
      <div className="mx-auto flex min-h-[620px] max-w-[1200px] flex-col items-center justify-center px-[5%] py-[40px] md:flex-row md:items-center md:gap-[60px] md:py-[80px]">
        <div className="flex flex-col justify-center gap-[13px] text-center md:w-[45%] md:shrink-0 md:gap-[6px] md:text-left">
          <div className="flex flex-col gap-[13px] md:gap-[6px]">
            <span className="font-roboto text-base font-semibold text-white">
              Revoluciona tus
            </span>
            <h1 className="font-poppins text-[46px] font-bold leading-[0.95] tracking-[-2px] text-white md:text-[80px]">
              Eventos Corporativos
            </h1>
            <div className="flex items-center justify-center gap-[5px] md:justify-end">
              <span className="font-roboto text-base text-white">con</span>
              <Image
                src="https://ebombo.com/wp-content/uploads/2025/11/ebombo-white.png"
                alt="eBombo"
                width={84}
                height={22}
                className="-mt-[5px] w-[84px]"
              />
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-[13px] md:gap-[6px]">
            <p className="font-roboto text-[15px] font-semibold leading-[22px] tracking-[-0.2px] text-white md:text-[20px]">
              Planifica y ejecuta sin esfuerzo eventos corporativos inolvidables
              con nuestras herramientas y soporte experto.
            </p>
          </div>

          <div className="mt-2 flex items-center justify-center gap-[16px] self-center md:justify-start md:self-start">
            <Link
              href="#contacto"
              className="rounded-[64px] bg-ebombo-orange px-[15px] py-[10px] font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:bg-ebombo-orange-dark md:px-6 md:py-3 md:text-[18px]"
            >
              Comienza a planificar
            </Link>
            <Link
              href="/tipos-de-evento"
              className="rounded-[64px] bg-ebombo-accent px-[15px] py-[10px] font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:bg-ebombo-accent md:px-6 md:py-3 md:text-[18px]"
            >
              Tipos de evento
            </Link>
          </div>
        </div>

        <div className="mt-[30px] flex flex-1 items-center justify-center md:mt-0">
          <div className="w-full rounded-[88px] bg-gradient-to-b from-white to-ebombo-bg p-[12px]">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[76px]">
              {heroImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Evento corporativo eBombo ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-[1200ms] ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 90vw, 522px"
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
