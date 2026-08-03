import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, rAndDServices, ServiceGrid, services } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "R&D Consultancy Services | Bear Grid",
  description:
    "Independent technology assessment, R&D strategy, venture validation and innovation partnership support for founders, companies, investors and institutions.",
  alternates: localizedAlternatesFor("en", "/expertise"),
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "en_US",
    alternateLocale: "nl_NL",
    title: "R&D Consultancy Services | Bear Grid",
    description:
      "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.",
    url: `${baseUrl}/expertise`,
    images: ["/brand/og-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "R&D Consultancy Services | Bear Grid",
    description:
      "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.",
    images: ["/brand/og-logo.png"],
  },
};

export default function ExpertisePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [...rAndDServices, ...services].map((service) => ({
      "@type": "Service",
      "@id": `${baseUrl}/expertise#service-${service.number}-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
      name: service.title,
      description: service.body,
      url: `${baseUrl}/expertise`,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: "Worldwide",
      inLanguage: "en",
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
        inLanguage: "en",
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
      <section className="company-section" aria-labelledby="rd-services-title">
        <div className="section-heading">
          <Eyebrow>WHAT THE CORE R&amp;D SERVICES MEAN</Eyebrow>
          <h2 id="rd-services-title">Independent evidence for the next decision.</h2>
        </div>
        <div className="service-grid">
          {rAndDServices.map((service) => (
            <article key={service.title}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <Link className="service-cta" href={`/contact?service=${encodeURIComponent(service.title)}`}>
                Discuss this decision <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="company-section" aria-label="Bear Grid consultancy services">
        <div className="section-heading">
          <Eyebrow>HANDS-ON DELIVERY CAPABILITIES</Eyebrow>
          <h2>From decision support to a working result.</h2>
        </div>
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
