import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, ServiceGrid, services } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "R&D Consultancy Services | Bear Grid",
  description:
    "Independent technology assessment, R&D strategy, venture validation and innovation partnership support for founders, companies, investors and institutions.",
  alternates: { canonical: "/expertise" },
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    title: "R&D Consultancy Services | Bear Grid",
    description:
      "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.",
    url: `${baseUrl}/expertise`,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "R&D Consultancy Services | Bear Grid",
    description:
      "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.",
    images: ["/og.png"],
  },
};

export default function ExpertisePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.body,
      url: `${baseUrl}/expertise`,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: "Worldwide",
    })),
  };

  return (
    <main className="company-main inner-company-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Expertise", item: `${baseUrl}/expertise` },
        ],
      }).replace(/</g, "\\u003c") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="inner-company-hero">
        <Eyebrow>EXPERTISE / INDEPENDENT R&amp;D CONSULTANCY</Eyebrow>
        <h1>Technology assessment, R&amp;D strategy and venture validation.</h1>
        <p>
          Bear Grid helps founders, companies, investors and institutions resolve
          technical feasibility, product direction, delivery risk and partnership
          decisions before committing significant time or capital.
        </p>
      </section>
      <section className="company-section" aria-label="Bear Grid consultancy services">
        <h2 className="sr-only">Bear Grid consultancy services</h2>
        <ServiceGrid />
      </section>
      <section className="services-method">
        <Eyebrow>HOW WE WORK</Eyebrow>
        <div>
          <h2>Start with the decision, not the deliverable.</h2>
          <p>
            We define the question, identify the evidence required and build a
            focused path from uncertainty to action. An engagement can support one
            critical decision or a broader R&amp;D and venture programme.
          </p>
          <Link className="company-button dark" href="/contact?intent=project">
            Discuss your project
          </Link>
        </div>
      </section>
    </main>
  );
}
