import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookiebeleid | Bear Grid",
  description: "Informatie over cookies en lokale opslag die op de website van Bear Grid worden gebruikt.",
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "nl_NL",
    title: "Cookiebeleid | Bear Grid",
    description: "Informatie over cookies en lokale opslag die op de website van Bear Grid worden gebruikt.",
    url: `${baseUrl}/cookie-policy`,
    images: ["/brand-assets/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookiebeleid | Bear Grid",
    description: "Informatie over cookies en lokale opslag die op de website van Bear Grid worden gebruikt.",
    images: ["/brand-assets/twitter-default.png"],
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="policy-page">
      <p className="company-eyebrow">COOKIES</p>
      <h1>Cookiebeleid</h1>
      <p className="policy-lead">Dit beleid legt uit hoe Bear Grid op deze website cookies en vergelijkbare browseropslag gebruikt.</p>
      <section><h2>Wat we gebruiken</h2><p>Essentiële opslag kan worden gebruikt om uw cookievoorkeur te onthouden, de beveiliging in stand te houden en functies te ondersteunen die u uitdrukkelijk aanvraagt, zoals het versturen van een formulier.</p></section>
      <section><h2>Optionele cookies</h2><p>Technologie voor analyse, meting of marketing wordt alleen geactiveerd als u toestemming geeft. Als we optionele hulpmiddelen introduceren, vermeldt dit beleid de aanbieder, het doel, de betrokken gegevens en de bewaartermijn.</p></section>
      <section><h2>Uw keuze</h2><p>U kunt optionele cookies accepteren of alleen essentiële opslag gebruiken. Het weigeren van optionele cookies beperkt de toegang tot de website niet. Onderaan elke moderne pagina kunt u de cookie-instellingen opnieuw openen en uw voorkeur wijzigen.</p></section>
      <section><h2>Huidige browseropslag</h2><p>De sleutel <code>bear-grid-cookie-consent</code> bewaart of u alleen essentiële opslag hebt gekozen of optionele cookies hebt geaccepteerd. Dit is lokale opslag van Bear Grid en blijft bestaan totdat u browsergegevens wist of uw voorkeur wijzigt.</p></section>
      <section><h2>Diensten van derden</h2><p>Als u een externe link volgt, bijvoorbeeld naar WhatsApp of een organisatie uit het ecosysteem, gaat u naar een derde partij met een eigen cookie- en privacybeleid.</p></section>
      <section><h2>Meer informatie</h2><p>Lees onze <Link href="/privacy-policy">privacyverklaring</Link> of stel uw vraag via de <Link href="/contact">contactpagina</Link>.</p></section>
      <p className="policy-updated">Laatst bijgewerkt: 3 augustus 2026.</p>
    </main>
  );
}
