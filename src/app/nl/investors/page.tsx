import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/CompanyPagesNl";
import { baseUrl } from "@/data/site";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "Technologie- en ondernemingsbeoordeling voor investeerders | Bear Grid",
  description:
    "Onafhankelijke technologie- en ondernemingsbeoordeling voor investeerders, plus toegang tot zorgvuldig geselecteerde R&D-ondernemingen.",
  alternates: localizedAlternatesFor("nl", "/investors"),
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "nl_NL",
    alternateLocale: "en_US",
    title: "Technologie- en ondernemingsbeoordeling voor investeerders | Bear Grid",
    description:
      "Onafhankelijke beoordeling van technische haalbaarheid, bewijs en uitvoeringsrisico voordat een investeerder kapitaal inzet.",
    url: `https://beargridsolutions.com/nl/investors`,
    images: ["/brand-assets/og-investors-nl.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologie- en ondernemingsbeoordeling voor investeerders | Bear Grid",
    description:
      "Onafhankelijke beoordeling van technische haalbaarheid, bewijs en uitvoeringsrisico voordat een investeerder kapitaal inzet.",
    images: ["/brand-assets/twitter-default-nl.png"],
  },
};

const investorTypes = [
  "Angel-investeerders",
  "Venturecapitalfondsen",
  "Family offices",
  "Private equity",
];

export default function InvestorsPage() {
  return (
    <main className="company-main inner-company-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl + "/nl" },
          { "@type": "ListItem", position: 2, name: "Investeerders", item: baseUrl + "/nl/investors" },
        ],
        inLanguage: "nl-NL",
      }).replace(/</g, "\\u003c") }} />
      <section className="inner-company-hero investor-hero">
        <Eyebrow>INVESTEERDERS / ONAFHANKELIJKE TECHNOLOGIE- EN ONDERNEMINGSBEOORDELING</Eyebrow>
        <h1>Beoordeel de technologie voordat u kapitaal inzet.</h1>
        <p>
          Bear Grid helpt investeerders om technische haalbaarheid, onderliggend
          bewijs, architectuur, uitvoeringsrisico&apos;s en afhankelijkheden binnen het team
          te onderzoeken vóór een investeringsbesluit. Het resultaat is een beknopte
          beoordeling van bevindingen, ontbrekend bewijs, materiële risico&apos;s en aanbevolen vervolgstappen.
        </p>
        <Link className="company-button dark" href="/nl/contact?intent=investor">
          Neem contact op
        </Link>
      </section>

      <section className="investor-body">
        <div>
          <Eyebrow>MET WIE WE SPREKEN</Eyebrow>
          <div className="audience-list">
            {investorTypes.map((type) => <span key={type}>{type}</span>)}
          </div>
        </div>
        <div>
          <h2>Onafhankelijke beoordeling, met duidelijke grenzen.</h2>
          <p>
            Technologie- en ondernemingsbeoordeling is zinvol wanneer een investering
            afhankelijk is van productclaims, een R&amp;D-roadmap of het vermogen van een
            team om te leveren. De scope wordt afgestemd op het besluit en het beschikbare bewijs.
          </p>
          <p>
            Gesprekken beginnen bij de strategische aansluiting. Bear Grid biedt
            geen effecten aan, belooft geen rendement en geeft geen beleggingsadvies.
          </p>
          <p>
            Bear Grid werkt ook met technologiebedrijven aan validatie en uitvoering
            en kan zorgvuldig geselecteerde kansen introduceren wanneer de expertise,
            het mandaat en de tijdshorizon van een investeerder aansluiten.
          </p>
          <Link className="text-link" href="/nl/contact?intent=investor">
            Neem contact op →
          </Link>
        </div>
      </section>
    </main>
  );
}
