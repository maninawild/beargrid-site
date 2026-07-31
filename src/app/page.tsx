import type { Metadata } from "next";
import { Hero, Sections } from "@/components/PageSections";
import { baseUrl, pages } from "@/data/site";

const historyPage = pages.history;

export const metadata: Metadata = {
  title: historyPage.title,
  description: historyPage.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "BearGrid Solutions",
    title: historyPage.title,
    description: historyPage.description,
    url: baseUrl,
    images: [historyPage.heroImage ?? "/media/bear-grid-system.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: historyPage.title,
    description: historyPage.description,
    images: [historyPage.heroImage ?? "/media/bear-grid-system.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero page={historyPage} />
      <Sections page={historyPage} />
    </>
  );
}
