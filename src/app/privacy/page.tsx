import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl } from "@/data/site";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "Privacy Policy | Bear Grid",
  description: "How Bear Grid handles personal data under the GDPR and Dutch privacy law.",
  alternates: localizedAlternatesFor("en", "/privacy"),
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "en_US",
    alternateLocale: "nl_NL",
    title: "Privacy Policy | Bear Grid",
    description: "How Bear Grid handles personal data under the GDPR and Dutch privacy law.",
    url: `${baseUrl}/privacy`,
    images: ["/brand/og-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Bear Grid",
    description: "How Bear Grid handles personal data under the GDPR and Dutch privacy law.",
    images: ["/brand/og-logo.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="policy-page">
      <p className="company-eyebrow">PRIVACY</p>
      <h1>Privacy policy</h1>
      <p className="policy-lead">Bear Grid is based in the Netherlands and processes personal data in accordance with the General Data Protection Regulation and applicable Dutch law.</p>
      <section><h2>Who is responsible</h2><p>Bear Grid is the controller for personal data collected through this website. Privacy questions and rights requests can be submitted through our <Link href="/contact">contact page</Link>.</p></section>
      <section><h2>Data we may collect</h2><p>We may process information you submit through forms or direct communications, including your name, contact details, organisation, message and project information. Technical logs may include IP address, browser, device, requested pages, timestamps and security events.</p></section>
      <section><h2>Why we process data</h2><p>We process data to respond to enquiries, discuss and deliver services, administer business relationships, operate and secure the website, comply with legal obligations and, where applicable, pursue legitimate business interests. Optional analytics or marketing technologies are used only after valid consent.</p></section>
      <section><h2>Legal bases</h2><p>Depending on the context, processing is based on steps requested before entering a contract, performance of a contract, legal obligations, legitimate interests such as website security and business administration, or your consent.</p></section>
      <section><h2>Sharing and international transfers</h2><p>Data may be handled by service providers supporting hosting, email, forms, security and professional operations. They receive only the access needed for their role. Where data is transferred outside the European Economic Area, we use an appropriate legal safeguard where required.</p></section>
      <section><h2>Retention</h2><p>We retain personal data only as long as needed for the purpose for which it was collected, to maintain appropriate business records, resolve disputes and meet legal obligations. Retention periods vary by the nature of the relationship and data.</p></section>
      <section><h2>Your rights</h2><p>Subject to legal conditions, you may request access, correction, deletion, restriction, portability or objection, and may withdraw consent at any time without affecting earlier lawful processing. You may also lodge a complaint with the Dutch Data Protection Authority.</p></section>
      <section><h2>Security</h2><p>We use reasonable technical and organisational measures to protect personal data. No internet service can guarantee absolute security.</p></section>
      <section><h2>Changes</h2><p>We may update this policy when our services, suppliers or legal obligations change. The current version is published on this page.</p></section>
      <p className="policy-updated">Last updated: 3 August 2026.</p>
    </main>
  );
}
