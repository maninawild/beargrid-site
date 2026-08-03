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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: { type: "website", locale: "en_US", alternateLocale: "nl_NL", siteName: "Bear Grid", url: baseUrl, title: "Bear Grid | Independent R&D Consultancy", description: "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Bear Grid | Independent R&D Consultancy", description: "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.", images: ["/og.png"] },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = (await headers()).get("x-bear-grid-locale") === "nl-NL" ? "nl-NL" : "en";
  const isNl = locale === "nl-NL";
  return <html lang={locale} className={`${inter.variable} ${mono.variable} h-full antialiased`}><body className="flex min-h-full flex-col"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "Bear Grid", url: baseUrl, logo: { "@type": "ImageObject", "@id": `${baseUrl}/#logo`, url: `${baseUrl}/logos/bear-grid-logo.png`, contentUrl: `${baseUrl}/logos/bear-grid-logo.png`, width: 270, height: 236, caption: "Bear Grid" }, image: { "@id": `${baseUrl}/#logo` }, foundingDate: "2019", description: isNl ? "Bear Grid is een in Nederland gevestigd onafhankelijk R&D-adviesbureau, opgericht in 2019." : "Bear Grid is a Netherlands-based independent R&D consultancy founded in 2019.", knowsAbout: isNl ? ["Technologiebeoordeling", "R&D-strategie", "Validatie van nieuwe ondernemingen", "Innovatiepartnerschappen"] : ["Technology assessment", "R&D strategy", "Venture validation", "Innovation partnerships"], inLanguage: locale }, { "@type": "WebSite", "@id": `${baseUrl}/#website`, name: "Bear Grid", url: baseUrl, publisher: { "@id": `${baseUrl}/#organization` }, inLanguage: locale }] }).replace(/</g, "\\u003c") }} /><Suspense><SiteShell>{children}</SiteShell></Suspense></body></html>;
}
