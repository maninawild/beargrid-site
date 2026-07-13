import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logos/bear-grid-logo.png" alt="Bear Grid logo" width={52} height={45} />
            <span className="text-lg font-semibold tracking-[0.18em]">BEAR GRID</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-300">
            Bear Grid Inc is international company researching and developing technical solutions for security and surveillance systems.
          </p>
          <a className="mt-5 inline-block text-sm text-neutral-200 hover:text-white" href="mailto:office@beargridsolutions.com">
            office@beargridsolutions.com
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className="text-xs font-semibold tracking-[0.14em] text-neutral-100 hover:text-red-300">
                {item.label}
              </Link>
              {item.children ? (
                <div className="mt-3 grid gap-2">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="text-sm text-neutral-400 hover:text-white">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs tracking-[0.12em] text-neutral-500">
        © 2020 BEAR GRID INC.
      </div>
    </footer>
  );
}
