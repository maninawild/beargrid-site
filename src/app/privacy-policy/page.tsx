import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacyverklaring | Bear Grid",
  description: "Hoe Bear Grid persoonsgegevens verwerkt volgens de AVG en de Nederlandse privacywetgeving.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "nl_NL",
    title: "Privacyverklaring | Bear Grid",
    description: "Hoe Bear Grid persoonsgegevens verwerkt volgens de AVG en de Nederlandse privacywetgeving.",
    url: `${baseUrl}/privacy-policy`,
    images: ["/brand-assets/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacyverklaring | Bear Grid",
    description: "Hoe Bear Grid persoonsgegevens verwerkt volgens de AVG en de Nederlandse privacywetgeving.",
    images: ["/brand-assets/twitter-default.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="policy-page">
      <p className="company-eyebrow">PRIVACY</p>
      <h1>Privacyverklaring</h1>
      <p className="policy-lead">Bear Grid is gevestigd in Nederland en verwerkt persoonsgegevens volgens de Algemene verordening gegevensbescherming (AVG) en de toepasselijke Nederlandse wetgeving.</p>
      <section><h2>Wie is verantwoordelijk?</h2><p>Bear Grid is de verwerkingsverantwoordelijke voor persoonsgegevens die via deze website worden verzameld. Vragen over privacy en verzoeken over uw rechten kunt u indienen via onze <Link href="/contact">contactpagina</Link>.</p></section>
      <section><h2>Gegevens die we kunnen verzamelen</h2><p>We kunnen informatie verwerken die u via formulieren of rechtstreekse communicatie verstrekt, waaronder uw naam, contactgegevens, organisatie, bericht en projectinformatie. Technische logbestanden kunnen het IP-adres, de browser, het apparaat, opgevraagde pagina&apos;s, tijdstippen en beveiligingsgebeurtenissen bevatten.</p></section>
      <section><h2>Waarom we gegevens verwerken</h2><p>We verwerken gegevens om aanvragen te beantwoorden, diensten te bespreken en te leveren, zakelijke relaties te beheren, de website te gebruiken en te beveiligen, wettelijke verplichtingen na te komen en waar van toepassing gerechtvaardigde bedrijfsbelangen te behartigen. Optionele analyse- of marketingtechnologie wordt alleen gebruikt na geldige toestemming.</p></section>
      <section><h2>Rechtsgronden</h2><p>Afhankelijk van de situatie is de verwerking gebaseerd op stappen die u vóór het sluiten van een overeenkomst aanvraagt, de uitvoering van een overeenkomst, wettelijke verplichtingen, gerechtvaardigde belangen zoals websitebeveiliging en bedrijfsvoering, of uw toestemming.</p></section>
      <section><h2>Delen en internationale doorgifte</h2><p>Gegevens kunnen worden verwerkt door dienstverleners die hosting, e-mail, formulieren, beveiliging en professionele werkzaamheden ondersteunen. Zij krijgen alleen de toegang die voor hun rol nodig is. Als gegevens buiten de Europese Economische Ruimte worden doorgegeven, gebruiken we waar nodig een passende juridische waarborg.</p></section>
      <section><h2>Bewaartermijnen</h2><p>We bewaren persoonsgegevens alleen zolang dat nodig is voor het doel waarvoor ze zijn verzameld, voor een passende bedrijfsadministratie, om geschillen op te lossen en om aan wettelijke verplichtingen te voldoen. De bewaartermijn hangt af van de relatie en het soort gegevens.</p></section>
      <section><h2>Uw rechten</h2><p>Onder de wettelijke voorwaarden kunt u vragen om inzage, correctie, verwijdering, beperking of overdraagbaarheid van uw gegevens, of bezwaar maken. U kunt toestemming altijd intrekken zonder dat dit invloed heeft op eerdere rechtmatige verwerking. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.</p></section>
      <section><h2>Beveiliging</h2><p>We gebruiken redelijke technische en organisatorische maatregelen om persoonsgegevens te beschermen. Geen enkele internetdienst kan absolute beveiliging garanderen.</p></section>
      <section><h2>Wijzigingen</h2><p>We kunnen deze verklaring aanpassen wanneer onze diensten, leveranciers of wettelijke verplichtingen veranderen. De actuele versie staat op deze pagina.</p></section>
      <p className="policy-updated">Laatst bijgewerkt: 3 augustus 2026.</p>
    </main>
  );
}
