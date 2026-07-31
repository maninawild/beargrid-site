import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Company History | Bear Grid",
  description: "How Bear Grid evolved from a deep-tech sensing startup into an independent Netherlands-based R&D consultancy.",
  alternates: { canonical: "/history" },
  openGraph: {
    title: "Company History | Bear Grid",
    description: "From deep-tech startup to independent R&D consultancy.",
    url: "/history",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company History | Bear Grid",
    description: "From deep-tech startup to independent R&D consultancy.",
    images: ["/og.png"],
  },
};

const timeline = [
  ["2019", "Bear Grid was founded as a deep-tech company developing AI-enabled seismic sensing and monitoring technology."],
  ["2021–2022", "The company joined the YES!Delft ecosystem, established its Dutch base and continued platform and venture validation."],
  ["2023", "The original startup concluded its product-market-fit work. Its technology, research and use cases remain preserved as a company archive."],
  ["Today", "Bear Grid operates as an independent Netherlands-based R&D consultancy supporting technology, venture and partnership decisions."],
];

export default function HistoryPage() {
  return (
    <main className="company-main history-page-new">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "History", item: `${baseUrl}/history` },
        ],
      }).replace(/</g, "\\u003c") }} />
      <section className="inner-company-hero">
        <Eyebrow>COMPANY HISTORY</Eyebrow>
        <h1>Built in deep tech.<br />Evolved through evidence.</h1>
        <p>Bear Grid’s current advisory work is grounded in first-hand experience building, testing and repositioning an ambitious technology venture.</p>
      </section>
      <section className="timeline-section">
        {timeline.map(([year, text]) => (
          <article key={year}>
            <time>{year}</time>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="history-actions">
        <div>
          <Eyebrow>PRESERVED ARCHIVE</Eyebrow>
          <h2>The original Bear Grid platform remains available in full.</h2>
          <Link className="company-button" href="/history/original-platform">Explore the original platform</Link>
        </div>
        <div>
          <Eyebrow>CURRENT COMPANY</Eyebrow>
          <h2>Have a technical or venture decision to make?</h2>
          <Link className="company-button dark" href="/contact?intent=project">Discuss your project</Link>
        </div>
      </section>
    </main>
  );
}
