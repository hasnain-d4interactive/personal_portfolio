"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems, siteConfig } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#ead9cd] bg-[rgba(255,250,245,0.88)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 md:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-[1.35rem] border border-[#e6cdbb] bg-[linear-gradient(135deg,#fff8f0,#f6dfcb)] text-sm font-semibold tracking-[0.28em] text-[#5a3b30] shadow-[0_14px_30px_rgba(168,119,88,0.12)]">
              AH
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#3a2a22]">
                {siteConfig.name}
              </p>
              <p className="truncate text-[10px] uppercase tracking-[0.22em] text-[#9a7764] sm:text-xs sm:tracking-[0.24em]">
                {siteConfig.shortRole}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-full px-4 py-2 text-sm transition",
                    active
                      ? "bg-[#3b2d27] text-white shadow-[0_12px_24px_rgba(59,45,39,0.18)]"
                      : "text-[#6f564a] hover:bg-white hover:text-[#2e211c]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={siteConfig.resumeHref}
            className="hidden rounded-full border border-[#dfb89f] bg-[#fff7f0] px-4 py-2 text-sm font-medium text-[#7a4d38] shadow-[0_12px_30px_rgba(168,119,88,0.08)] transition hover:bg-[#fff0e2] sm:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-11 items-center justify-center rounded-[1.1rem] border border-[#dfc7ba] bg-white text-[#5a3b30] shadow-[0_12px_30px_rgba(168,119,88,0.08)] transition hover:bg-[#fff5ee] md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition",
                  menuOpen ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition",
                  menuOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition",
                  menuOpen ? "translate-y-[-7px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="mt-4 rounded-[1.6rem] border border-[#e8d6ca] bg-white p-3 shadow-[0_24px_60px_rgba(168,119,88,0.14)] md:hidden"
          >
            <nav className="space-y-2">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      "flex min-h-11 items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                      active
                        ? "bg-[#3b2d27] text-white"
                        : "border border-[#ecddd3] bg-[#fffaf5] text-[#6f564a]",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className={active ? "opacity-100" : "opacity-40"}>
                      /
                    </span>
                  </Link>
                );
              })}
              <a
                href={siteConfig.resumeHref}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center justify-center rounded-2xl border border-[#dfb89f] bg-[#fff7f0] px-4 py-3 text-sm font-medium text-[#7a4d38] shadow-[0_12px_30px_rgba(168,119,88,0.08)] transition hover:bg-[#fff0e2]"
              >
                Resume
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
