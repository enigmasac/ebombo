import type { Lang } from "./i18n";

export interface Country {
  code: string;
  name: string;
  dial: string;
  flag: string;
}

const countries: Country[] = [
  { code: "MX", name: "Mexico", dial: "+52", flag: "🇲🇽" },
  { code: "PE", name: "Peru", dial: "+51", flag: "🇵🇪" },
  { code: "ES", name: "Espana", dial: "+34", flag: "🇪🇸" },
  { code: "US", name: "USA", dial: "+1", flag: "🇺🇸" },
  { code: "CO", name: "Colombia", dial: "+57", flag: "🇨🇴" },
  { code: "CL", name: "Chile", dial: "+56", flag: "🇨🇱" },
  { code: "AR", name: "Argentina", dial: "+54", flag: "🇦🇷" },
  { code: "EC", name: "Ecuador", dial: "+593", flag: "🇪🇨" },
  { code: "BO", name: "Bolivia", dial: "+591", flag: "🇧🇴" },
  { code: "PY", name: "Paraguay", dial: "+595", flag: "🇵🇾" },
  { code: "UY", name: "Uruguay", dial: "+598", flag: "🇺🇾" },
  { code: "VE", name: "Venezuela", dial: "+58", flag: "🇻🇪" },
  { code: "PA", name: "Panama", dial: "+507", flag: "🇵🇦" },
  { code: "CR", name: "Costa Rica", dial: "+506", flag: "🇨🇷" },
  { code: "GT", name: "Guatemala", dial: "+502", flag: "🇬🇹" },
  { code: "HN", name: "Honduras", dial: "+504", flag: "🇭🇳" },
  { code: "SV", name: "El Salvador", dial: "+503", flag: "🇸🇻" },
  { code: "DO", name: "Rep. Dominicana", dial: "+1", flag: "🇩🇴" },
  { code: "PR", name: "Puerto Rico", dial: "+1", flag: "🇵🇷" },
  { code: "BR", name: "Brasil", dial: "+55", flag: "🇧🇷" },
  { code: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { code: "GB", name: "UK", dial: "+44", flag: "🇬🇧" },
];

const esFirst = ["MX", "PE", "ES"];
const enFirst = ["US"];

export function getCountriesByLang(lang: Lang): Country[] {
  const priority = lang === "en" ? enFirst : esFirst;
  const top = priority.map((code) => countries.find((c) => c.code === code)!);
  const rest = countries.filter((c) => !priority.includes(c.code));
  return [...top, ...rest];
}

export function getDefaultPrefix(lang: Lang): string {
  return lang === "en" ? "+1" : "+52";
}

export function getDialByCountryCode(countryCode: string): string | null {
  const country = countries.find((c) => c.code === countryCode.toUpperCase());
  return country ? country.dial : null;
}

export async function detectPrefixByIP(): Promise<string | null> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return null;
    const data = await res.json();
    return getDialByCountryCode(data.country_code || "") || null;
  } catch {
    return null;
  }
}
