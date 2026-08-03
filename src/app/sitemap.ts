import type { MetadataRoute } from "next";
import { baseUrl, publicPages } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const companyPageDates: Record<string, string> = {
    "/": "2026-08-03",
    "/expertise": "2026-08-03",
    "/contact": "2026-08-03",
    "/investors": "2026-08-03",
    "/history": "2026-08-03",
    "/history/original-platform": "2026-08-03",
    "/legal": "2026-08-03",
    "/privacy-policy": "2026-08-03",
    "/cookie-policy": "2026-08-03",
  };

  const companyPages = Object.entries(companyPageDates).map(([path, lastModified]) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: new Date(lastModified),
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
    }));
  return [...companyPages, ...legacyPages];
}
