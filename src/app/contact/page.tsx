import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Eyebrow } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Bear Grid",
  description: "Tell Bear Grid about the business or technology problem you need to solve.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    title: "Contact Bear Grid",
    description: "Tell Bear Grid about the business or technology problem you need to solve.",
    url: `${baseUrl}/contact`,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bear Grid",
    description: "Tell Bear Grid about the business or technology problem you need to solve.",
    images: ["/og.png"],
  },
};

const allowedServices = [
  "Strategy & Complex Problem Solving",
  "Sales Systems",
  "AI Automation",
  "Digital Products & Websites",
  "Executive Advisory",
  "Venture Team Assembly",
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[]; intent?: string | string[] }>;
}) {
  const query = await searchParams;
  const requestedService = typeof query.service === "string" ? query.service : "";
  const initialNeed = allowedServices.includes(requestedService)
    ? requestedService
    : query.intent === "investor"
      ? "Executive Advisory"
      : "";

  return (
    <main className="company-main inner-company-page contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Contact", item: `${baseUrl}/contact` },
        ],
      }).replace(/</g, "\\u003c") }} />
      <section className="contact-layout">
        <div className="contact-intro">
          <Eyebrow>LET&apos;S TALK</Eyebrow>
          <h1>What do you need help with?</h1>
          <p>Give us the short version. We will review it and reply within two business days.</p>
        </div>
        <ContactForm initialNeed={initialNeed} />
      </section>
    </main>
  );
}
