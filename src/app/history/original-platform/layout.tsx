import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/legacy-favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function OriginalPlatformLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
