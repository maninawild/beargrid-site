import type { Metadata } from "next";
import { CompanyHome, services } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Independent R&D Consultancy | Bear Grid",
  description: "Bear Grid helps founders, R&D teams, investors and institutions assess complex technology, validate ventures and structure innovation programmes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    title: "Independent R&D Consultancy | Bear Grid",
    description: "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.",
    url: baseUrl,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Independent R&D Consultancy | Bear Grid",
    description: "Independent technology assessment, R&D strategy, venture validation and innovation partnership support.",
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#service`,
        name: "Bear Grid",
        url: baseUrl,
        provider: { "@id": `${baseUrl}/#organization` },
        areaServed: "Worldwide",
        serviceType: ["Technology assessment", "R&D strategy", "Venture validation", "Innovation partnerships"],
        description: "Independent R&D consultancy for founders, companies, investors and institutions.",
      }).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": services.map((service) => ({
          "@type": "Service",
          name: service.title,
          description: service.body,
          provider: { "@type": "Organization", name: "Bear Grid", url: baseUrl },
          areaServed: "Worldwide",
        })),
      }).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          ["When should we involve Bear Grid?", "When a technical or venture decision carries meaningful cost, uncertainty or coordination risk and needs an independent, evidence-led assessment."],
          ["What does an initial engagement look like?", "Most work starts with a tightly scoped assessment: a defined question, targeted review, direct working sessions and a practical recommendation."],
          ["Does Bear Grid build products?", "Bear Grid can support product and venture execution, but begins by validating what should be built, why it matters and which risks must be resolved first."],
        ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
      }).replace(/</g, "\\u003c") }} />
      <CompanyHome />
    </>
  );
}
