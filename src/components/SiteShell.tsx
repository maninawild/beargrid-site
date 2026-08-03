"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const modernRoutes = new Set(["/", "/expertise", "/investors", "/history", "/contact"]);
const modernNav = [
  ["Home", "/"],
  ["Expertise", "/expertise"],
  ["Investors", "/investors"],
  ["History", "/history"],
  ["Let's Talk", "/contact"],
] as const;

function ModernHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);

  return (
    <header className="company-header">
      <div className="company-header-inner">
        <Link className="company-brand" href="/">
          <Image src="/logos/bear-grid-logo.png" alt="Bear Grid" width={52} height={46} priority />
          <span>BEAR GRID</span>
        </Link>
        <nav className="company-nav" aria-label="Company navigation">
          {modernNav.map(([label, href]) => (
            <Link className={pathname === href ? "active" : ""} href={href} key={label}>{label}</Link>
          ))}
        </nav>
        <button
          className="company-menu-button"
          type="button"
          aria-label={open ? "Close company navigation" : "Open company navigation"}
          aria-expanded={open}
          aria-controls="company-mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      {open ? (
        <nav className="company-mobile-nav" id="company-mobile-nav" aria-label="Company mobile navigation">
          {modernNav.map(([label, href]) => <Link href={href} key={label} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      ) : null}
    </header>
  );
}

function ModernFooter() {
  return (
    <footer className="company-footer">
      <div>
        <Link className="company-brand" href="/">
          <Image src="/logos/bear-grid-logo.png" alt="" width={38} height={34} />
          <span>BEAR GRID</span>
        </Link>
        <p>Strategy. Engineering. Execution.</p>
      </div>
      <div className="footer-links">
        <Link href="/expertise">Expertise</Link>
        <Link href="/investors">Investors</Link>
        <Link href="/history">History</Link>
        <Link href="/history/original-platform">Original platform</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const modern = modernRoutes.has(pathname);

  if (modern) {
    return (
      <>
        <ModernHeader />
        <div className="flex-1">{children}</div>
        <ModernFooter />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <div className="legacy-return"><Link href="/">Preserved original platform · Return to current Bear Grid</Link></div>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/message/4OIGQ3FHUZQSD1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Bear Grid on WhatsApp"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32">
        <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.6c-2.1 0-4.1-.6-5.8-1.7l-.4-.2-3.9 1 1.1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.7.1-1.9-.9-3.2-1.7-4.5-3.9-.3-.6.3-.6.9-1.3.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6-.1-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3 .9 4.1.8.7-.1 1.9-.8 2.1-1.5.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
