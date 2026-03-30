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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(8,12,25,0.78)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-6 py-4 md:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.45),_rgba(12,18,38,0.95)_58%)] text-sm font-semibold tracking-[0.3em] text-white">
              AH
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
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
                      ? "bg-white text-slate-950"
                      : "text-slate-300 hover:bg-white/[0.08] hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={siteConfig.resumeHref}
            className="rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:border-sky-300 hover:bg-sky-400/20"
          >
            Download Resume
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
                    ? "bg-white text-slate-950"
                    : "border border-white/10 text-slate-300",
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
