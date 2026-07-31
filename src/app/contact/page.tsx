import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Bear Grid",
  description: "Contact Bear Grid about advisory work, technology projects, venture collaboration, partnerships or investment opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section>
        <p className="final-label">Contact Bear Grid</p>
        <h1>Start with a concrete question.</h1>
        <p>We are open to advisory work, technology projects, venture collaboration, partnerships and investment opportunities.</p>
        <a className="contact-email" href="mailto:office@beargridsolutions.com">office@beargridsolutions.com</a>
      </section>
      <aside>
        <p className="final-label">Useful starting points</p>
        <ul>
          <li>What decision are you working toward?</li>
          <li>What has already been tested?</li>
          <li>Where is the greatest uncertainty?</li>
          <li>Who needs to be involved?</li>
        </ul>
      </aside>
    </main>
  );
}
