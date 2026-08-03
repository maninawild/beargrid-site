import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bear Grid",
    short_name: "Bear Grid",
    description:
      "In Nederland gevestigd onafhankelijk R&D-adviesbureau voor technologiebeoordeling, validatie van nieuwe ondernemingen en innovatiepartnerschappen.",
    lang: "nl-NL",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
