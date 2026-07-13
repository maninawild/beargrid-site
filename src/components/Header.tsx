"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logos/bear-grid-logo.png" alt="Bear Grid logo" width={54} height={48} priority />
          <span className="text-lg font-semibold tracking-[0.18em] text-neutral-950">BEAR GRID</span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-semibold tracking-[0.14em] text-neutral-700 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative py-3">
              <Link href={item.href} className="transition hover:text-red-700">
                {item.label}
              </Link>
              {item.children ? (
                <div
                  className={`invisible absolute top-full min-w-64 border border-neutral-200 bg-white p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 ${
                    item.label === "ABOUT US" ? "right-0" : "left-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-3 py-2 text-xs tracking-[0.08em] text-neutral-700 hover:bg-neutral-100 hover:text-red-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-neutral-300 text-neutral-950 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-menu" className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-neutral-100 pb-2">
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-semibold tracking-[0.12em] text-neutral-950"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="grid gap-1 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-neutral-600"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
