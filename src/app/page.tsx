import type { Metadata } from "next";
import { CompanyHome, services } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Engineering & Business Consultancy | Bear Grid",
  description: "Bear Grid solves difficult business and technology problems for SMEs, technology companies, industrial teams, scale-ups and investors.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    title: "Engineering & Business Consultancy | Bear Grid",
    description: "Strategy, sales systems, AI automation, digital products, executive advice and venture teams.",
    url: baseUrl,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Business Consultancy | Bear Grid",
    description: "Strategy, sales systems, AI automation, digital products, executive advice and venture teams.",
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
        serviceType: services.map((service) => service.title),
        description: "Independent engineering and business consultancy for companies, founders and investors.",
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
          ["What can Bear Grid take on?", "A defined problem, a complete build or hands-on support to a leadership team. Typical work covers strategy, sales systems, automation, websites, platforms and venture execution."],
          ["Do you only advise?", "No. We advise when a decision needs to be made and build when the answer needs to become a working system, product or process."],
          ["How does a project start?", "Send a short enquiry. We review it, ask any necessary questions and propose a clear first piece of work. If we are not the right fit, we will say so."],
        ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
      }).replace(/</g, "\\u003c") }} />
      <CompanyHome />
    </>
  );
}
