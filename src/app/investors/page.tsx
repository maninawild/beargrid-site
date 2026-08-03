import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";
import { localizedAlternatesFor } from "@/i18n";

export const metadata: Metadata = {
  title: "Technology & Venture Assessment for Investors | Bear Grid",
  description:
    "Independent technology and venture assessment for investors, plus a relationship-led entry point to carefully selected R&D ventures.",
  alternates: localizedAlternatesFor("en", "/investors"),
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    locale: "en_US",
    alternateLocale: "nl_NL",
    title: "Technology & Venture Assessment for Investors | Bear Grid",
    description:
      "Independent assessment of technical feasibility, evidence and execution risk before an investor commits.",
    url: `${baseUrl}/investors`,
    images: ["/brand/og-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology & Venture Assessment for Investors | Bear Grid",
    description:
      "Independent assessment of technical feasibility, evidence and execution risk before an investor commits.",
    images: ["/brand/og-logo.png"],
  },
};

const investorTypes = [
  "Angel investors",
  "Venture capital",
  "Family offices",
  "Private equity",
];

export default function InvestorsPage() {
  return (
    <main className="company-main inner-company-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Investors", item: `${baseUrl}/investors` },
        ],
        inLanguage: "en",
      }).replace(/</g, "\\u003c") }} />
      <section className="inner-company-hero investor-hero">
        <Eyebrow>INVESTORS / INDEPENDENT TECHNOLOGY &amp; VENTURE ASSESSMENT</Eyebrow>
        <h1>Assess the technology before committing capital.</h1>
        <p>
          Bear Grid helps investors examine technical feasibility, supporting
          evidence, architecture, delivery risk and team dependencies before an
          investment or venture decision. The result is a concise assessment of
          findings, evidence gaps, material risks and recommended next checks.
        </p>
        <Link className="company-button dark" href="/contact?intent=investor">
          Let&apos;s Talk
        </Link>
      </section>

      <section className="investor-body">
        <div>
          <Eyebrow>WHO WE SPEAK WITH</Eyebrow>
          <div className="audience-list">
            {investorTypes.map((type) => <span key={type}>{type}</span>)}
          </div>
        </div>
        <div>
          <h2>Independent review, with clear limits.</h2>
          <p>
            Technology and venture assessment is useful when an investment thesis
            depends on product claims, an R&amp;D roadmap or the ability of a team to
            deliver. Scope is agreed around the decision and the evidence available.
          </p>
          <p>
            Conversations begin with strategic fit. Bear Grid does not offer
            securities, promise returns or provide investment advice.
          </p>
          <p>
            Bear Grid also works with technology ventures on validation and
            execution, and may introduce carefully selected opportunities when an
            investor&apos;s expertise, mandate and time horizon are relevant.
          </p>
          <Link className="text-link" href="/contact?intent=investor">
            Let&apos;s Talk →
          </Link>
        </div>
      </section>
    </main>
  );
}
