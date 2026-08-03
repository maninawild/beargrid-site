import type { Metadata } from "next";
import { CompanyHome, rAndDServices, services } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "Independent R&D Consultancy Netherlands | Bear Grid",
  description: "Bear Grid is a Netherlands-based independent R&D consultancy for technology assessment, R&D strategy, venture validation and innovation partnerships.",
  alternates: localizedAlternatesFor("en", ""),
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "en_US",
    alternateLocale: "nl_NL",
    title: "Independent R&D Consultancy Netherlands | Bear Grid",
    description: "Technology assessment, R&D strategy, venture validation and innovation partnership support for founders, teams and investors.",
    url: baseUrl,
    images: ["/brand/og-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Independent R&D Consultancy Netherlands | Bear Grid",
    description: "Technology assessment, R&D strategy, venture validation and innovation partnership support for founders, teams and investors.",
    images: ["/brand/og-logo.png"],
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
          areaServed: "Worldwide",
          inLanguage: "en",
        })),
      }).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          ["What can Bear Grid take on?", "A defined problem, a complete build or hands-on support to a leadership team. Typical work covers strategy, sales systems, automation, websites, platforms and venture execution."],
          ["Do you only advise?", "No. We advise when a decision needs to be made and build when the answer needs to become a working system, product or process."],
          ["How does a project start?", "Send a short enquiry. We review it, ask any necessary questions and propose a clear first piece of work. If we are not the right fit, we will say so."],
        ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
        inLanguage: "en",
      }).replace(/</g, "\\u003c") }} />
      <CompanyHome />
    </>
  );
}
