import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    default: "Smart Sensors | Bear Grid Solutions",
    template: "%s",
  },
  description:
    "Bear Grid Labs is team researching and developing solutions for security and surveillance systems based on sound, tone and noise AI classification.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "BearGrid Solutions",
    title: "Smart Sensors | Bear Grid Solutions",
    description:
      "Bear Grid Labs is team researching and developing solutions for security and surveillance systems based on sound, tone and noise AI classification.",
    images: ["/media/bear-grid-system.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Sensors | Bear Grid Solutions",
    description:
      "Bear Grid Labs is team researching and developing solutions for security and surveillance systems based on sound, tone and noise AI classification.",
    images: ["/media/bear-grid-system.png"],
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
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
