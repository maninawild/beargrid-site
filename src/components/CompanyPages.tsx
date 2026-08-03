import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    number: "01",
    title: "Technology & AI Assessment",
    body: "Independent review of technical feasibility, architecture, delivery risk and the evidence behind product claims.",
  },
  {
    number: "02",
    title: "R&D Strategy",
    body: "Focused roadmaps that connect research priorities, product decisions, resources and commercial objectives.",
  },
  {
    number: "03",
    title: "Venture Validation",
    body: "Structured testing of the problem, market, product assumptions and execution plan before major investment.",
  },
  {
    number: "04",
    title: "Innovation Partnerships",
    body: "Finding and shaping practical collaboration between founders, companies, research institutions and investors.",
  },
];

const problems = [
  "A technically ambitious product needs an independent feasibility check.",
  "R&D activity is moving, but priorities and decision criteria are unclear.",
  "A venture needs evidence before the next investment or market commitment.",
  "A complex project needs the right technical, commercial or institutional partners.",
];

const process = [
  ["Frame", "Define the decision, constraints and evidence required."],
  ["Assess", "Review the technology, market assumptions, risks and dependencies."],
  ["Validate", "Test the most consequential unknowns with focused research."],
  ["Act", "Deliver a clear recommendation, roadmap and next decision."],
];

const audiences = [
  "Deep-tech and AI founders",
  "Corporate innovation and R&D teams",
  "Investors and venture builders",
  "Universities and research organisations",
  "Public and international institutions",
];

const faqs = [
  {
    question: "When should we involve Bear Grid?",
    answer: "When a technical or venture decision carries meaningful cost, uncertainty or coordination risk and needs an independent, evidence-led assessment.",
  },
  {
    question: "What does an initial engagement look like?",
    answer: "Most work starts with a tightly scoped assessment: a defined question, targeted review, direct working sessions and a practical recommendation.",
  },
  {
    question: "Does Bear Grid build products?",
    answer: "Bear Grid can support product and venture execution, but begins by validating what should be built, why it matters and which risks must be resolved first.",
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
          <Link className="service-cta" href={`/contact?intent=assessment&service=${encodeURIComponent(service.title)}`}>
            Request an assessment <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CompanyHome() {
  return (
    <main className="company-main">
      <section className="new-hero">
        <div className="new-hero-top">
          <Eyebrow>INDEPENDENT R&amp;D CONSULTANCY / NETHERLANDS</Eyebrow>
          <span>Technology · Ventures · Partnerships</span>
        </div>
        <div className="new-hero-copy">
          <h1>Independent R&amp;D consultancy for ambitious technology ventures.</h1>
          <div>
            <p>We assess complex technology, validate ventures and shape R&amp;D programmes for founders, innovation teams, investors and institutions.</p>
            <div className="company-actions">
              <Link className="company-button dark" href="/contact?intent=project">Discuss your project</Link>
              <Link className="company-button" href="/contact?intent=assessment">Request an assessment</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="positioning-strip" aria-label="Positioning">
        <strong>Independent judgment.</strong>
        <span>Technical depth.</span>
        <span>Commercial context.</span>
        <span>Clear action.</span>
      </section>

      <section className="company-section home-problems">
        <div className="section-heading">
          <Eyebrow>01 / PROBLEMS WE SOLVE</Eyebrow>
          <h2>Resolve the questions that put technology ventures at risk.</h2>
        </div>
        <div className="problem-list">
          {problems.map((problem, index) => (
            <article key={problem}>
              <span>0{index + 1}</span>
              <p>{problem}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="company-section home-services" id="expertise">
        <div className="section-heading">
          <Eyebrow>02 / CORE SERVICES</Eyebrow>
          <h2>Four ways to move from uncertainty to evidence and action.</h2>
        </div>
        <ServiceGrid compact />
      </section>

      <section className="dark-section">
        <div className="section-heading">
          <Eyebrow>03 / HOW WE WORK</Eyebrow>
          <h2>A defined engagement with a decision at the end.</h2>
        </div>
        <ol className="process-grid">
          {process.map(([title, body], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="company-section audience-section">
        <div className="section-heading">
          <Eyebrow>04 / WHO WE WORK WITH</Eyebrow>
          <h2>Teams making consequential technology and venture decisions.</h2>
        </div>
        <div className="audience-list">
          {audiences.map((audience) => <span key={audience}>{audience}</span>)}
        </div>
      </section>

      <section className="method-section">
        <Eyebrow>05 / EXPERTISE &amp; METHOD</Eyebrow>
        <div>
          <h2>Evidence before scale.</h2>
          <p>Our work combines technical diligence, structured research, venture validation and partnership design. We separate facts from assumptions, expose the decisions that matter and produce recommendations that teams can act on.</p>
          <p>Bear Grid was founded as a deep-tech company in 2019 and later evolved into an independent Netherlands-based R&amp;D and innovation consultancy.</p>
          <Link className="text-link" href="/history">Read the company history →</Link>
        </div>
      </section>

      <section className="ecosystem-section" aria-labelledby="ecosystem-title">
        <div className="section-heading">
          <Eyebrow>06 / ECOSYSTEM &amp; COMMUNITY</Eyebrow>
          <div>
            <h2 id="ecosystem-title">Connected to the Dutch innovation ecosystem.</h2>
            <p>Organisations and communities in the wider ecosystem around our work.</p>
          </div>
        </div>
        <div className="ecosystem-grid">
          <a className="ecosystem-mark" href="https://yesdelft.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit YES!Delft website">
            <Image src="/logos/yesdelft-logo.png" alt="YES!Delft" width={230} height={90} style={{ filter: "none" }} />
          </a>
          <a className="ecosystem-mark" href="https://www.inspirexchange.nl/" target="_blank" rel="noopener noreferrer" aria-label="Visit InspireXChange website">
            <img src="/logos/inspirexchange-upload.svg" alt="InspireXChange" width="230" height="90" style={{ filter: "none" }} />
          </a>
          <a className="ecosystem-mark" href="https://platformzero.co/" target="_blank" rel="noopener noreferrer" aria-label="Visit Platform Zero website">
            <img src="/logos/platform-zero-upload.svg" alt="Platform Zero" width="230" height="90" style={{ filter: "none" }} />
          </a>
          <a className="ecosystem-mark" href="https://platformzero.co/sub-zero/" target="_blank" rel="noopener noreferrer" aria-label="Visit Sub-Zero website">
            <img src="/logos/platform-zero-upload.svg" alt="Sub-Zero by Platform Zero" width="230" height="90" style={{ filter: "none" }} />
          </a>
          <a className="ecosystem-mark" href="https://www.krewcommunity.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit KREW Community website">
            <Image src="/logos/krew-logo.png" alt="KREW Community" width={230} height={90} style={{ filter: "none" }} />
          </a>
          <a className="ecosystem-mark" href="https://hub.localie.co/" target="_blank" rel="noopener noreferrer" aria-label="Visit Localie Hub website">
            <img src="/logos/localie-hub-upload.svg" alt="Localie Hub" width="230" height="90" style={{ filter: "none" }} />
          </a>
        </div>
        <p className="ecosystem-note">Shown as ecosystem and community connections only; inclusion does not imply endorsement or investment.</p>
      </section>

      <section className="company-section faq-section">
        <div className="section-heading">
          <Eyebrow>07 / FREQUENTLY ASKED</Eyebrow>
          <h2>Before we begin.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <Eyebrow>START WITH THE DECISION</Eyebrow>
        <h2>Bring us the question that is holding the project back.</h2>
        <div className="company-actions">
          <Link className="company-button light" href="/contact?intent=project">Discuss your project</Link>
          <Link className="company-button light secondary" href="/contact?intent=assessment">Request an assessment</Link>
        </div>
      </section>
    </main>
  );
}
