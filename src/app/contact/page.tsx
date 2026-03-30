import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { contactMethods, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ahmed Hasnain through email, LinkedIn, GitHub, or resume download for product engineering opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="Contact"
        title="Open to product engineering conversations, collaborations, and strong software teams."
        description="The easiest way to reach me is by email or LinkedIn. If you want a quick overview first, my resume is also available directly from this site."
      />

      <section className="grid gap-5 md:grid-cols-2">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={method.label === "Location" ? "_blank" : undefined}
            rel={method.label === "Location" ? "noreferrer" : undefined}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-sky-400/30 hover:bg-white/[0.06]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
              {method.label}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-white">{method.value}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">{method.description}</p>
          </a>
        ))}
      </section>

      <section className="rounded-[2rem] border border-sky-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(12,18,38,0.94))] p-8 md:p-10">
        <SectionHeading
          eyebrow="Best Fit"
          title="Where I can be especially useful."
          description="I am a strong fit for teams building SaaS products, modern admin experiences, internal tooling, analytics-driven interfaces, and web platforms where product delivery matters."
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
          >
            Email Ahmed
          </a>
          <a
            href={siteConfig.resumeHref}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}
