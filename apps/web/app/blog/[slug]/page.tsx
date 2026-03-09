import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RenderContent from "@/components/RenderContent";
import { getAllPosts, getPostBySlug } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post no encontrado" };
  return {
    title: `${post.title} | eBombo Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.thumbnailUrl ? [{ url: post.thumbnailUrl }] : [],
      type: "article",
      publishedTime: post.datePublished,
      locale: post.lang === "es" ? "es_ES" : "en_US",
    },
  };
}

function formatDate(isoDate: string, lang: "es" | "en") {
  const date = new Date(isoDate);
  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const inputStyles =
    "w-full rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-3 font-roboto text-base text-[#1E1E1E] outline-none placeholder:text-ebombo-text/60 focus:border-ebombo-primary";

  return (
    <>
      <Header />
      <main>
        <section className="bg-white px-[5%] pt-[20px] md:pt-[30px]">
          <div className="mx-auto max-w-container">
            <div className="flex overflow-hidden rounded-[28px] bg-ebombo-light-purple shadow-[0_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col gap-5 p-[5%] md:w-[60%]">
                <div className="flex items-center gap-3">
                  <span className="inline-block rounded-[50px] bg-white px-3 py-1.5 font-poppins text-xs font-medium text-[#7A33FF]">
                    {post.lang === "es" ? "Español" : "English"}
                  </span>
                  <span className="font-roboto text-sm text-ebombo-text">
                    {formatDate(post.datePublished, post.lang)}
                  </span>
                </div>
                <h1 className="font-poppins text-[27px] font-bold leading-[1.13] tracking-[-1px] text-ebombo-secondary md:text-[46px]">
                  {post.title}
                </h1>
                {post.description && (
                  <p className="font-roboto text-base leading-[1.6] text-ebombo-text">
                    {post.description}
                  </p>
                )}
                <Link
                  href="#contacto"
                  className="self-start rounded-[64px] bg-ebombo-orange px-5 py-2.5 font-poppins text-xs font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:bg-ebombo-orange-dark md:px-6 md:py-3 md:text-lg"
                >
                  {post.lang === "es"
                    ? "Comienza a planificar"
                    : "Start planning"}
                </Link>
              </div>
              {post.thumbnailUrl && (
                <div className="relative hidden md:block md:w-[40%]">
                  <Image
                    src={post.thumbnailUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    style={{ borderRadius: "0 28px 28px 0" }}
                    sizes="40vw"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white px-[5%] py-[40px]">
          <div className="mx-auto flex max-w-container flex-col gap-10 md:flex-row md:items-start">
            <div className="md:w-[55%]">
              {post.bodyContent.length > 0 ? (
                <RenderContent blocks={post.bodyContent} />
              ) : (
                <p className="mb-5 font-roboto text-base leading-[1.7] text-ebombo-text">
                  {post.description}
                </p>
              )}
            </div>
            <div className="rounded-[33px] bg-ebombo-bg p-[3%] md:sticky md:top-[130px] md:w-[45%]">
              <h3 className="mb-4 text-center font-roboto text-[20px] font-semibold leading-[25px] text-ebombo-primary">
                {post.lang === "es"
                  ? "Hagamos realidad tu proyecto"
                  : "Let's make your project happen"}
              </h3>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                    {post.lang === "es" ? "Nombre completo" : "Full name"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={
                      post.lang === "es"
                        ? "Tu nombre completo"
                        : "Your full name"
                    }
                    required
                    className={inputStyles}
                  />
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="md:w-1/2">
                    <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                      {post.lang === "es" ? "Teléfono" : "Phone"}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder={
                        post.lang === "es"
                          ? "Teléfono o WhatsApp"
                          : "Phone or WhatsApp"
                      }
                      required
                      className={inputStyles}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder={
                        post.lang === "es"
                          ? "Correo electrónico (opcional)"
                          : "Email (optional)"
                      }
                      className={inputStyles}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-roboto text-sm font-medium text-[#1E1E1E]">
                    {post.lang === "es"
                      ? "Cuéntanos más! (opcional)"
                      : "Tell us more! (optional)"}
                  </label>
                  <textarea rows={4} className={`${inputStyles} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-[50px] bg-ebombo-orange px-8 py-3 font-poppins text-base font-semibold text-white transition-all duration-[600ms] hover:bg-[#e07a00]"
                >
                  {post.lang === "es" ? "Enviar" : "Submit"}
                </button>
              </form>
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
