import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const siteUrl = "https://beargridsolutions.com";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bear Grid | Independent R&D Consultancy",
    template: "%s | Bear Grid",
  },
  description:
    "Bear Grid is a Netherlands-based independent R&D consultancy for technology assessment, venture validation, innovation strategy and partnerships.",
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    title: "Bear Grid | Independent R&D Consultancy",
    description:
      "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.",
    url: siteUrl,
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
            "@type": "Organization",
            name: "Bear Grid",
            url: siteUrl,
            logo: `${siteUrl}/logos/bear-grid-logo.png`,
            foundingDate: "2019",
            description: "Bear Grid is a Netherlands-based independent R&D consultancy.",
          }).replace(/</g, "\\u003c") }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
