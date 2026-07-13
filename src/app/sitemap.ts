import type { MetadataRoute } from "next";
import { baseUrl, publicPages } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map((page) => ({
    url: new URL(page.slug ? `/${page.slug}` : "/", baseUrl).toString(),
    lastModified: new Date("2026-07-13"),
    changeFrequency: page.slug === "" ? "monthly" : "yearly",
    priority: page.slug === "" ? 1 : 0.7,
  }));
}
