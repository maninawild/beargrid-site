import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/Forms";
import { Hero, Sections } from "@/components/PageSections";
import { baseUrl, getPageBySlug, pages, publicPages } from "@/data/site";

const aliases: Record<string, string> = {
  "bear-device": "bear-grid-device",
  "bear-grid-platform": "copy-of-bear-device",
  "ai-interface": "copy-of-bear-grid-platform",
  "use-cases": "sectors",
};

function resolve(slug?: string[]) {
  if (!slug?.length) return pages.home;
  return getPageBySlug(aliases[slug[0]] ?? slug[0]);
}

export function generateStaticParams() {
  return [
    { slug: [] },
    ...publicPages.filter((page) => page.slug && page.slug !== "history" && page.slug !== "contacts").map((page) => ({ slug: [page.slug] })),
    ...Object.keys(aliases).map((slug) => ({ slug: [slug] })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) return {};
  const path = `/history/original-platform${slug?.length ? `/${slug[0]}` : ""}`;
  const title = page.slug ? `${page.navTitle} | Original Bear Grid Platform` : "Original Bear Grid Platform";
  return {
    title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: { title, description: page.description, url: new URL(path, baseUrl).toString() },
    twitter: { card: "summary_large_image", title, description: page.description, images: [page.heroImage ?? "/media/bear-grid-system.png"] },
  };
}

export default async function OriginalPlatformPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) notFound();
  return (
    <>
      <Hero page={page} />
      <Sections page={page} />
      {(page.form || !slug?.length) ? <section className="legacy-contact"><a className="whatsapp-link" href="https://wa.me/message/4OIGQ3FHUZQSD1" target="_blank" rel="noopener noreferrer">Write on WhatsApp</a><ContactForm /></section> : null}
    </>
  );
}
