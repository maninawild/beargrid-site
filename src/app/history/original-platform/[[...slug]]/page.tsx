import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "History", item: `${baseUrl}/history` },
          { "@type": "ListItem", position: 3, name: "Original platform", item: `${baseUrl}/history/original-platform` },
          ...(slug?.length ? [{ "@type": "ListItem", position: 4, name: page.navTitle, item: `${baseUrl}/history/original-platform/${slug[0]}` }] : []),
        ],
      }).replace(/</g, "\\u003c") }} />
      <Hero page={page} />
      <Sections page={page} />
      {(page.form || !slug?.length) ? (
        <section className="legacy-contact">
          <p>Questions about the original platform or current Bear Grid work?</p>
          <Link className="outline-button" href="/contact">Contact Bear Grid</Link>
        </section>
      ) : null}
    </>
  );
}
