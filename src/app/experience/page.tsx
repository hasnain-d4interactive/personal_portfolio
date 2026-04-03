import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { experienceEntries } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Explore Ahmed Hasnain's work experience across SaaS, healthcare software, ecommerce, Laravel, Vue.js, React, Next.js, Python, and AI-assisted delivery workflows.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="space-y-20 md:space-y-24">
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
              className="relative rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]"
            >
              <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#e2cfc3] to-transparent md:block md:left-10" />
              <div className="relative pl-0 md:pl-10">
                <span className="absolute left-[-0.05rem] top-1 hidden size-4 rounded-full border-4 border-white bg-[#d88d62] md:block" />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-[#2d211d]">
                      {entry.role}
                    </h2>
                    <p className="mt-2 text-base text-[#6e5649]">
                      {entry.company} · {entry.location}
                    </p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#a27f6c]">
                    {entry.start} - {entry.end}
                  </p>
                </div>

                <p className="mt-6 text-base leading-8 text-[#6e5649]">{entry.summary}</p>

                <div className="mt-6 grid gap-4">
                  {entry.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.25rem] border border-[#efe1d6] bg-[#fff9f4] px-5 py-4 text-sm leading-7 text-[#6e5649]"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {entry.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#ead6c8] bg-[#fff7f0] px-3 py-2 text-xs uppercase tracking-[0.22em] text-[#7e6558]"
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
