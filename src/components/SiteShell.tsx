"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const modernRoutes = new Set(["/", "/services", "/technology"]);
const modernNav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Technology", "/technology"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
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
          <Link className="platform-link" href="/technology/platform">Original Platform ↗</Link>
        </nav>
        <button
          className="company-menu-button"
          type="button"
          aria-label="Open company navigation"
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
          <Link className="platform-link" href="/technology/platform" onClick={() => setOpen(false)}>Original Platform ↗</Link>
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
        <p>Technology. Strategy. Venture Building.</p>
      </div>
      <div className="footer-links">
        <Link href="/services">Services</Link>
        <Link href="/technology">Technology</Link>
        <a href="mailto:office@beargridsolutions.com">office@beargridsolutions.com</a>
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
      </>
    );
  }

  return (
    <>
      <div className="legacy-return"><Link href="/">← Current Bear Grid</Link></div>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
