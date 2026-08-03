import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Eyebrow } from "@/components/CompanyPagesNl";
import { baseUrl } from "@/data/site";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "Contact | Bear Grid",
  description: "Vertel Bear Grid welk bedrijfs- of technologievraagstuk u wilt oplossen.",
  alternates: localizedAlternatesFor("nl", "/contact"),
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "nl_NL",
    alternateLocale: "en_US",
    title: "Contact opnemen met Bear Grid",
    description: "Vertel Bear Grid welk bedrijfs- of technologievraagstuk u wilt oplossen.",
    url: `https://beargridsolutions.com/nl/contact`,
    images: ["/brand-assets/og-contact-nl.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact opnemen met Bear Grid",
    description: "Vertel Bear Grid welk bedrijfs- of technologievraagstuk u wilt oplossen.",
    images: ["/brand-assets/twitter-default-nl.png"],
  },
};

const allowedServices = [
  "Technologiebeoordeling",
  "R&D-strategie",
  "Validatie van nieuwe ondernemingen",
  "Innovatiepartnerschappen",
  "Strategie & complexe vraagstukken",
  "Verkoopsystemen",
  "AI-automatisering",
  "Digitale producten & websites",
  "Advies aan directie en bestuur",
  "Samenstellen van ventureteams",
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[]; intent?: string | string[] }>;
}) {
  const query = await searchParams;
  const requestedService = typeof query.service === "string" ? query.service : "";
  const initialNeed = allowedServices.includes(requestedService)
    ? requestedService
    : query.intent === "investor"
      ? "Advies aan directie en bestuur"
      : "";

  return (
    <main className="company-main inner-company-page contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl + "/nl" },
          { "@type": "ListItem", position: 2, name: "Contact", item: baseUrl + "/nl/contact" },
        ],
        inLanguage: "nl-NL",
      }).replace(/</g, "\\u003c") }} />
      <section className="contact-layout">
        <div className="contact-intro">
          <Eyebrow>NEEM CONTACT OP</Eyebrow>
          <h1>Waarmee kunnen we u helpen?</h1>
          <p>Geef ons de korte versie. We beoordelen uw aanvraag en reageren binnen twee werkdagen.</p>
        </div>
        <ContactForm initialNeed={initialNeed} locale="nl" />
      </section>
    </main>
  );
}
