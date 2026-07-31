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
    default: "Bear Grid | Technology, Venture Building and Business Strategy",
    template: "%s",
  },
  description:
    "Bear Grid helps founders, companies and institutions turn complex technology and business questions into practical decisions, partnerships and working products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "BearGrid Solutions",
    title: "Bear Grid | Technology, Venture Building and Business Strategy",
    description:
      "Technology strategy, venture building, product validation, risk management and partnership development.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bear Grid | Technology, Venture Building and Business Strategy",
    description:
      "Technology strategy, venture building, product validation, risk management and partnership development.",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bear Grid",
              url: baseUrl,
              logo: new URL("/logos/bear-grid-logo.png", baseUrl).toString(),
              email: "office@beargridsolutions.com",
              description:
                "Technology, venture and business strategy for complex markets, supported by an original AI-enabled sensing and monitoring platform.",
            }).replace(/</g, "\\u003c"),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
