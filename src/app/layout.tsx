import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { baseUrl } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bear Grid | Independent R&D Consultancy",
    template: "%s",
  },
  description:
    "Bear Grid is a Netherlands-based independent R&D consultancy for technology assessment, venture validation, innovation strategy and partnerships.",
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
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    url: baseUrl,
    title: "Bear Grid | Independent R&D Consultancy",
    description:
      "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bear Grid | Independent R&D Consultancy",
    description:
      "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                name: "Bear Grid",
                url: baseUrl,
                logo: {
                  "@type": "ImageObject",
                  url: `${baseUrl}/logos/bear-grid-logo.png`,
                },
                foundingDate: "2019",
                description: "Bear Grid is a Netherlands-based independent R&D consultancy founded in 2019.",
              },
              {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                name: "Bear Grid",
                url: baseUrl,
                publisher: { "@id": `${baseUrl}/#organization` },
                inLanguage: "en",
              },
            ],
          }).replace(/</g, "\\u003c") }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
