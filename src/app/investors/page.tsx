import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/CompanyPages";
import { baseUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Investors | Bear Grid",
  description:
    "A relationship-led entry point for investors interested in carefully selected R&D and technology ventures.",
  alternates: {
    canonical: "/investors",
  },
  openGraph: {
    type: "website",
    siteName: "Bear Grid",
    title: "Investors | Bear Grid",
    description:
      "Connect with Bear Grid around ambitious R&D and technology ventures.",
    url: `${baseUrl}/investors`,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investors | Bear Grid",
    description:
      "A relationship-led entry point for investors interested in carefully selected R&D and technology ventures.",
    images: ["/og.png"],
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
      }).replace(/</g, "\\u003c") }} />
      <section className="inner-company-hero investor-hero">
        <Eyebrow>INVESTORS / SELECTED TECHNOLOGY VENTURES</Eyebrow>
        <h1>Meet ambitious R&amp;D ventures.</h1>
        <p>
          Bear Grid works with technology ventures on assessment, validation and
          execution. We occasionally introduce carefully selected opportunities
          to investors whose expertise, mandate and time horizon are relevant.
        </p>
        <Link className="company-button dark" href="/contact?intent=investor">
          Start a conversation
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
          <h2>Relevant people, relevant opportunities.</h2>
          <p>
            Conversations begin with strategic fit. Bear Grid does not offer
            securities, promise returns or provide investment advice.
          </p>
          <p>
            We collaborate with InspireXchange on founder readiness and
            investor relationships within the Dutch startup ecosystem.
          </p>
          <Link className="text-link" href="/contact?intent=investor">
            Start a conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}
