"use client";

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

  return (
    <header className="sticky top-0 z-40 border-b border-[#ead9cd] bg-[rgba(255,250,245,0.88)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-5 py-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-[1.35rem] border border-[#e6cdbb] bg-[linear-gradient(135deg,#fff8f0,#f6dfcb)] text-sm font-semibold tracking-[0.28em] text-[#5a3b30] shadow-[0_14px_30px_rgba(168,119,88,0.12)]">
              AH
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#3a2a22]">
                {siteConfig.name}
              </p>
              <p className="truncate text-xs uppercase tracking-[0.24em] text-[#9a7764]">
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
        </div>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm transition",
                  active
                    ? "bg-[#3b2d27] text-white"
                    : "border border-[#e6d4c8] bg-white text-[#6f564a]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
