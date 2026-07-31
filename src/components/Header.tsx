"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/site";

const moreItems = [
  { label: "Bear Device", href: "/bear-grid-device" },
  { label: "Bear Grid Platform", href: "/copy-of-bear-device" },
  { label: "AI Interface", href: "/copy-of-bear-grid-platform" },
  { label: "ASP Bear Grid", href: "/coming-soon-03" },
  { label: "BG Smart Tower Security Solution", href: "/copy-of-asp-bear-grid" },
  { label: "NEWS", href: "/news" },
  { label: "JOBS and OPPORTUNITIES", href: "/jobs" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(event: MouseEvent) {
      if (!moreRef.current?.contains(event.target as Node)) setMoreOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMoreOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Link className="brand" href="/" onClick={() => setMobileOpen(false)}>
          <Image src="/logos/bear-grid-logo.png" alt="Bear Grid logo" width={67} height={59} priority />
          <span>BEAR GRID</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div className="nav-entry" key={item.label}>
              <Link className={isActive(item.href) ? "active" : ""} href={item.href}>
                {item.label}
              </Link>
              {item.children ? (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>{child.label}</Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="nav-entry more-entry" ref={moreRef}>
            <button
              type="button"
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              onClick={() => setMoreOpen((value) => !value)}
            >
              More
            </button>
            {moreOpen ? (
              <div className="nav-dropdown more-dropdown" role="menu">
                {moreItems.map((item) => (
                  <Link role="menuitem" key={item.href} href={item.href} onClick={() => setMoreOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <button
          className="mobile-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen ? (
        <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
              {item.children?.map((child) => (
                <Link className="mobile-child" key={child.href} href={child.href} onClick={() => setMobileOpen(false)}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <details>
            <summary>More</summary>
            {moreItems.map((item) => (
              <Link className="mobile-child" key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </details>
        </nav>
      ) : null}
    </header>
  );
}
