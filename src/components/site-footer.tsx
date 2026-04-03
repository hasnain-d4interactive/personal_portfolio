import Link from "next/link";

import { navItems, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[#ead9cd] bg-[rgba(255,249,242,0.92)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.35fr_0.85fr_1fr] md:px-8">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-[#352721]">{siteConfig.name}</p>
          <p className="max-w-xl text-sm leading-7 text-[#6b5549]">{siteConfig.summary}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={siteConfig.phoneHref}
              className="rounded-full border border-[#e4cabc] bg-white px-4 py-2 text-sm text-[#5c4034] shadow-[0_12px_24px_rgba(144,104,79,0.06)] transition hover:bg-[#fff6ee]"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full border border-[#e4cabc] bg-white px-4 py-2 text-sm text-[#5c4034] shadow-[0_12px_24px_rgba(144,104,79,0.06)] transition hover:bg-[#fff6ee]"
            >
              Email
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9d7b69]">
            Explore
          </p>
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-[#e4d3c7] bg-white px-3 py-2 text-sm text-[#6e5649] transition hover:border-[#d9b49f] hover:text-[#352721]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9d7b69]">
            Connect
          </p>
          <div className="space-y-3 text-sm">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block text-[#6b5549] transition hover:text-[#2d211c]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
