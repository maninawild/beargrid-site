"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-[1152px] items-center justify-between px-5 py-3 lg:h-[129px] lg:px-0 lg:py-0">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logos/bear-grid-logo.png"
            alt="Bear Grid logo"
            width={135}
            height={118}
            priority
            className="h-auto w-[54px] lg:w-[135px]"
            style={{ height: "auto" }}
          />
          <span className="text-lg font-bold tracking-normal text-neutral-950 lg:text-[22px]">BEAR GRID</span>
        </Link>

        <nav className="hidden h-full items-center text-[18px] font-bold tracking-normal text-neutral-950 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative flex h-full items-center">
              <Link
                href={item.href}
                className={`relative flex h-[69px] items-center whitespace-nowrap px-4 transition hover:bg-[#eee8e5] ${
                  isActive(item.href) ? "bg-[#eee8e5]" : ""
                }`}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span className="absolute -bottom-[14px] left-1/2 h-7 w-7 -translate-x-1/2 rotate-45 border-b border-r border-neutral-400 bg-[#eee8e5]" />
                ) : null}
              </Link>
              {item.children ? (
                <div
                  className={`invisible absolute top-[100px] z-20 min-w-64 border border-neutral-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 ${
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
          <span className="flex h-[69px] items-center px-4">More</span>
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
