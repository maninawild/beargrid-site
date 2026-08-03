import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero, Sections } from "@/components/PageSections";
import { baseUrl, getPageBySlug, legacyHomePage, pages, publicPages } from "@/data/site";

const aliases: Record<string, string> = {
  "bear-device": "bear-grid-device",
  "bear-grid-platform": "copy-of-bear-device",
  "ai-interface": "copy-of-bear-grid-platform",
  "use-cases": "sectors",
};

function resolve(slug?: string[]) {
  if (!slug?.length) return pages.home;
  if (slug[0] === "home") return legacyHomePage;
  return getPageBySlug(aliases[slug[0]] ?? slug[0]);
}

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["home"] },
    ...publicPages.filter((page) => page.slug && page.slug !== "contacts").map((page) => ({ slug: [page.slug] })),
    ...Object.keys(aliases).map((slug) => ({ slug: [slug] })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) return {};
  const duplicateCanonical = slug?.[0] === "home"
    ? "/history/original-platform"
    : slug?.[0] === "history"
      ? "/history"
      : null;
  const path = duplicateCanonical ?? `/history/original-platform${slug?.length ? `/${slug[0]}` : ""}`;
  const title = page.slug ? `${page.navTitle} | Original Bear Grid Platform` : "Original Bear Grid Platform";
  return {
    title,
    description: page.description,
    alternates: { canonical: path },
    robots: duplicateCanonical ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: "Bear Grid",
      title,
      description: page.description,
      url: new URL(path, baseUrl).toString(),
      images: [page.heroImage ?? "/og.png"],
    },
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
      <aside className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-b border-neutral-300 bg-neutral-100 px-5 py-3 text-center text-sm" aria-label="Current Bear Grid website">
        <p className="m-0">You are viewing the archived original Bear Grid platform.</p>
        <Link className="font-bold underline underline-offset-4" href="/">Visit the current Bear Grid website</Link>
      </aside>
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
