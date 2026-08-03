import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl } from "@/data/site";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "Cookie Policy | Bear Grid",
  description: "Information about cookies and local storage used on the Bear Grid website.",
  alternates: localizedAlternatesFor("en", "/cookies"),
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "en_US",
    alternateLocale: "nl_NL",
    title: "Cookie Policy | Bear Grid",
    description: "Information about cookies and local storage used on the Bear Grid website.",
    url: `${baseUrl}/cookies`,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Bear Grid",
    description: "Information about cookies and local storage used on the Bear Grid website.",
    images: ["/og.png"],
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="policy-page">
      <p className="company-eyebrow">COOKIES</p>
      <h1>Cookie policy</h1>
      <p className="policy-lead">This policy explains how Bear Grid uses cookies and similar browser storage on this website.</p>
      <section><h2>What we use</h2><p>Essential storage may be used to remember your cookie preference, maintain security and support functions you explicitly request, such as submitting a form.</p></section>
      <section><h2>Optional cookies</h2><p>Analytics, measurement or marketing technologies are not activated unless you give consent. Where optional tools are introduced, this policy will identify their provider, purpose, data involved and retention period.</p></section>
      <section><h2>Your choice</h2><p>You can accept optional cookies or continue with essential storage only. Refusing optional cookies does not prevent access to the website. You can reopen Cookie settings from the bottom of any modern site page and change your preference.</p></section>
      <section><h2>Current browser storage</h2><p>The key <code>bear-grid-cookie-consent</code> stores whether you selected essential storage only or accepted optional cookies. It is first-party local storage and remains until you clear browser data or change the preference.</p></section>
      <section><h2>Third-party services</h2><p>Following an external link, including WhatsApp or an ecosystem organisation website, takes you to a third party with its own cookie and privacy practices.</p></section>
      <section><h2>More information</h2><p>See our <Link href="/privacy">Privacy Policy</Link> or submit a question through the <Link href="/contact">contact page</Link>.</p></section>
      <p className="policy-updated">Last updated: 3 August 2026.</p>
    </main>
  );
}
