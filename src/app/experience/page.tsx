import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
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
    <div className="space-y-20 md:space-y-28">
      <PageHero
        eyebrow="Experience"
        title="Five years of hands-on work across products, clients, and fast-moving delivery."
        description="My timeline includes long-running SaaS work, business software, ecommerce systems, WordPress delivery, and product engineering responsibilities that grew over time."
      />

      <section className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Timeline"
            title="Roles that built both breadth and product judgment."
            description="Each role added a different layer, from client delivery fundamentals to feature ownership inside active software products."
            align="center"
          />
        </Reveal>

        <div className="space-y-6">
          {experienceEntries.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.role}`} delay={index * 70}>
              <article
                className={[
                  "grid gap-6 rounded-[2rem] border p-8 shadow-[var(--shadow-card)] lg:grid-cols-[0.9fr_0.55fr_1.1fr]",
                  index === 0
                    ? "border-[rgba(20,20,20,0.08)] bg-[var(--accent)]"
                    : "border-[var(--border-soft)] bg-[var(--surface-primary)]",
                ].join(" ")}
              >
                <div>
                  <p className="reeni-eyebrow text-sm">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 text-[2.7rem] font-bold text-[var(--text-strong)] md:text-[3.1rem]">
                    {entry.role}
                  </h2>
                  <p className="mt-3 text-base text-[var(--text-muted)]">
                    {entry.company} · {entry.location}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[var(--text-soft)]">
                    {entry.start} - {entry.end}
                  </p>
                </div>

                <div className="rounded-[1.7rem] border border-[rgba(20,20,20,0.08)] bg-[rgba(255,255,255,0.55)] p-6">
                  <p className="font-heading text-[2.3rem] font-bold text-[var(--text-strong)]">
                    Stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border-soft)] bg-white/80 px-4 py-2 text-sm text-[var(--text-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-base leading-8 text-[var(--text-muted)]">{entry.summary}</p>
                  <div className="mt-5 grid gap-3">
                    {entry.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-[1.25rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.62)] px-5 py-4 text-sm leading-7 text-[var(--text-muted)]"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
