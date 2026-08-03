import Image from "next/image";
import Link from "next/link";

export type Service = { number: string; title: string; body: string };
export type CompanyContent = {
  locale: "en" | "nl";
  services: Service[];
  rAndDServices: Service[];
  problems: string[];
  process: [string, string][];
  audiences: string[];
  faqs: { question: string; answer: string }[];
  labels: {
    consultancy: string; verbs: string; headline: string; introduction: string; contact: string;
    positioning: string; strategy: string; execution: string; answers: string;
    problemsEyebrow: string; problemsTitle: string; servicesEyebrow: string; servicesTitle: string;
    processEyebrow: string; processTitle: string; audienceEyebrow: string; audienceTitle: string;
    methodEyebrow: string; methodTitle: string; methodBody: string; historyBody: string; historyLink: string;
    ecosystemEyebrow: string; ecosystemTitle: string; ecosystemBody: string; ecosystemNote: string;
    faqEyebrow: string; faqTitle: string; finalEyebrow: string; finalTitle: string;
    serviceCta: string; visit: string;
  };
};

const logos = [
  ["YES!Delft", "https://yesdelft.com/", "/logos/yesdelft-logo.png", 450, 104],
  ["InspireXChange", "https://www.inspirexchange.nl/", "/logos/inspirexchange.png", 500, 360],
  ["Platform Zero", "https://platformzero.co/", "/logos/platform-zero.png", 500, 500],
  ["Design Hub International", "https://www.dhi-architecture.com/", "/logos/dhi-logo.png", 699, 264],
  ["KREW Community", "https://www.krewcommunity.com/", "/logos/krew-logo.png", 398, 162],
  ["Localie Hub", "https://hub.localie.co/", "/logos/localie-hub.png", 900, 360],
] as const;

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="company-eyebrow">{children}</p>;
}

export function ServiceGridTemplate({ content, compact = false }: { content: CompanyContent; compact?: boolean }) {
  const prefix = content.locale === "nl" ? "/nl" : "";
  return (
    <div className={`service-grid ${compact ? "compact" : ""}`}>
      {content.services.map((service) => (
        <article key={service.number}>
          <span>{service.number}</span><h3>{service.title}</h3><p>{service.body}</p>
          <Link className="service-cta" href={`${prefix}/contact?service=${encodeURIComponent(service.title)}`}>
            {content.labels.serviceCta} <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CompanyHomeTemplate({ content }: { content: CompanyContent }) {
  const prefix = content.locale === "nl" ? "/nl" : "";
  const l = content.labels;
  return (
    <main className="company-main">
      <section className="new-hero">
        <div className="new-hero-top"><Eyebrow>{l.consultancy}</Eyebrow><span>{l.verbs}</span></div>
        <div className="new-hero-copy"><h1>{l.headline}</h1><div><p>{l.introduction}</p><div className="company-actions"><Link className="company-button dark" href={`${prefix}/contact`}>{l.contact}</Link></div></div></div>
      </section>
      <section className="positioning-strip" aria-label={l.positioning}><strong>{l.strategy}</strong><span>Engineering</span><span>{l.execution}</span><span>{l.answers}</span></section>
      <section className="company-section home-problems">
        <div className="section-heading"><Eyebrow>{l.problemsEyebrow}</Eyebrow><h2>{l.problemsTitle}</h2></div>
        <div className="problem-list">{content.problems.map((problem, index) => <article key={problem}><span>0{index + 1}</span><p>{problem}</p></article>)}</div>
      </section>
      <section className="company-section home-services" id="expertise">
        <div className="section-heading"><Eyebrow>{l.servicesEyebrow}</Eyebrow><h2>{l.servicesTitle}</h2></div>
        <ServiceGridTemplate content={content} compact />
      </section>
      <section className="dark-section">
        <div className="section-heading"><Eyebrow>{l.processEyebrow}</Eyebrow><h2>{l.processTitle}</h2></div>
        <ol className="process-grid">{content.process.map(([title, body], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
      </section>
      <section className="company-section audience-section">
        <div className="section-heading"><Eyebrow>{l.audienceEyebrow}</Eyebrow><h2>{l.audienceTitle}</h2></div>
        <div className="audience-list">{content.audiences.map((audience) => <span key={audience}>{audience}</span>)}</div>
      </section>
      <section className="method-section"><Eyebrow>{l.methodEyebrow}</Eyebrow><div><h2>{l.methodTitle}</h2><p>{l.methodBody}</p><p>{l.historyBody}</p><Link className="text-link" href={`${prefix}/history`}>{l.historyLink} →</Link></div></section>
      <section className="ecosystem-section" aria-labelledby="ecosystem-title">
        <div className="section-heading"><Eyebrow>{l.ecosystemEyebrow}</Eyebrow><div><h2 id="ecosystem-title">{l.ecosystemTitle}</h2><p>{l.ecosystemBody}</p></div></div>
        <div className="ecosystem-grid">{logos.map(([name, href, src, width, height]) => <a className="ecosystem-mark" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${l.visit} ${name}${content.locale === "en" ? " website" : ""}`} key={name}><Image src={src} alt={name} width={width} height={height} /></a>)}</div>
        <p className="ecosystem-note">{l.ecosystemNote}</p>
      </section>
      <section className="company-section faq-section">
        <div className="section-heading"><Eyebrow>{l.faqEyebrow}</Eyebrow><h2>{l.faqTitle}</h2></div>
        <div className="faq-list">{content.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>
      <section className="final-cta"><Eyebrow>{l.finalEyebrow}</Eyebrow><h2>{l.finalTitle}</h2><div className="company-actions"><Link className="company-button light" href={`${prefix}/contact`}>{l.contact}</Link></div></section>
    </main>
  );
}
