import es from "./es";
import en from "./en";

export type Lang = "es" | "en";
export type Dictionary = typeof es;

export function isValidLang(value: string): value is Lang {
  return value === "es" || value === "en";
}

export function localePath(lang: Lang, path: string) {
  if (lang === "en") return `/en${path}`;
  return path;
}

const dictionaries = { es, en };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
