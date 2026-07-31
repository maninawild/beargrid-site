"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  ["Home", "/"],
  ["Expertise", "/#expertise"],
  ["Technology", "/technology"],
  ["About", "/#about"],
  ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
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
    <>
      <header className="final-header">
        <div className="final-header-inner">
          <Link className="final-brand" href="/" onClick={() => setOpen(false)}>
            <Image src="/logos/bear-grid-logo.png" alt="" width={54} height={47} priority />
            <span>BEAR GRID</span>
          </Link>
          <nav className="final-nav" aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <Link className={pathname === href ? "active" : ""} href={href} key={label}>{label}</Link>
            ))}
          </nav>
          <button
            className="final-menu-button"
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="final-mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span /><span />
          </button>
        </div>
        {open ? (
          <nav className="final-mobile-nav" id="final-mobile-navigation" aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <Link href={href} key={label} onClick={() => setOpen(false)}>{label}</Link>
            ))}
          </nav>
        ) : null}
      </header>
      <div className="flex-1">{children}</div>
      <footer className="final-footer">
        <div>
          <Link className="final-brand" href="/">
            <Image src="/logos/bear-grid-logo.png" alt="" width={44} height={39} />
            <span>BEAR GRID</span>
          </Link>
          <p>Technology, venture and business strategy.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/#expertise">Expertise</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:office@beargridsolutions.com">office@beargridsolutions.com</a>
        </nav>
      </footer>
    </>
  );
}
