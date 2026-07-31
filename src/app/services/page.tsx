import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, ServiceGrid } from "@/components/CompanyPages";

export const metadata: Metadata = {
  title: "Services | Bear Grid",
  description: "AI strategy, venture building, validation, risk management, partnerships and innovation advisory.",
};

export default function ServicesPage() {
  return (
    <main className="company-main inner-company-page">
      <section className="inner-company-hero">
        <Eyebrow>SERVICES / PRACTICAL ADVISORY</Eyebrow>
        <h1>Clearer decisions.<br />Stronger ventures.<br />Useful partnerships.</h1>
        <p>We work with founders, companies, investors and institutions at the point where technical possibility must become commercial and operational reality.</p>
      </section>
      <section className="company-section">
        <ServiceGrid />
      </section>
      <section className="services-method">
        <Eyebrow>HOW WE WORK</Eyebrow>
        <div>
          <h2>Start with the decision, not the deliverable.</h2>
          <p>We define the real question, identify what must be learned, and build a focused path from uncertainty to evidence and action. Engagements can support one critical decision or a broader venture and innovation programme.</p>
          <Link className="company-button dark" href="/#contact">Discuss a concrete question</Link>
        </div>
      </section>
    </main>
  );
}
