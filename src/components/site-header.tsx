"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/icon";
import { navItems, siteConfig } from "@/content/site";
import { SocialLinks } from "@/components/social-links";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto w-full max-w-[1320px] px-4 md:px-8 xl:px-12",
          scrolled ? "" : "",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between gap-4 rounded-full border px-4 py-3 transition-all duration-300 md:px-6",
            scrolled
              ? "border-[var(--border-soft)] bg-[rgba(255,255,255,0.92)] shadow-[var(--shadow-soft)] backdrop-blur-xl"
              : "border-transparent bg-[rgba(255,255,255,0.72)] backdrop-blur-md",
          ].join(" ")}
        >
          <Link href="/" className="flex min-w-0 items-center">
            <Image
              src={siteConfig.logoSrc}
              alt={`${siteConfig.name} logo`}
              width={320}
              height={80}
              priority
              className="h-auto w-[160px] min-w-0 sm:w-[184px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-full px-5 py-3 text-[1.05rem] font-medium transition",
                    active
                      ? "bg-[var(--button-dark)] text-white shadow-[var(--shadow-soft)]"
                      : "text-[var(--text-strong)] hover:bg-[var(--surface-primary)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <SocialLinks links={siteConfig.socialLinks} />
            <a
              href={siteConfig.resumeHref}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
            >
              Resume
              <Icon name="arrow-right" className="size-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-12 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)] xl:hidden"
          >
            <span className="relative flex items-center justify-center">
              {menuOpen ? (
                <span className="relative block h-4 w-5">
                  <span className="absolute left-0 top-[7px] block h-0.5 w-5 rotate-45 rounded-full bg-current" />
                  <span className="absolute left-0 top-[7px] block h-0.5 w-5 -rotate-45 rounded-full bg-current" />
                </span>
              ) : (
                <Icon name="menu" className="size-5" />
              )}
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="reeni-shell mt-4 p-4 xl:hidden"
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
                      "flex min-h-11 items-center justify-between rounded-2xl px-4 py-3 text-base transition",
                      active
                        ? "bg-[var(--button-dark)] text-white"
                        : "border border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--text-strong)]",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    <Icon name="arrow-right" className={active ? "size-4 opacity-100" : "size-4 opacity-40"} />
                  </Link>
                );
              })}
              <div className="pt-3">
                <SocialLinks links={siteConfig.socialLinks} />
              </div>
              <a
                href={siteConfig.resumeHref}
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
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
