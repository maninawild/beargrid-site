import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Legal Notice | Bear Grid",
  description: "Legal terms, disclaimers and limitations applying to the Bear Grid website.",
  alternates: { canonical: "/legal" },
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    title: "Legal Notice | Bear Grid",
    description: "Legal terms, disclaimers and limitations applying to the Bear Grid website.",
    url: `${baseUrl}/legal`,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice | Bear Grid",
    description: "Legal terms, disclaimers and limitations applying to the Bear Grid website.",
    images: ["/og.png"],
  },
};

export default function LegalPage() {
  return (
    <main className="policy-page">
      <p className="company-eyebrow">LEGAL</p>
      <h1>Legal notice</h1>
      <p className="policy-lead">This website provides general information about Bear Grid, its services and its history. It does not constitute legal, financial, investment, technical or professional advice.</p>
      <section><h2>No reliance</h2><p>Information is provided in good faith and may be updated without notice. Before making a decision, obtain advice appropriate to your circumstances and verify any information that is material to you.</p></section>
      <section><h2>No warranty</h2><p>We aim to keep the website accurate and available, but do not guarantee that content is complete, current, error-free or uninterrupted. Archived product pages describe historical concepts and prototypes and are not current product offers.</p></section>
      <section><h2>Liability</h2><p>To the extent permitted by applicable law, Bear Grid is not liable for indirect, incidental or consequential loss arising from use of this website, reliance on its content or use of third-party links.</p></section>
      <section><h2>Intellectual property</h2><p>Website content, branding, text, graphics and original materials are protected by applicable intellectual-property laws. Third-party names and logos remain the property of their respective owners and are shown only to identify ecosystem or historical relationships.</p></section>
      <section><h2>External links</h2><p>Links to external websites are provided for convenience. Bear Grid does not control or endorse third-party content, availability, privacy practices or security.</p></section>
      <section><h2>Governing law</h2><p>This website and these terms are governed by the laws of the Netherlands. Mandatory consumer protections and jurisdiction rules remain unaffected.</p></section>
      <section><h2>Contact</h2><p>Questions about this notice can be submitted through the <Link href="/contact">contact page</Link>.</p></section>
      <p className="policy-updated">Last updated: 3 August 2026.</p>
    </main>
  );
}
