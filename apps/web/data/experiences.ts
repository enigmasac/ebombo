import { experienceDetails } from "./experienceDetails";
import { experienceContentBatch2 } from "./experienceContentBatch2";

const IMG = "https://ebombo.com/wp-content/uploads";

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export interface Experience {
  title: string;
  image: string;
  badge: string;
  duration: string;
  slug: string;
  heroDescription?: string;
  metaPills?: string[];
  bodyContent?: ContentBlock[];
}

export const experiences: Experience[] = [
  {
    title: "Penka Corporativa Uruguay",
    image: `${IMG}/2026/03/Penka-Corporativa-Uruguay-.jpg`,
    badge: "Deporte",
    duration: "30 min",
    slug: "penka-corporativa-uruguay",
    metaPills: ["Integración", "30 minutos"],
    heroDescription:
      "Organiza una penka corporativa en Uruguay para motivar equipos, fortalecer la cultura y generar una competencia interna divertida.",
  },
  {
    title: "Agencia de Eventos en Madrid",
    image: `${IMG}/2026/03/Agencia-de-Eventos-en-Madrid-.jpg`,
    badge: "Outdoor",
    duration: "60 min",
    slug: "agencia-eventos-madrid",
    metaPills: ["Resolución de Problemas", "60 minutos"],
    heroDescription:
      "Organiza eventos corporativos inolvidables en Madrid con nuestra agencia especializada en team building y experiencias de equipo.",
  },
  {
    title: "Clase de Mixología para Team Building",
    image: `${IMG}/2026/01/Clase-de-Mixologia-de-Cocteles-para-Team-Building.jpg`,
    badge: "Cocina",
    duration: "60 min",
    slug: "clase-mixologia-team-building",
    metaPills: ["Motivación", "60 minutos"],
    heroDescription:
      "Aprende a preparar cócteles profesionales mientras fortaleces los lazos de tu equipo en una experiencia única de mixología.",
  },
  {
    title: "Conferencias",
    image: `${IMG}/2026/02/Conferencias.jpg`,
    badge: "Innovación",
    duration: "60 min",
    slug: "conferencias",
    metaPills: ["Motivación", "60 minutos"],
    heroDescription:
      "Organiza conferencias corporativas de alto impacto que inspiren, informen y motiven a tu equipo.",
  },
  {
    title: "Duelo de Compañeros",
    image: `${IMG}/2025/12/6a2PyEck.jpeg`,
    badge: "Trivia",
    duration: "30 min",
    slug: "duelo-de-companeros",
    metaPills: ["Integración", "30 minutos"],
    heroDescription:
      "Pon a prueba los conocimientos de tu equipo en una competencia divertida y dinámica que fortalece el trabajo en equipo.",
  },
  {
    title: "Evento de Team Building Solidario",
    image: `${IMG}/2026/01/Evento-de-Team-Building-Solidario.jpg`,
    badge: "Voluntariado",
    duration: "120 min",
    slug: "team-building-solidario",
    metaPills: ["Integración", "120 minutos"],
    heroDescription:
      "Conecta equipos con propósito a través de experiencias de voluntariado corporativo que generan impacto social real.",
  },
  {
    title: "Experiencia de Team Building con Cocina",
    image: `${IMG}/2026/01/Team-Cooking-–-Experiencia-de-Team-Building-con-Cocina.jpg`,
    badge: "Cocina",
    duration: "120 min",
    slug: "team-building-cocina",
    metaPills: ["Integración", "120 minutos"],
    heroDescription:
      "Una experiencia culinaria donde tu equipo cocina, colabora y disfruta juntos creando platos increíbles bajo la guía de chefs profesionales.",
  },
  {
    title: "Ferias Gastronómicas",
    image: `${IMG}/2026/02/Ferias-Gastronomicas.jpg`,
    badge: "Cocina",
    duration: "30 min",
    slug: "ferias-gastronomicas",
    metaPills: ["Integración", "30 minutos"],
    heroDescription:
      "Experiencias gastronómicas que conectan marcas y equipos en un ambiente único de sabores y creatividad.",
  },
  {
    title: "Fiesta Casino",
    image: `${IMG}/2026/01/Fiesta-Casino-2.jpg`,
    badge: "Trivia",
    duration: "120 min",
    slug: "fiesta-casino",
    metaPills: ["Creatividad"],
    heroDescription:
      "Transforma tu evento corporativo en una experiencia temática de casino con mesas profesionales y dealers expertos.",
  },
  {
    title: "Inauguraciones",
    image: `${IMG}/2026/01/Inauguraciones-que-son-como-organizarlas-y-por-que-importan-para-la-identidad-corporativa.jpg`,
    badge: "Innovación",
    duration: "60 min",
    slug: "inauguraciones-corporativas",
    metaPills: ["Motivación"],
    heroDescription:
      "Haz de tu inauguración un evento memorable que refleje los valores y la identidad de tu empresa con producción profesional completa.",
  },
  {
    title: "Misión de Escape",
    image: `${IMG}/2025/12/Mask-Group-9.webp`,
    badge: "Trivia",
    duration: "30 min",
    slug: "mision-escape",
    metaPills: ["Confianza", "30 minutos"],
    heroDescription:
      "Una experiencia virtual inmersiva de resolución de acertijos que pone a prueba la comunicación y colaboración de tu equipo.",
  },
  {
    title: "Prode Corporativo para Empresas Argentinas",
    image: `${IMG}/2026/03/Prode-Corporativo.jpg`,
    badge: "Deporte",
    duration: "30 min",
    slug: "prode-corporativo-para-empresas-argentinas",
    metaPills: ["Integración", "30 minutos"],
    heroDescription:
      "Conecta a tu equipo a través de la pasión por el deporte con predicciones, rankings y competencia sana.",
  },
  {
    title: "Programas Corporativos de Mindfulness",
    image: `${IMG}/2026/01/Programas-Corporativos-de-Mindfulness.jpg`,
    badge: "Mindfulness",
    duration: "30 min",
    slug: "programas-corporativos-mindfulness",
    metaPills: ["Motivación", "30 minutos"],
    heroDescription:
      "Programas diseñados para ayudar a los colaboradores a gestionar el estrés, mejorar la concentración y potenciar el bienestar.",
  },
  {
    title: "Rueda de Prensa",
    image: `${IMG}/2026/03/Rueda-de-Prensa.jpg`,
    badge: "Innovación",
    duration: "30 min",
    slug: "rueda-prensa",
    metaPills: ["Comunicación", "30 minutos"],
    heroDescription:
      "Organiza ruedas de prensa profesionales con producción audiovisual de primera calidad para que tu mensaje llegue con impacto.",
  },
  {
    title: "Simposios",
    image: `${IMG}/2026/02/Simposios.jpg`,
    badge: "Innovación",
    duration: "60 min",
    slug: "simposios",
    metaPills: ["Motivación", "60 minutos"],
    heroDescription:
      "Organiza simposios corporativos que generen conocimiento, conexiones de valor y posicionamiento sectorial.",
  },
  {
    title: "Trivia Clásica",
    image: `${IMG}/2025/12/Mask-Group-38.webp`,
    badge: "Trivia",
    duration: "60 min",
    slug: "trivia-clasica",
    metaPills: ["Integración", "60 minutos"],
    heroDescription:
      "Una competencia de trivia clásica donde los equipos ponen a prueba sus conocimientos generales en una batalla de ingenio.",
  },
  {
    title: "Workshop de Engagement Laboral",
    image: `${IMG}/2026/01/Employee-Engagement-Workshop.jpg`,
    badge: "Workshop",
    duration: "30 min",
    slug: "wrokshop-engagement-laboral",
    metaPills: ["Integración", "30 minutos"],
    heroDescription:
      "Talleres prácticos diseñados para mejorar el compromiso, la motivación y la cultura organizacional de tu equipo.",
  },
];

export const filterCategories = [
  "Todas",
  "Cocina",
  "Deporte",
  "Innovación",
  "Mindfulness",
  "Outdoor",
  "Trivia",
  "Voluntariado",
  "Workshop",
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getExperienceContent(slug: string): ContentBlock[] {
  const batch1 = experienceDetails.find((e) => e.slug === slug);
  if (batch1) return batch1.bodyContent as ContentBlock[];

  const batch2 = experienceContentBatch2.find((e) => e.slug === slug);
  if (batch2) return batch2.bodyContent as ContentBlock[];

  return [];
}
