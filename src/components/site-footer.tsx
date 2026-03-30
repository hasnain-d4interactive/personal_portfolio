import Link from "next/link";

import { navItems, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_0.8fr_1fr] md:px-8">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            {siteConfig.summary}
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Explore
          </p>
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Connect
          </p>
          <div className="space-y-3 text-sm">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-slate-300 transition hover:text-white"
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
