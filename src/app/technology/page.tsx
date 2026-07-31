import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/CompanyPages";

export const metadata: Metadata = {
  title: "Technology Portfolio | Bear Grid",
  description: "The original Bear Grid AI-enabled sensing, monitoring and security technology portfolio.",
};

const portfolio = [
  ["Bear Device", "Portable seismic-signal classification and property monitoring.", "/bear-grid-device"],
  ["Bear Grid Platform", "Adaptive infrastructure for real-time seismological data acquisition.", "/copy-of-bear-device"],
  ["AI Interface", "Research and development for classification, analysis and technical adaptation.", "/copy-of-bear-grid-platform"],
];

export default function TechnologyPage() {
  return (
    <main className="company-main inner-company-page">
      <section className="technology-intro">
        <div>
          <Eyebrow>TECHNOLOGY / ORIGINAL PLATFORM</Eyebrow>
          <h1>A deep-tech foundation that remains part of the portfolio.</h1>
        </div>
        <div>
          <p>Bear Grid began as a deep-tech company developing AI-enabled sensing, security and monitoring systems. The research, platform and application concepts remain available as an active part of the company’s technology portfolio.</p>
          <Link className="company-button dark" href="/technology/platform">Enter Original Platform</Link>
        </div>
      </section>
      <section className="technology-visual">
        <Image src="/media/bear-grid-system.png" alt="Original Bear Grid sensing and monitoring system" width={695} height={514} />
      </section>
      <section className="portfolio-list">
        {portfolio.map(([title, body, href], index) => (
          <Link href={href} key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{body}</p>
            <b>Explore ↗</b>
          </Link>
        ))}
      </section>
    </main>
  );
}
