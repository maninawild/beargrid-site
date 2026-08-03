import type { MetadataRoute } from "next";

const siteUrl = "https://beargridsolutions.com";

export default function robots(): MetadataRoute.Robots {
  const allowedBots = [
    "*",
    "Googlebot",
    "Bingbot",
    "Applebot",
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "PerplexityBot",
  ];

  return {
    rules: allowedBots.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
