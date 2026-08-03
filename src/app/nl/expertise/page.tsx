import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, rAndDServices, ServiceGrid, services } from "@/components/CompanyPagesNl";
import { baseUrl } from "@/data/site";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "R&D-advies en technologiebeoordeling | Bear Grid",
  description:
    "Onafhankelijke technologiebeoordeling, R&D-strategie, validatie van nieuwe ondernemingen en innovatiepartnerschappen voor oprichters, bedrijven, investeerders en instellingen.",
  alternates: localizedAlternatesFor("nl", "/expertise"),
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "nl_NL",
    alternateLocale: "en_US",
    title: "R&D-advies en technologiebeoordeling | Bear Grid",
    description:
      "Onafhankelijke technologiebeoordeling, R&D-strategie, validatie van nieuwe ondernemingen en innovatiepartnerschappen.",
    url: `https://beargridsolutions.com/nl/expertise`,
    images: ["/brand/og-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "R&D-advies en technologiebeoordeling | Bear Grid",
    description:
      "Onafhankelijke technologiebeoordeling, R&D-strategie, validatie van nieuwe ondernemingen en innovatiepartnerschappen.",
    images: ["/brand/og-logo.png"],
  },
};

export default function ExpertisePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [...rAndDServices, ...services].map((service) => ({
      "@type": "Service",
      "@id": `/nl/expertise#service-${service.number}-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
      name: service.title,
      description: service.body,
      url: baseUrl + "/nl/expertise",
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: "Wereldwijd",
      inLanguage: "nl-NL",
    })),
  };

  return (
    <main className="company-main inner-company-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl + "/nl" },
          { "@type": "ListItem", position: 2, name: "Expertise", item: baseUrl + "/nl/expertise" },
        ],
        inLanguage: "nl-NL",
      }).replace(/</g, "\\u003c") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="inner-company-hero">
        <Eyebrow>EXPERTISE / ONAFHANKELIJK R&amp;D-ADVIESBUREAU</Eyebrow>
        <h1>Technologiebeoordeling, R&amp;D-strategie en validatie van nieuwe ondernemingen.</h1>
        <p>
          Bear Grid helpt oprichters, bedrijven, investeerders en instellingen om
          duidelijkheid te krijgen over technische haalbaarheid, productrichting,
          uitvoeringsrisico&apos;s en partnerschappen voordat zij veel tijd of kapitaal inzetten.
        </p>
      </section>
      <section className="company-section" aria-labelledby="rd-services-title">
        <div className="section-heading">
          <Eyebrow>WAT ONZE R&amp;D-KERNDIENSTEN INHOUDEN</Eyebrow>
          <h2 id="rd-services-title">Onafhankelijk bewijs voor het volgende besluit.</h2>
        </div>
        <div className="service-grid">
          {rAndDServices.map((service) => (
            <article key={service.title}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <Link className="service-cta" href={`/nl/contact?service=${encodeURIComponent(service.title)}`}>
                Bespreek dit besluit <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="company-section" aria-label="Adviesdiensten van Bear Grid">
        <div className="section-heading">
          <Eyebrow>PRAKTISCHE UITVOERINGSKRACHT</Eyebrow>
          <h2>Van besluitvorming naar een werkend resultaat.</h2>
        </div>
        <ServiceGrid />
      </section>
      <section className="services-method">
        <Eyebrow>ONZE WERKWIJZE</Eyebrow>
        <div>
          <h2>Begin bij het besluit, niet bij het eindproduct.</h2>
          <p>
            We formuleren de vraag, bepalen welk bewijs nodig is en maken een
            gerichte route van onzekerheid naar actie. Een opdracht kan één
            cruciaal besluit ondersteunen of een breder R&amp;D- en ondernemingstraject.
          </p>
          <Link className="company-button dark" href="/nl/contact?intent=project">
            Bespreek uw project
          </Link>
        </div>
      </section>
    </main>
  );
}
