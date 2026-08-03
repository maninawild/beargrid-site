import type { Metadata } from "next";
import Link from "next/link";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "Juridische informatie | Bear Grid",
  description: "Juridische voorwaarden, disclaimers en beperkingen die gelden voor de website van Bear Grid.",
  alternates: localizedAlternatesFor("nl", "/legal"),
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "nl_NL",
    alternateLocale: "en_US",
    title: "Juridische informatie | Bear Grid",
    description: "Juridische voorwaarden, disclaimers en beperkingen die gelden voor de website van Bear Grid.",
    url: `https://beargridsolutions.com/nl/legal`,
    images: ["/brand/og-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juridische informatie | Bear Grid",
    description: "Juridische voorwaarden, disclaimers en beperkingen die gelden voor de website van Bear Grid.",
    images: ["/brand/og-logo.png"],
  },
};

export default function LegalPage() {
  return (
    <main className="policy-page">
      <p className="company-eyebrow">JURIDISCH</p>
      <h1>Juridische informatie</h1>
      <p className="policy-lead">Deze website geeft algemene informatie over Bear Grid, zijn diensten en geschiedenis. De inhoud is geen juridisch, financieel, beleggings-, technisch of ander professioneel advies.</p>
      <section><h2>Geen grond voor besluitvorming</h2><p>De informatie wordt te goeder trouw verstrekt en kan zonder voorafgaande kennisgeving worden bijgewerkt. Vraag vóór een besluit advies dat past bij uw situatie en controleer informatie die voor u van belang is.</p></section>
      <section><h2>Geen garantie</h2><p>We streven naar een juiste en beschikbare website, maar garanderen niet dat de inhoud volledig, actueel, foutloos of ononderbroken beschikbaar is. Gearchiveerde productpagina&apos;s beschrijven historische concepten en prototypes en zijn geen huidig productaanbod.</p></section>
      <section><h2>Aansprakelijkheid</h2><p>Voor zover wettelijk toegestaan is Bear Grid niet aansprakelijk voor indirecte, incidentele of gevolgschade door het gebruik van deze website, het vertrouwen op de inhoud of het gebruik van links van derden.</p></section>
      <section><h2>Intellectueel eigendom</h2><p>De inhoud, huisstijl, teksten, afbeeldingen en oorspronkelijke materialen op deze website worden beschermd door toepasselijke wetgeving voor intellectueel eigendom. Namen en logo&apos;s van derden blijven eigendom van hun respectieve rechthebbenden en worden uitsluitend getoond om relaties binnen het ecosysteem of uit het verleden te identificeren.</p></section>
      <section><h2>Externe links</h2><p>Links naar externe websites worden voor uw gemak aangeboden. Bear Grid heeft geen controle over en geeft geen goedkeuring aan de inhoud, beschikbaarheid, privacypraktijken of beveiliging van derden.</p></section>
      <section><h2>Toepasselijk recht</h2><p>Op deze website en deze voorwaarden is Nederlands recht van toepassing. Dwingende regels voor consumentenbescherming en bevoegde rechtspraak blijven onverminderd gelden.</p></section>
      <section><h2>Contact</h2><p>Vragen over deze informatie kunt u indienen via de <Link href="/nl/contact">contactpagina</Link>.</p></section>
      <p className="policy-updated">Laatst bijgewerkt: 3 augustus 2026.</p>
    </main>
  );
}
