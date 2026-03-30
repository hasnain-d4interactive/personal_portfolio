import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { experienceEntries } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Ahmed Hasnain's work experience across SaaS, healthcare software, ecommerce, Laravel, Vue.js, React, and product-focused engineering roles.",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="Experience"
        title="Five years of hands-on work across products, clients, and fast-moving delivery."
        description="My timeline includes long-running SaaS work, business software, ecommerce systems, WordPress delivery, and product engineering responsibilities that grew over time."
      />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Timeline"
          title="Roles that built both breadth and product judgment."
          description="Each role added a different layer, from client delivery fundamentals to feature ownership inside active software products."
        />

        <div className="space-y-8">
          {experienceEntries.map((entry, index) => (
            <article
              key={`${entry.company}-${entry.role}`}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-10" />
              <div className="relative pl-0 md:pl-10">
                <span className="absolute left-[-0.15rem] top-1 hidden size-4 rounded-full border-4 border-slate-950 bg-sky-300 md:block" />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      {entry.role}
                    </h2>
                    <p className="mt-2 text-base text-slate-300">
                      {entry.company} · {entry.location}
                    </p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    {entry.start} - {entry.end}
                  </p>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-300">{entry.summary}</p>

                <div className="mt-6 grid gap-4">
                  {entry.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.25rem] border border-white/10 bg-slate-900/70 px-5 py-4 text-sm leading-7 text-slate-300"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {entry.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/[0.06] px-3 py-2 text-xs uppercase tracking-[0.22em] text-slate-300"
                  >
                    {item}
                  </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
