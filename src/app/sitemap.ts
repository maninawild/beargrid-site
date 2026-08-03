import type { MetadataRoute } from "next";
import { publicPages } from "@/data/site";

const siteUrl = "https://beargridsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const companyPages = ["/", "/contact", "/investors", "/history", "/history/original-platform"].map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date("2026-08-03"),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));

  const canonicalAliases: Record<string, string> = {
    "bear-grid-device": "bear-device",
    "copy-of-bear-device": "bear-grid-platform",
    "copy-of-bear-grid-platform": "ai-interface",
    sectors: "use-cases",
  };

  const legacyPages = publicPages
    .filter((page) => page.slug && page.slug !== "contacts")
    .map((page) => ({
      url: new URL(`/history/original-platform/${canonicalAliases[page.slug] ?? page.slug}`, siteUrl).toString(),
      lastModified: new Date("2026-08-01"),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));

  return [
    ...companyPages,
    {
      url: new URL("/history/original-platform/home", siteUrl).toString(),
      lastModified: new Date("2026-08-01"),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    ...legacyPages,
  ];
}
