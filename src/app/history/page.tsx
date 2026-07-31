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
        <h1>HISTORY</h1>
        <p>From sensing technology to founder support.</p>
      </section>
      <section className="history-copy">
        <p>
          Bear Grid was founded in Israel in 2019 as a technology startup developing smart
          microseismic sensors for security systems. Explore the{" "}
          <Link href="/history/original-platform">Original Bear Grid Platform</Link>.
        </p>
        <p>
          In 2020, the founders considered Canada, the Netherlands, Denmark and the United
          Kingdom as the company&apos;s future base. The Netherlands was selected. Bear Grid
          began building its Dutch operations in 2021, followed by the founders&apos; relocation
          and startup trajectory in the Netherlands in 2022.
        </p>
        <p>
          With support from the{" "}
          <a href="https://yesdelft.com/" rel="noreferrer" target="_blank">
            YES!Delft accelerator
          </a>
          , the startup assembled a unique database of footstep patterns and developed the{" "}
          <Link href="/history/original-platform/bear-device">Bear Grid Device</Link>.
        </p>
        <p>
          The original startup did not reach product-market fit in 2023. Since 2024, Bear Grid
          has evolved into a Dutch holding and services company focused on innovation consulting,
          startup assessment, business development and practical venture-building support for
          founders.
        </p>
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
