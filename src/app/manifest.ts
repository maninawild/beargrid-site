import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bear Grid",
    short_name: "Bear Grid",
    description:
      "Independent Netherlands-based R&D consultancy for technology assessment, venture validation and innovation partnerships.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F6F2",
    theme_color: "#F7F6F2",
    icons: [
      { src: "/brand/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
