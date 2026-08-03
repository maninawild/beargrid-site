import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/CompanyPagesNl";
import { baseUrl } from "@/data/site";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "Geschiedenis van Bear Grid | Bear Grid",
  description: "Hoe Bear Grid zich ontwikkelde van een deeptech-start-up voor sensortechnologie tot een in Nederland gevestigd onafhankelijk R&D-adviesbureau.",
  alternates: localizedAlternatesFor("nl", "/history"),
  openGraph: {
    type: "article",
    siteName: "Bear Grid",
    locale: "nl_NL",
    alternateLocale: "en_US",
    title: "Geschiedenis van Bear Grid | Bear Grid",
    description: "Van deeptech-start-up tot onafhankelijk R&D-adviesbureau.",
    url: `https://beargridsolutions.com/nl/history`,
    images: ["/brand-assets/og-history-nl.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geschiedenis van Bear Grid | Bear Grid",
    description: "Van deeptech-start-up tot onafhankelijk R&D-adviesbureau.",
    images: ["/brand-assets/twitter-default-nl.png"],
  },
};

export default function HistoryPage() {
  return (
    <main className="company-main history-page-new">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl + "/nl" },
          { "@type": "ListItem", position: 2, name: "Geschiedenis", item: baseUrl + "/nl/history" },
        ],
        inLanguage: "nl-NL",
      }).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `/nl/history#about`,
        name: "Geschiedenis van Bear Grid",
        url: baseUrl + "/nl/history",
        description: metadata.description,
        about: { "@id": `${baseUrl}/#organization` },
        inLanguage: "nl-NL",
      }).replace(/</g, "\\u003c") }} />
      <section className="inner-company-hero">
        <Eyebrow>GESCHIEDENIS VAN HET BEDRIJF</Eyebrow>
        <h1>GESCHIEDENIS</h1>
        <p>Bear Grid is een in Nederland gevestigd onafhankelijk R&amp;D-adviesbureau, opgericht in 2019. Het bedrijf ontwikkelde zich van een deeptech-start-up voor sensortechnologie tot een organisatie die technologie- en ondernemingsbeslissingen ondersteunt.</p>
      </section>
      <section className="history-story" aria-label="Tijdlijn van Bear Grid">
        <ol className="history-timeline">
          <li>
            <time dateTime="2019">2019</time>
            <p>
              Bear Grid werd in 2019 in Israël opgericht als technologie-start-up voor slimme
              microseismische sensoren in beveiligingssystemen. Bekijk het{" "}
              <Link href="/history/original-platform">oorspronkelijke Bear Grid-platform</Link>.
            </p>
          </li>
          <li>
            <time dateTime="2020">2020</time>
            <p>
              In 2020 overwogen de oprichters Canada, Nederland, Denemarken en het Verenigd
              Koninkrijk als toekomstige vestigingsplaats. De keuze viel op Nederland. Bear Grid
              bouwde vanaf 2021 de Nederlandse activiteiten op, gevolgd door de verhuizing van
              de oprichters en het verdere start-uptraject in Nederland in 2022.
            </p>
          </li>
          <li>
            <time dateTime="2021">2021—2022</time>
            <p>
              Met ondersteuning van de{" "}
              <a href="https://yesdelft.com/" rel="noreferrer" target="_blank">
                YES!Delft-accelerator
              </a>
              {" "}bouwde de start-up een unieke database met voetstappatronen op en ontwikkelde het{" "}
              <Link href="/history/original-platform/bear-device">Bear Grid Device</Link>.
            </p>
          </li>
          <li>
            <time dateTime="2023">2023—HEDEN</time>
            <p>
              De oorspronkelijke start-up bereikte in 2023 geen product-market fit. Sinds 2024 is
              Bear Grid een Nederlandse holding- en dienstverleningsmaatschappij, gericht op
              innovatieadvies, beoordeling van start-ups, business development en praktische
              ondersteuning van oprichters bij het opbouwen van ondernemingen.
            </p>
          </li>
        </ol>
      </section>
      <section className="history-actions">
        <div>
          <Eyebrow>BEWAARD ARCHIEF</Eyebrow>
          <h2>Het oorspronkelijke Bear Grid-platform blijft volledig beschikbaar.</h2>
          <Link className="company-button" href="/history/original-platform">Bekijk het oorspronkelijke platform</Link>
        </div>
        <div>
          <Eyebrow>HUIDIGE BEDRIJF</Eyebrow>
          <h2>Moet u een technisch of ondernemingsbesluit nemen?</h2>
          <Link className="company-button dark" href="/nl/contact?intent=project">Bespreek uw project</Link>
        </div>
      </section>
    </main>
  );
}
