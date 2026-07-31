import Image from "next/image";
import Link from "next/link";

export const expertise = [
  ["AI & Technology Strategy", "Practical evaluation, positioning and implementation of technology and AI initiatives."],
  ["Venture Building", "From early concept and validation to market entry, operating model and execution."],
  ["Product & Market Validation", "Testing demand, business models and commercial assumptions before significant investment."],
  ["Risk Management", "Identifying commercial, operational and technology risks early enough to act."],
  ["Partnership Building", "Finding hidden synergy, connecting the right parties and converting mutual interest into concrete collaboration."],
  ["Innovation & Business Advisory", "Strategic support for teams facing complex decisions, transformation or expansion."],
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="final-label">{children}</p>;
}

export function CompanyHome() {
  return (
    <main className="final-main">
      <section className="final-hero">
        <div className="final-hero-copy">
          <SectionLabel>Technology / Venture / Business</SectionLabel>
          <Image className="hero-wordmark" src="/logos/bear-grid-logo.png" alt="Bear Grid" width={135} height={118} priority />
          <h1>Technology, venture and business strategy for complex markets.</h1>
          <p>Bear Grid helps founders, companies and institutions validate ideas, manage risk, build partnerships and turn technology into practical business outcomes.</p>
          <div className="final-actions">
            <Link className="final-button dark" href="/contact">Discuss a Project</Link>
            <Link className="final-button" href="/technology">Explore Technology</Link>
          </div>
        </div>
        <div className="final-hero-proof" aria-label="Bear Grid company focus">
          <p>One company</p>
          <div>
            <span>01</span>
            <h2>Advisory</h2>
            <p>Business, technology and venture work.</p>
          </div>
          <div>
            <span>02</span>
            <h2>Technology</h2>
            <p>Original sensing and monitoring platform.</p>
          </div>
        </div>
      </section>

      <section className="final-intro" id="about">
        <SectionLabel>What Bear Grid does</SectionLabel>
        <div>
          <h2>Technical thinking joined with commercial action.</h2>
          <p>We work where technology, markets and execution meet—helping teams test assumptions, make informed decisions and build the relationships needed to move forward.</p>
        </div>
      </section>

      <section className="final-section" id="expertise">
        <div className="final-section-heading">
          <SectionLabel>Expertise</SectionLabel>
          <h2>Focused support for consequential decisions.</h2>
        </div>
        <div className="expertise-list">
          {expertise.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="heritage-preview">
        <div className="heritage-copy">
          <SectionLabel>Technology heritage</SectionLabel>
          <h2>Original Technology Platform</h2>
          <p>Bear Grid began with AI-enabled sensing, monitoring and security systems. This original platform, technical research and application work remain part of the company’s technology portfolio.</p>
          <Link className="final-button light" href="/technology">Explore the Technology Platform</Link>
        </div>
        <div className="heritage-image">
          <Image src="/media/wix/solutions-exact.png" alt="Bear Grid perimeter sensing system diagram" width={790} height={593} sizes="(max-width: 800px) 100vw, 55vw" />
        </div>
      </section>

      <section className="final-section engagement-section">
        <div className="final-section-heading">
          <SectionLabel>Engagement formats</SectionLabel>
          <h2>Designed around the question at hand.</h2>
        </div>
        <div className="engagement-grid">
          <article><h3>Decision sprint</h3><p>A focused assessment before a major technology, product or market commitment.</p></article>
          <article><h3>Venture support</h3><p>Structured help across validation, positioning, partnerships and execution.</p></article>
          <article><h3>Strategic collaboration</h3><p>Ongoing work on innovation, market entry, risk or ecosystem development.</p></article>
        </div>
      </section>

      <section className="why-section">
        <SectionLabel>Why Bear Grid</SectionLabel>
        <div className="why-grid">
          <h2>Built from technology work, not theory alone.</h2>
          <div>
            <p>Bear Grid’s advisory work is grounded in the experience of developing an original deep-tech platform: defining technical problems, testing applications and connecting engineering choices to real operating contexts.</p>
            <p>That foundation supports practical work with founders, companies and institutions navigating uncertainty.</p>
          </div>
        </div>
      </section>

      <section className="final-contact" id="contact">
        <SectionLabel>Contact</SectionLabel>
        <h2>Start with a concrete question.</h2>
        <p>We are open to advisory work, technology projects, venture collaboration, partnerships and investment opportunities.</p>
        <Link className="final-button dark" href="/contact">Contact Bear Grid</Link>
      </section>
    </main>
  );
}
