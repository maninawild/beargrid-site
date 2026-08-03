import type { Metadata } from "next";
import { CompanyHome, rAndDServices, services } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Onafhankelijk R&D-adviesbureau in Nederland | Bear Grid",
  description: "Bear Grid is een in Nederland gevestigd onafhankelijk R&D-adviesbureau voor technologiebeoordeling, R&D-strategie, validatie en innovatiepartnerschappen.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "nl_NL",
    title: "Onafhankelijk R&D-adviesbureau in Nederland | Bear Grid",
    description: "Technologiebeoordeling, R&D-strategie, validatie van nieuwe ondernemingen en innovatiepartnerschappen voor oprichters, teams en investeerders.",
    url: baseUrl,
    images: ["/brand-assets/og-home.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onafhankelijk R&D-adviesbureau in Nederland | Bear Grid",
    description: "Technologiebeoordeling, R&D-strategie, validatie van nieuwe ondernemingen en innovatiepartnerschappen voor oprichters, teams en investeerders.",
    images: ["/brand-assets/twitter-default.png"],
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [...rAndDServices, ...services].map((service) => ({
          "@type": "Service",
          "@id": `${baseUrl}/expertise#service-${service.number}-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
          name: service.title,
          description: service.body,
          url: `${baseUrl}/expertise`,
          provider: { "@id": `${baseUrl}/#organization` },
          areaServed: "Wereldwijd",
          inLanguage: "nl-NL",
        })),
      }).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          ["Waarvoor kunt u Bear Grid inschakelen?", "Voor een afgebakend vraagstuk, een volledig ontwikkeltraject of praktische ondersteuning van een managementteam. Veelvoorkomend werk omvat strategie, verkoopsystemen, automatisering, websites, platforms en de uitvoering van nieuwe ondernemingen."],
          ["Geeft Bear Grid alleen advies?", "Nee. We adviseren wanneer er een besluit nodig is en bouwen wanneer het antwoord een werkend systeem, product of proces moet worden."],
          ["Hoe start een project?", "Stuur een korte aanvraag. We beoordelen die, stellen waar nodig aanvullende vragen en doen een voorstel voor een duidelijke eerste opdracht. Als we niet de juiste partij zijn, zeggen we dat."],
        ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
        inLanguage: "nl-NL",
      }).replace(/</g, "\\u003c") }} />
      <CompanyHome />
    </>
  );
}
