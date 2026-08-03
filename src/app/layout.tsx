import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { baseUrl } from "@/data/site";
import "./globals.css";
import "./legal.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "Bear Grid | Onafhankelijk R&D-adviesbureau", template: "%s" },
  description: "Bear Grid is een in Nederland gevestigd onafhankelijk R&D-adviesbureau voor technologiebeoordeling, R&D-strategie, validatie en innovatiepartnerschappen.",
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
  openGraph: { type: "website", locale: "nl_NL", siteName: "Bear Grid", url: baseUrl, title: "Bear Grid | Onafhankelijk R&D-adviesbureau", description: "Onafhankelijke technologiebeoordeling, R&D-strategie, validatie van nieuwe ondernemingen en innovatiepartnerschappen.", images: ["/brand-assets/og-default.png"] },
  twitter: { card: "summary_large_image", title: "Bear Grid | Onafhankelijk R&D-adviesbureau", description: "Onafhankelijke technologiebeoordeling, R&D-strategie, validatie van nieuwe ondernemingen en innovatiepartnerschappen.", images: ["/brand-assets/twitter-default.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl-NL" className={`${inter.variable} ${mono.variable} h-full antialiased`}><body className="flex min-h-full flex-col"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "Bear Grid", url: baseUrl, logo: { "@type": "ImageObject", "@id": `${baseUrl}/#logo`, url: `${baseUrl}/logos/bear-grid-logo.png`, contentUrl: `${baseUrl}/logos/bear-grid-logo.png`, width: 270, height: 236, caption: "Bear Grid" }, image: { "@id": `${baseUrl}/#logo` }, foundingDate: "2019", description: "Bear Grid is een in Nederland gevestigd onafhankelijk R&D-adviesbureau, opgericht in 2019.", knowsAbout: ["Technologiebeoordeling", "R&D-strategie", "Validatie van nieuwe ondernemingen", "Innovatiepartnerschappen"], inLanguage: "nl-NL" }, { "@type": "WebSite", "@id": `${baseUrl}/#website`, name: "Bear Grid", url: baseUrl, publisher: { "@id": `${baseUrl}/#organization` }, inLanguage: "nl-NL" }] }).replace(/</g, "\\u003c") }} /><SiteShell>{children}</SiteShell></body></html>;
}
