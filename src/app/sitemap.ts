import type { MetadataRoute } from "next";
import { baseUrl, publicPages } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const companyPages = [
    "/",
    "/expertise",
    "/contact",
    "/investors",
    "/history",
    "/history/original-platform",
    "/legal",
    "/privacy-policy",
    "/cookie-policy",
  ].map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: new Date("2026-08-03"),
    changeFrequency: path.includes("policy") || path === "/legal" ? ("yearly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : path === "/expertise" ? 0.9 : path.includes("policy") || path === "/legal" ? 0.3 : 0.8,
  }));

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
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }));
  return [...companyPages, ...legacyPages];
}
