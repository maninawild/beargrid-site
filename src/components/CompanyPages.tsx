import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    number: "01",
    title: "Strategy & Complex Problem Solving",
    body: "For leaders facing a difficult business, technology or execution problem. We find the real constraint, set priorities and produce a plan your team can use.",
  },
  {
    number: "02",
    title: "Sales Systems",
    body: "For SMEs and technology companies that need a repeatable way to sell. We sharpen the offer and design the process, tools and measures needed to run it.",
  },
  {
    number: "03",
    title: "AI Automation",
    body: "For teams losing time to repetitive work. We select practical tools, connect them to existing workflows and deliver automation that people can maintain.",
  },
  {
    number: "04",
    title: "Digital Products & Websites",
    body: "For companies that need a better website, internal tool or customer platform. We design and build a clear, fast product tied to a business result.",
  },
  {
    number: "05",
    title: "Executive Advisory",
    body: "For leadership teams making an important product or business decision. We provide direct analysis, challenge weak assumptions and help execute the decision.",
  },
  {
    number: "06",
    title: "Venture Team Assembly",
    body: "For investors and organisations with a strong idea but no delivery team. We define the roles and assemble experienced people to validate and build it.",
  },
];

export const rAndDServices = [
  {
    number: "01",
    title: "Technology Assessment",
    body: "An independent review for teams or investors who need to decide whether a technology is feasible and ready for its next commitment. Bear Grid examines the evidence, architecture, technical risks and delivery dependencies, then provides findings and recommended next checks.",
  },
  {
    number: "02",
    title: "R&D Strategy",
    body: "A decision-led plan for founders and innovation teams that need to turn an uncertain technical objective into a workable programme. Bear Grid defines priorities, validation milestones, resource needs and decision gates, then delivers a roadmap the team can execute.",
  },
  {
    number: "03",
    title: "Venture Validation",
    body: "A focused examination of an early-stage venture before significant time or capital is committed. Bear Grid tests the technical, product and execution assumptions, identifies evidence gaps and delivers a clear view of what should be validated, changed or stopped.",
  },
  {
    number: "04",
    title: "Innovation Partnerships",
    body: "Structured support for companies and institutions that need external capabilities to move an innovation project forward. Bear Grid clarifies the objective, partner roles, contributions and governance, then provides a practical collaboration plan.",
  },
];

const problems = [
  "Manual work is consuming time that should be spent serving customers.",
  "Sales depend on individual effort instead of a system the team can run.",
  "A website, platform or internal tool is not doing the job it was built for.",
  "An important business or technology decision needs a clear owner and better evidence.",
];

const process = [
  ["Understand", "Get to the facts, the constraint and the result that matters."],
  ["Design", "Choose the simplest workable approach and define the job."],
  ["Build", "Work with your team to produce, test and improve the solution."],
  ["Deliver", "Hand over a working result, clear ownership and the next steps."],
];

const audiences = [
  "SMEs",
  "Technology companies",
  "Industrial companies",
  "Scale-ups",
  "Corporate teams",
  "Founders",
  "Investors and private investors",
];

const faqs = [
  {
    question: "What can Bear Grid take on?",
    answer: "A defined problem, a complete build or hands-on support to a leadership team. Typical work covers strategy, sales systems, automation, websites, platforms and venture execution.",
  },
  {
    question: "Do you only advise?",
    answer: "No. We advise when a decision needs to be made and build when the answer needs to become a working system, product or process.",
  },
  {
    question: "How does a project start?",
    answer: "Send a short enquiry. We review it, ask any necessary questions and propose a clear first piece of work. If we are not the right fit, we will say so.",
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
          <Link className="service-cta" href={`/contact?service=${encodeURIComponent(service.title)}`}>
            Let&apos;s Talk <span aria-hidden="true">→</span>
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
          <Eyebrow>NETHERLANDS-BASED INDEPENDENT R&amp;D CONSULTANCY</Eyebrow>
          <span>Solve · Build · Improve · Deliver</span>
        </div>
        <div className="new-hero-copy">
          <h1>Independent R&amp;D consultancy for difficult technology and venture decisions.</h1>
          <div>
            <p>Bear Grid helps founders, innovation teams, investors and institutions assess technology, shape R&amp;D strategy, validate ventures and build effective partnerships. We turn unclear problems into decisions, plans, systems and products.</p>
            <div className="company-actions">
              <Link className="company-button dark" href="/contact">Let&apos;s Talk</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="positioning-strip" aria-label="Positioning">
        <strong>Strategy</strong>
        <span>Engineering</span>
        <span>Execution</span>
        <span>Straight answers</span>
      </section>

      <section className="company-section home-problems">
        <div className="section-heading">
          <Eyebrow>01 / PROBLEMS WE SOLVE</Eyebrow>
          <h2>Fix what is slowing the business down.</h2>
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
          <h2>Practical help. Clear deliverables.</h2>
        </div>
        <ServiceGrid compact />
      </section>

      <section className="dark-section">
        <div className="section-heading">
          <Eyebrow>03 / HOW WE WORK</Eyebrow>
          <h2>Small teams. Direct work. No theatre.</h2>
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
          <h2>Companies and people responsible for getting difficult work done.</h2>
        </div>
        <div className="audience-list">
          {audiences.map((audience) => <span key={audience}>{audience}</span>)}
        </div>
      </section>

      <section className="method-section">
        <Eyebrow>05 / HOW WE THINK</Eyebrow>
        <div>
          <h2>Senior people. Useful work.</h2>
          <p>We combine engineering judgement, commercial experience and hands-on delivery. We work directly with decision-makers, keep teams small and leave behind something usable: a plan, a system, a product or a decision.</p>
          <p>Bear Grid began as a deep-tech company in 2019. That operating experience now informs our work as an independent engineering and business consultancy.</p>
          <Link className="text-link" href="/history">Read the company history →</Link>
        </div>
      </section>

      <section className="ecosystem-section" aria-labelledby="ecosystem-title">
        <div className="section-heading">
          <Eyebrow>06 / ECOSYSTEM &amp; COMMUNITY</Eyebrow>
          <div>
            <h2 id="ecosystem-title">Part of the Dutch technology and founder community.</h2>
            <p>Organisations and communities connected to the people and projects around our work.</p>
          </div>
        </div>
        <div className="ecosystem-grid">
          <a className="ecosystem-mark" href="https://yesdelft.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit YES!Delft website">
            <Image src="/logos/yesdelft-logo.png" alt="YES!Delft" width={450} height={104} />
          </a>
          <a className="ecosystem-mark" href="https://www.inspirexchange.nl/" target="_blank" rel="noopener noreferrer" aria-label="Visit InspireXChange website">
            <Image src="/logos/inspirexchange.png" alt="InspireXChange" width={500} height={360} />
          </a>
          <a className="ecosystem-mark" href="https://platformzero.co/" target="_blank" rel="noopener noreferrer" aria-label="Visit Platform Zero website">
            <Image src="/logos/platform-zero.png" alt="Platform Zero" width={500} height={500} />
          </a>
          <a className="ecosystem-mark" href="https://www.dhi-architecture.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Design Hub International website">
            <Image src="/logos/dhi-logo.png" alt="Design Hub International" width={699} height={264} />
          </a>
          <a className="ecosystem-mark" href="https://www.krewcommunity.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit KREW Community website">
            <Image src="/logos/krew-logo.png" alt="KREW Community" width={398} height={162} />
          </a>
          <a className="ecosystem-mark" href="https://hub.localie.co/" target="_blank" rel="noopener noreferrer" aria-label="Visit Localie Hub website">
            <Image src="/logos/localie-hub.png" alt="Localie Hub" width={900} height={360} />
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
        <Eyebrow>HAVE A PROBLEM WORTH SOLVING?</Eyebrow>
        <h2>Tell us what is stuck. We&apos;ll tell you if we can help.</h2>
        <div className="company-actions">
          <Link className="company-button light" href="/contact">Let&apos;s Talk</Link>
        </div>
      </section>
    </main>
  );
}
