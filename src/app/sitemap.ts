import type { MetadataRoute } from "next";
import { baseUrl, publicPages } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const companyPages = ["/", "/contact", "/history", "/history/original-platform"].map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: new Date("2026-07-31"),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
  const canonicalAliases: Record<string, string> = {
    "bear-grid-device": "bear-device",
    "copy-of-bear-device": "bear-grid-platform",
    "copy-of-bear-grid-platform": "ai-interface",
    sectors: "use-cases",
  };
  const legacyPages = publicPages
    .filter((page) => page.slug && page.slug !== "history" && page.slug !== "contacts")
    .map((page) => ({
    url: new URL(`/history/original-platform/${canonicalAliases[page.slug] ?? page.slug}`, baseUrl).toString(),
    lastModified: new Date("2026-07-13"),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));
  return [
    ...companyPages,
    {
      url: new URL("/history/original-platform/home", baseUrl).toString(),
      lastModified: new Date("2026-08-01"),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    ...legacyPages,
  ];
}
