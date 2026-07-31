import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Eyebrow } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Bear Grid",
  description: "Discuss a technology, R&D, venture or innovation project with Bear Grid.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Bear Grid",
    description: "Discuss a technology, R&D, venture or innovation project with Bear Grid.",
    url: "/contact",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bear Grid",
    description: "Discuss a technology, R&D, venture or innovation project with Bear Grid.",
    images: ["/og.png"],
  },
};

export default function ContactPage() {
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
          <Eyebrow>CONTACT / START WITH CONTEXT</Eyebrow>
          <h1>Tell us what you need to decide.</h1>
          <p>Share the project, the current uncertainty and the outcome you need. We will review the context and respond with a practical next step.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
