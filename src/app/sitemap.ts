import type { MetadataRoute } from "next";
import { baseUrl, publicPages } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const companyPages = ["/", "/technology", "/contact"].map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: new Date("2026-07-31"),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
  const legacyPages = publicPages.filter((page) => page.slug).map((page) => ({
    url: new URL(page.slug ? `/${page.slug}` : "/", baseUrl).toString(),
    lastModified: new Date("2026-07-13"),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));
  return [...companyPages, ...legacyPages];
}
