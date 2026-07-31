import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    number: "01",
    title: "AI & Technology Strategy",
    body: "Helping teams evaluate, design and implement practical technology and AI initiatives.",
  },
  {
    number: "02",
    title: "Venture Building",
    body: "Supporting new ventures from concept and validation to market positioning and execution.",
  },
  {
    number: "03",
    title: "Product & Market Validation",
    body: "Testing assumptions, customer demand, business models and market readiness before significant investment.",
  },
  {
    number: "04",
    title: "Risk Management",
    body: "Identifying commercial, operational and technology risks early and turning uncertainty into clearer decisions.",
  },
  {
    number: "05",
    title: "Partnership Building",
    body: "Finding hidden synergy, connecting the right founders, investors, institutions and operators, then turning mutual interest into concrete collaboration.",
  },
  {
    number: "06",
    title: "Innovation & Business Advisory",
    body: "Strategic support for companies, founders and institutions working through complex change, expansion or transformation.",
  },
];

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="company-eyebrow">{children}</p>;
}

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`service-grid ${compact ? "compact" : ""}`}>
      {services.map((service) => (
        <article key={service.number}>
          <span>{service.number}</span>
          <h3>{service.title}</h3>
          <p>{service.body}</p>
        </article>
      ))}
    </div>
  );
}

export function CompanyHome() {
  return (
    <main className="company-main">
      <section className="company-hero">
        <div className="company-hero-mark">
          <Image src="/logos/bear-grid-logo.png" alt="" width={172} height={151} priority />
        </div>
        <div className="company-hero-copy">
          <Eyebrow>BEAR GRID / EST. AS A DEEP-TECH COMPANY</Eyebrow>
          <h1>Technology.<br />Strategy.<br />Venture Building.</h1>
          <p>Bear Grid helps founders, companies and institutions turn complex technology and business questions into practical decisions, partnerships and working products.</p>
          <div className="company-actions">
            <Link className="company-button dark" href="/services">Explore Services</Link>
            <Link className="company-button" href="/history/original-platform">View Technology Platform</Link>
          </div>
        </div>
      </section>

      <section className="company-statement" id="about">
        <Eyebrow>01 / EVOLUTION</Eyebrow>
        <div>
          <h2>From technology platform to broader innovation company</h2>
          <p>Bear Grid began with AI-enabled sensing and security technology. That work remains part of our portfolio, while our focus has expanded to venture building, technology strategy, product validation, risk and partnership development.</p>
        </div>
      </section>

      <section className="company-section services-preview">
        <div className="section-heading">
          <Eyebrow>02 / WHAT WE DO</Eyebrow>
          <h2>Focused support where technology, markets and execution meet.</h2>
        </div>
        <ServiceGrid compact />
        <Link className="text-link" href="/services">Explore all services →</Link>
      </section>

      <section className="technology-band">
        <div>
          <Eyebrow>03 / TECHNOLOGY HERITAGE</Eyebrow>
          <h2>Original Technology Platform</h2>
        </div>
        <div>
          <p>Bear Grid was founded around AI-enabled sensing, monitoring and security systems. The original platform, technical research and application concepts remain available as part of the company’s technology portfolio.</p>
          <Link className="company-button light" href="/history/original-platform">Explore Bear Grid Technology</Link>
        </div>
      </section>

      <section className="company-statement about-statement">
        <Eyebrow>04 / ABOUT</Eyebrow>
        <div>
          <h2>Technical understanding, commercial judgment and a bias toward action.</h2>
          <p>Bear Grid combines technical experience, venture work, business development and cross-border partnership building. We work across technology, innovation and entrepreneurship, helping teams move from uncertainty to practical action.</p>
        </div>
      </section>

      <section className="contact-panel" id="contact">
        <Eyebrow>05 / START A CONVERSATION</Eyebrow>
        <h2>Start with a concrete question.</h2>
        <p>We are open to new projects, partnerships, technology initiatives and investment opportunities.</p>
        <div className="contact-topics">
          <span>Business consulting</span>
          <span>Technology projects</span>
          <span>Venture collaboration</span>
          <span>Partnerships</span>
          <span>Investment opportunities</span>
        </div>
        <Link className="company-button dark" href="/contact">Contact Bear Grid</Link>
      </section>
    </main>
  );
}
