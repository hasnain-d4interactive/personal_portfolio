import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icon";
import { navItems, siteConfig } from "@/content/site";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-20 border-t border-[var(--border-soft)] bg-[rgba(255,255,255,0.3)]">
      <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-5 py-12 md:px-8 xl:px-12">
        <div className="reeni-shell grid gap-10 p-8 lg:grid-cols-[1.1fr_0.75fr_0.95fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <Image
            src={siteConfig.logoSrc}
            alt={`${siteConfig.name} logo`}
            width={320}
            height={80}
            className="h-auto w-[180px] sm:w-[210px]"
          />
          <p className="max-w-xs text-base leading-8 text-[var(--text-muted)]">{siteConfig.summary}</p>
          <SocialLinks links={siteConfig.socialLinks} />
        </div>

        <div>
          <p className="mb-4 font-heading text-3xl font-bold text-[var(--text-strong)]">
            Explore
          </p>
          <div className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-base text-[var(--text-muted)] transition hover:text-[var(--text-strong)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-heading text-3xl font-bold text-[var(--text-strong)]">
            Connect
          </p>
          <div className="space-y-4 text-base text-[var(--text-muted)]">
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-[var(--text-strong)]">
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)]">
                <Icon name="phone" className="size-4" />
              </span>
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-[var(--text-strong)]">
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)]">
                <Icon name="email" className="size-4" />
              </span>
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)]">
                <Icon name="location" className="size-4" />
              </span>
              {siteConfig.location}
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-6">
          <p className="font-heading text-4xl font-bold text-[var(--text-strong)]">Newsletter</p>
          <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
            Want a fast way to reach me? Use the email action below and I’ll get back
            with project, role, or collaboration details.
          </p>
          <div className="mt-6 flex items-center justify-between gap-3 rounded-full border border-[var(--border-soft)] bg-white p-2 pl-5">
            <span className="truncate text-base text-[var(--text-soft)]">Your e-mail</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
              aria-label="Email Ahmed Hasnain"
            >
              <Icon name="arrow-right" className="size-4" />
            </a>
          </div>
        </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border-soft)] pt-8 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <p>© Ahmed Hasnain. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/about" className="hover:text-[var(--text-strong)]">
              About
            </Link>
            <Link href="/projects" className="hover:text-[var(--text-strong)]">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-[var(--text-strong)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
