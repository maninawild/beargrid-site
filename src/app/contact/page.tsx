import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Eyebrow } from "@/components/CompanyPages";

export const metadata: Metadata = {
  title: "Contact | Bear Grid",
  description: "Contact Bear Grid by WhatsApp or application form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Bear Grid",
    description: "Discuss a technology project, partnership, venture or original-platform enquiry.",
    url: "/contact",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bear Grid",
    description: "Discuss a technology project, partnership, venture or original-platform enquiry.",
    images: ["/og.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="company-main inner-company-page contact-page">
      <section className="contact-panel">
        <Eyebrow>CONTACT</Eyebrow>
        <h1>Start a conversation.</h1>
        <p>Choose WhatsApp for a quick conversation or use the application form for a project, partnership, venture or original-platform enquiry.</p>
        <a className="company-button dark" href="https://wa.me/message/4OIGQ3FHUZQSD1" target="_blank" rel="noopener noreferrer">Write on WhatsApp</a>
        <ContactForm />
      </section>
    </main>
  );
}
