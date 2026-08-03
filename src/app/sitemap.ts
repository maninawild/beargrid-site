import type { MetadataRoute } from "next";
import { baseUrl, publicPages } from "@/data/site";
import { localizedAlternates, localePath, modernPaths } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const companyPages = modernPaths.flatMap((path) => {
    const alternates = localizedAlternates(path);
    return (["en", "nl"] as const).map((locale) => ({
      url: new URL(localePath(locale, path), baseUrl).toString(),
      lastModified: new Date("2026-08-03"),
      alternates: { languages: alternates.languages },
    }));
  });

  const canonicalAliases: Record<string, string> = {
    "bear-grid-device": "bear-device",
    "copy-of-bear-device": "bear-grid-platform",
    "copy-of-bear-grid-platform": "ai-interface",
    sectors: "use-cases",
  };

  const legacyPages = publicPages
    .filter((page) => page.slug && !["contacts", "history"].includes(page.slug))
    .map((page) => ({
      url: new URL(`/history/original-platform/${canonicalAliases[page.slug] ?? page.slug}`, baseUrl).toString(),
      lastModified: new Date("2026-08-01"),
    }));
  return [
    ...companyPages,
    {
      url: new URL("/history/original-platform", baseUrl).toString(),
      lastModified: new Date("2026-08-03"),
    },
    ...legacyPages,
  ];
}
