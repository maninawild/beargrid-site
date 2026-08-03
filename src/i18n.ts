import { baseUrl } from "@/data/site";

export type Locale = "en" | "nl";

export const modernPaths = ["", "/expertise", "/investors", "/history", "/contact", "/legal", "/privacy", "/cookies"] as const;

export function localePath(locale: Locale, path = "") {
  const normalized = path === "/" ? "" : path;
  return locale === "nl" ? `/nl${normalized}` : normalized || "/";
}

export function localizedAlternates(path = "") {
  const englishPath = localePath("en", path);
  const dutchPath = localePath("nl", path);
  return {
    canonical: new URL(englishPath, baseUrl).toString(),
    languages: {
      en: new URL(englishPath, baseUrl).toString(),
      "nl-NL": new URL(dutchPath, baseUrl).toString(),
      "x-default": new URL(englishPath, baseUrl).toString(),
    },
  };
}

export function localizedAlternatesFor(locale: Locale, path = "") {
  const alternates = localizedAlternates(path);
  return {
    ...alternates,
    canonical: new URL(localePath(locale, path), baseUrl).toString(),
  };
}

export function localizedUrl(locale: Locale, path = "") {
  return new URL(localePath(locale, path), baseUrl).toString();
}
