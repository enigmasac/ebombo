import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-ebombo-bg via-ebombo-light-purple to-ebombo-bg px-6">
      <div className="max-w-[500px] text-center">
        <Image
          src="https://ebombo.com/wp-content/uploads/2025/11/logoEbomboAColor.webp"
          alt="eBombo"
          width={180}
          height={48}
          className="mx-auto mb-8"
        />

        <h1 className="bg-gradient-to-r from-ebombo-primary to-ebombo-orange bg-clip-text font-poppins text-[8rem] font-extrabold leading-none text-transparent">
          404
        </h1>

        <p className="mb-2 font-poppins text-2xl font-semibold text-ebombo-primary">
          Ups! Este evento no existe
        </p>
        <p className="mb-8 font-roboto text-base leading-relaxed text-ebombo-text">
          Parece que esta pagina se fue de fiesta y no volvio.
          <br />
          Pero no te preocupes, tenemos muchos eventos esperandote.
        </p>

        <Link
          href="/"
          className="inline-block rounded-[50px] bg-gradient-to-r from-ebombo-primary to-ebombo-accent px-8 py-3.5 font-poppins font-semibold text-white shadow-[0_4px_20px_rgba(128,86,235,0.35)] transition-transform duration-300 hover:scale-105"
        >
          Volver a la fiesta
        </Link>
      </div>
    </div>
  );
}
