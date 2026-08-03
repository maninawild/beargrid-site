import type { Metadata } from "next";
import { headers } from "next/headers";
import { Suspense } from "react";
import { Inter, Roboto_Mono } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { baseUrl } from "@/data/site";
import "./globals.css";
import "./legal.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "Bear Grid | Independent R&D Consultancy", template: "%s" },
  description: "Bear Grid is a Netherlands-based independent R&D consultancy for technology assessment, venture validation, innovation strategy and partnerships.",
  applicationName: "Bear Grid",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/brand/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/brand/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: { type: "website", locale: "en_US", alternateLocale: "nl_NL", siteName: "Bear Grid", url: baseUrl, title: "Bear Grid | Independent R&D Consultancy", description: "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.", images: [{ url: "/brand/og-logo.png", width: 1200, height: 630, alt: "Bear Grid" }] },
  twitter: { card: "summary_large_image", title: "Bear Grid | Independent R&D Consultancy", description: "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.", images: ["/brand/og-logo.png"] },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = (await headers()).get("x-bear-grid-locale") === "nl-NL" ? "nl-NL" : "en";
  return <html lang={locale} className={`${inter.variable} ${mono.variable} h-full antialiased`}><body className="flex min-h-full flex-col"><Suspense><SiteShell>{children}</SiteShell></Suspense></body></html>;
}
