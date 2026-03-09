import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tipos de Evento | eBombo Internacional",
  description:
    "Descubre los diferentes tipos de eventos corporativos que ofrecemos: eventos corporativos, marketing, team building, retiros y virtuales.",
};

const IMG = "https://ebombo.com/wp-content/uploads/2025/12";

const showcaseCards = [
  {
    badge: "Team Building",
    badgeColor: "#7A33FF",
    title: "Cooking",
    image: `${IMG}/events-cooking.jpg`,
  },
  {
    badge: "Corporativo",
    badgeColor: "#F78A0A",
    title: "Días Familiares",
    image: `${IMG}/events-family-days.jpg`,
  },
  {
    badge: "Retiros",
    badgeColor: "#27AE60",
    title: "Wellness",
    image: `${IMG}/events-wellness-corporate.jpg`,
  },
  {
    badge: "Team Building",
    badgeColor: "#7A33FF",
    title: "Liderazgo",
    image: `${IMG}/events-leadership-building.jpg`,
  },
  {
    badge: "Festividades",
    badgeColor: "#E74C3C",
    title: "Navidad",
    image: `${IMG}/events-navidad-evento.jpg`,
  },
  {
    badge: "Corporativo",
    badgeColor: "#3498DB",
    title: "Voluntariado",
    image: `${IMG}/events-charity-events.jpg`,
  },
];

const categoryPills = [
  "Eventos Corporativos",
  "Eventos de Marketing",
  "Eventos de Trabajo en Equipo",
  "Eventos de Retiro",
  "Eventos Virtuales",
];

const categorySections = [
  {
    label: "EVENTOS CORPORATIVOS",
    labelColor: "#7A33FF",
    title: "Nos Encargamos De Todos Los Detalles",
    description:
      "Ubicaciones de clase mundial, producción, catering y soporte dedicado para el éxito del cliente.",
    iconColor: "#7A33FF",
    bgSection: "bg-white",
    bgCard: "bg-[#F7F7F7]",
    items: [
      { icon: "birthday-cake", label: "Festividades" },
      { icon: "trophy", label: "Reconocimientos" },
      { icon: "users", label: "Días Familiares" },
      { icon: "heart", label: "Bienestar" },
      { icon: "chalkboard", label: "Seminarios" },
    ],
  },
  {
    label: "EVENTOS DE MARKETING",
    labelColor: "#F78A0A",
    title: "Haz La Diferencia Con Tu Marca",
    description:
      "Transformamos tu visión en experiencias de marketing inolvidables.",
    iconColor: "#F78A0A",
    bgSection: "bg-[#F7F7F7]",
    bgCard: "bg-white",
    items: [
      { icon: "hand-heart", label: "Eventos Benéficos" },
      { icon: "store", label: "Pop-Up & Lanzamientos" },
      { icon: "calendar", label: "Activaciones Estacionales" },
      { icon: "bullhorn", label: "Ferias & Exposiciones" },
    ],
  },
  {
    label: "TEAM BUILDING",
    labelColor: "#7A33FF",
    title: "Eventos De Construcción De Equipos",
    description:
      "Impulsa tu marca y cautiva a tu audiencia con nuestros eventos especializados.",
    iconColor: "#7A33FF",
    bgSection: "bg-white",
    bgCard: "bg-[#F7F7F7]",
    items: [
      { icon: "utensils", label: "Cocina Saludable" },
      { icon: "dumbbell", label: "Desafíos de Fitness" },
      { icon: "chess", label: "Liderazgo" },
      { icon: "brain", label: "Salud Mental" },
    ],
  },
  {
    label: "RETIROS CORPORATIVOS",
    labelColor: "#F78A0A",
    title: "Retiros Que Hacen La Diferencia",
    description:
      "Impulsa tu marca y cautiva a tu audiencia con nuestros eventos especializados.",
    iconColor: "#F78A0A",
    bgSection: "bg-[#F7F7F7]",
    bgCard: "bg-white",
    items: [
      { icon: "chart-line", label: "Retiros de Ventas" },
      { icon: "spa", label: "Retiros de Bienestar" },
      { icon: "om", label: "Yoga y Meditación" },
      { icon: "mountain", label: "Aventura al Aire Libre" },
    ],
  },
  {
    label: "EVENTOS VIRTUALES",
    labelColor: "#7A33FF",
    title: "Experiencias Sin Interrupciones",
    description:
      "Para que puedas conectar con tu audiencia y alcanzar tus objetivos sin esfuerzo.",
    iconColor: "#7A33FF",
    bgSection: "bg-white",
    bgCard: "bg-[#F7F7F7]",
    items: [
      { icon: "gamepad", label: "Eventos Interactivos" },
      { icon: "microphone", label: "Animadores Profesionales" },
      { icon: "cube", label: "Escenarios 3D" },
      { icon: "video", label: "Producción y Sonido" },
    ],
  },
];

const iconPaths: Record<string, string> = {
  "birthday-cake":
    "M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h-64a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h64V48c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16v16h64a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c28.02 0 31.26 32 74.5 32 43.43 0 46.825-32 74.75-32 27.695 0 31.454 32 74.75 32 42.842 0 47.218-32 74.5-32 28.148 0 31.202 32 74.75 32 43.547 0 46.653-32 74.75-32v96z",
  trophy:
    "M400 0H176c-26.5 0-48 21.5-48 48v16H48C21.5 64 0 85.5 0 112v48c0 44.2 35.8 80 80 80h2.5c23.7 51.4 68 89.4 121.5 101v83H128c-17.7 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32h-76V341c53.5-11.6 97.8-49.6 121.5-101H496c44.2 0 80-35.8 80-80v-48c0-26.5-21.5-48-48-48h-80V48c0-26.5-21.5-48-48-48zM96 192H80c-8.8 0-16-7.2-16-16v-48h32v64zm384-16c0 8.8-7.2 16-16 16h-16v-64h32v48z",
  users:
    "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
  heart:
    "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
  chalkboard:
    "M640 0H0v480h256v-53.3c0-23.6 19.1-42.7 42.7-42.7h138.6c23.6 0 42.7 19.1 42.7 42.7V480h160V0zM512 288H128V64h384v224z",
  "hand-heart":
    "M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zM608 64H480v96c0 70.7-57.3 128-128 128H272c-5 0-9.8-.6-14.6-1.5C137.8 304.8 48 413.6 48 416H0c0-34.3 139.2-168.2 288-181.4 11.2-.9 22.8 6.8 22.8 18.4v1c0 8.6-6.2 16-14.8 17.4-58.6 9.4-109.5 29.5-150.7 50.7-2 1-3.4-.9-2.2-2.4C177 273.1 256.7 224 352 224h16c61.9 0 112-50.1 112-112V32c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32z",
  store:
    "M602 118.6L537.1 15C531.3 5.7 521 0 510 0H126c-11 0-21.3 5.7-27 15L34 118.6c-37.1 56.8-24.1 131.3 29.1 172.3V464c0 26.5 21.5 48 48 48h413.8c26.5 0 48-21.5 48-48V290.8c53.2-41 66.2-115.5 29.1-172.2zM480 464H158V320h322v144zm51.1-182.8c-10.5 8.5-24.9 8.7-35.7.7-27.5-20.4-66.4-20.5-93.9 0-10.2 7.6-24.1 7.6-34.3 0-27.5-20.5-66.4-20.5-93.9 0-10.2 7.6-24.1 7.6-34.3 0-27.5-20.5-66.4-20.5-93.9 0-10.8 8-25.2 7.8-35.7-.7-25.3-20.5-18.5-63.1 16.4-76.2L318 104h0z",
  calendar:
    "M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12z",
  bullhorn:
    "M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.56c-1.94 13.34-3.56 26.82-3.56 40 0 45.81 14.16 90.89 40.67 128.88C143.39 534.12 158.68 544 175.2 544h40.92c23.79 0 38.34-26.11 24.53-45.43C219.44 469.55 208 437.94 208 408c0-11.49 1.59-22.61 4.26-33.21l8.91 1.07 186.86 149.49C413.81 529.62 420.88 532 428 532h84c25.02 0 32-23.26 32-32.01V295.13c19.05-11.09 32-31.5 32-55.13z",
  utensils:
    "M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 480c0 17.7-14.3 32-32 32H88c-17.7 0-32-14.3-32-32L56.9 248.5C15.8 233.5-12 196.3-12 144c0-34.3 15.3-124.1 16.1-128.8C5.3 8.1 10.9 3.3 17.4 3.3c4 0 7.3 2.1 9.4 5.4C37.2 24.5 64 112.5 64 144c0 6.4-.8 12.3-2.2 18l14.6 0c-1.4-5.7-2.2-11.6-2.2-18 0-31.5 26.8-119.5 37.2-135.3 2.1-3.3 5.4-5.4 9.4-5.4 6.5 0 12.1 4.8 13.3 11.9zM400 0c-26.5 0-48 21.5-48 48V256c0 26.5 21.5 48 48 48v176c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V304c0 0 0-256 0-256C512 21.5 490.5 0 464 0h-64z",
  dumbbell:
    "M104 96h-48C42.7 96 32 106.7 32 120v48H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v160c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM416 96H224c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h56v112H224c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-56V144h56c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z",
  chess:
    "M256 0c-17.7 0-32 14.3-32 32V64H192c-17.7 0-32 14.3-32 32v32H128c-17.7 0-32 14.3-32 32v48H64v64h32v80L32 416v64H480V416L416 352V272h32V208H416V160c0-17.7-14.3-32-32-32H352V96c0-17.7-14.3-32-32-32H288V32c0-17.7-14.3-32-32-32z",
  brain:
    "M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.4 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V128c0-35.3-28.7-64-64-64 0-35.3-28.7-64-64-64zm304 184c5.2-10.6 8.4-22.3 8.4-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.7 0-1.4.2-2.2.2C398.7 20.5 373.9 0 344 0c-35.3 0-64 28.7-64 64 0 35.3 28.7 64 64 64v304c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.8.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9 0-29.7-16.3-55.3-40.4-69.1z",
  "chart-line":
    "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",
  spa: "M568.25 192c-29.04 60.52-75.43 107.75-135.57 139.59 5.18-11.85 8.58-24.57 10.02-37.87 15.95-13.17 31.06-27.55 43.3-44.72-37.49 24.5-79.69 39.55-124 45.59V288c0 45.64 17.11 84.06 46.13 108.35C448 428.54 512 480 512 480s64-51.46 103.87-83.65C644.89 372.06 662 333.64 662 288v-6.41c-44.31-6.04-86.51-21.09-124-45.59zM376 164.8c1.44 13.3 4.84 26.02 10.02 37.87C325.86 170.75 279.47 123.52 250.43 63c37.49-24.5 79.69-39.55 124-45.59V24c0-45.64-17.11-84.06-46.13-108.35C288-116.54 224-168 224-168s-64 51.46-103.87 83.65C91.11-60.94 74 -22.36 74 24v6.41c44.31 6.04 86.51 21.09 124 45.59-12.24 17.17-27.35 31.55-43.3 44.72z",
  om: "M360.6 361c-3.2-4.1-8.3-6.1-13.3-5.2-5 .9-9.2 4.3-11.1 8.9-19.4 47.4-60.9 80.3-112.2 80.3-68.5 0-124-62.7-124-140 0-45.5 21.7-85.8 55.7-110.2 12.8 19 34.6 31.2 59.3 31.2 38.7 0 70-31.3 70-70s-31.3-70-70-70c-27.7 0-51.6 16.3-62.7 39.8C126.7 147 104 180 104 224c0 89.8 72.3 164 162 164 62.3 0 117.6-38.9 139.3-96.6 2.4-6.4 1.3-13.5-3.7-18.4z",
  mountain:
    "M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448A32.001 32.001 0 0 0 32 512h576c24.26 0 38.44-27.18 26.92-49.3zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z",
  gamepad:
    "M480 96H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM64 368c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm432 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm368-176H128c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64z",
  microphone:
    "M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z",
  cube: "M223.99 96l159.99 80-160 80L64 176l159.99-80zM0 201.5v175c0 10.7 5.83 20.54 15.22 25.66l168.78 92.34V300L16 220.5c-8.83-4.42-16 .82-16 9zm432-18l-168 84v194.5l168.78-92.34c9.39-5.12 15.22-14.96 15.22-25.66v-175c0-8.18-7.17-13.42-16-9z",
  video:
    "M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z",
};

function CategoryIcon({
  icon,
  color,
}: {
  icon: string;
  color: string;
}) {
  const path = iconPaths[icon];
  if (!path) return null;
  return (
    <svg
      className="h-10 w-10"
      fill={color}
      viewBox="0 0 640 512"
    >
      <path d={path} />
    </svg>
  );
}

export default function TiposDeEvento() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ebombo-light-purple px-[5%] pt-[40px] md:pt-[60px]">
          <div className="mx-auto max-w-container">
            <div className="flex flex-col overflow-hidden rounded-[28px] shadow-[0_0_10px_rgba(0,0,0,0.05)] md:flex-row">
              <div className="flex flex-col gap-[25px] bg-ebombo-light-purple p-[5%]">
                <div className="flex flex-col gap-[6px]">
                  <span className="font-roboto text-base font-semibold text-ebombo-primary">
                    Tipos de eventos
                  </span>
                  <h1 className="font-poppins text-[32px] font-bold leading-[1.13] tracking-[-1px] text-ebombo-secondary md:text-[46px]">
                    Impulsa la conexión con tu equipo y clientes
                  </h1>
                </div>
                <Link
                  href="#contacto"
                  className="self-start rounded-[64px] bg-ebombo-orange px-6 py-3 font-poppins text-base font-semibold tracking-[-0.4px] text-white transition-all duration-[600ms] hover:bg-ebombo-orange-dark md:text-lg"
                >
                  Comienza a planificar
                </Link>
              </div>
              <div className="hidden md:block md:min-w-[40%]">
                <Image
                  src={`${IMG}/Mask-Group-27.png.webp`}
                  alt="Photobooth 360 de eBombo en evento"
                  width={539}
                  height={390}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ebombo-light-purple px-[5%] py-[30px]">
          <div className="mx-auto max-w-container">
            <div className="flex flex-wrap justify-center gap-3 rounded-[28px] shadow-[0_0_10px_rgba(0,0,0,0.05)] md:gap-4">
              {categoryPills.map((pill, i) => (
                <div
                  key={pill}
                  className={`rounded-[18px] px-[4%] py-[2%] font-poppins text-sm font-semibold leading-[20px] tracking-[-0.5px] text-white shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-all duration-[600ms] hover:scale-105 hover:bg-ebombo-accent md:px-5 md:py-2.5 md:text-lg ${
                    i === 0 ? "bg-ebombo-accent" : "bg-ebombo-primary"
                  }`}
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F7] px-[5%] py-[40px] md:py-[70px]">
          <div className="mx-auto max-w-container">
            <div className="mb-8 text-center">
              <h2 className="font-poppins text-[27px] font-bold text-[#1E1E1E] md:text-[32px]">
                Explora nuestros eventos
              </h2>
              <p className="mt-2 font-roboto text-base leading-[1.6] text-[#666666]">
                Descubre las diferentes experiencias que podemos crear para tu
                equipo
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {showcaseCards.map((card) => (
                <div
                  key={card.title}
                  className="relative flex min-h-[200px] w-full flex-col justify-end overflow-hidden rounded-[20px] p-5 shadow-[0_6px_20px_rgba(0,0,0,0.1)] sm:w-[47%] md:w-[280px]"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 47vw, 280px"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10">
                    <span
                      className="mb-2 inline-block rounded-[20px] px-3 py-[5px] font-poppins text-[11px] font-semibold text-white"
                      style={{ backgroundColor: card.badgeColor }}
                    >
                      {card.badge}
                    </span>
                    <h4 className="font-poppins text-[20px] font-semibold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
                      {card.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {categorySections.map((section) => (
          <section
            key={section.label}
            className={`${section.bgSection} px-[5%] py-[40px] md:py-[80px]`}
          >
            <div className="mx-auto max-w-container">
              <div className="mb-10 text-center md:text-left">
                <span
                  className="font-poppins text-sm font-semibold uppercase tracking-[2px]"
                  style={{ color: section.labelColor }}
                >
                  {section.label}
                </span>
                <h2 className="mt-2 font-poppins text-[27px] font-bold text-[#1E1E1E] md:text-[42px]">
                  {section.title}
                </h2>
                <p className="mt-2 font-roboto text-base text-[#666666] md:text-lg">
                  {section.description}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center gap-3 rounded-[16px] ${section.bgCard} px-4 py-6 sm:w-[45%] md:w-auto md:min-w-[150px] md:px-6`}
                  >
                    <CategoryIcon
                      icon={item.icon}
                      color={section.iconColor}
                    />
                    <span className="font-poppins text-sm font-semibold text-[#1E1E1E]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <ContactForm
          title="¿Qué formato tienes en mente?"
          subtitle="Ya sea virtual, presencial o híbrido, tenemos la solución. Dinos qué tipo de evento imaginas y nosotros nos encargamos de la producción técnica."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
