import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { achievements, education, heroStats, siteConfig, strengths } from "@/content/site";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn more about Ahmed Hasnain, a full-stack software developer focused on SaaS products, Laravel, React, Vue, Next.js, Python, and AI-assisted delivery workflows.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-28">
      <PageHero
        eyebrow="About Ahmed Hasnain"
        title="A software developer shaped by product work, delivery pressure, and curiosity."
        description={siteConfig.aboutSummary}
        actions={
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-base font-medium text-[var(--text-strong)] transition hover:bg-[var(--accent-hover)]"
          >
            View Experience
            <Icon name="arrow-right" className="size-4" />
          </Link>
        }
        visual={
          <div className="mx-auto max-w-[23rem]">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#111] p-3 shadow-[0_30px_80px_rgba(20,20,20,0.16)]">
              <Image
                src={siteConfig.portraitSrc}
                alt={siteConfig.portraitAlt}
                width={400}
                height={400}
                className="h-auto w-full rounded-[1.5rem] object-cover grayscale"
              />
            </div>
          </div>
        }
      />

      <section className="reeni-shell p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="space-y-5 text-base leading-8 text-[var(--text-muted)]">
            <SectionHeading
              eyebrow="Profile"
              title="My work is strongest where engineering supports clear business outcomes."
              description={siteConfig.summary}
            />
            <p>
              I enjoy building products that solve real operational problems. That includes
              link marketing and analytics, hospital software, ecommerce functionality, and
              now AI-assisted content operations.
            </p>
            <p>
              The common thread is not one framework. It is taking product ideas, clarifying
              what matters, and turning them into usable, maintainable, production-ready
              systems.
            </p>
            <p>
              Over the last year, I have been using Claude, Codex, and ChatGPT extensively
              in a proper workflow to accelerate research, debugging, implementation
              support, and SaaS delivery while keeping engineering judgment in control.
            </p>
          </Reveal>

          <Reveal delay={120} className="grid gap-5 sm:grid-cols-2">
            {heroStats.map((stat, index) => (
              <article
                key={stat.label}
                className={[
                  "rounded-[1.8rem] border p-7",
                  index === 0
                    ? "border-[rgba(20,20,20,0.08)] bg-[var(--accent)]"
                    : "border-[var(--border-soft)] bg-[var(--surface-soft)]",
                ].join(" ")}
              >
                <p className="text-[3.2rem] font-bold text-[var(--text-strong)]">{stat.value}</p>
                <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">{stat.label}</p>
              </article>
            ))}
            <div className="overflow-hidden rounded-[1.8rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 sm:col-span-2">
              <Image
                src="/images/about-visual.svg"
                alt="Creative abstract composition representing Ahmed Hasnain's full-stack SaaS and AI-assisted delivery work"
                width={1200}
                height={1200}
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Strengths"
            title="What I bring to a product team."
            description="These qualities show up repeatedly in my recent work across live products, internal tooling, analytics-heavy workflows, and fast-moving requirements."
            align="center"
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {strengths.map((strength, index) => (
            <Reveal
              key={strength.title}
              delay={index * 70}
              className="reeni-shell p-7"
            >
              <h3 className="text-[2.2rem] font-bold text-[var(--text-strong)]">
                {strength.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                {strength.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="reeni-shell p-8">
          <SectionHeading
            eyebrow="Achievements"
            title="Early signals of initiative and competition."
          />
          <div className="mt-8 space-y-4">
            {achievements.map((achievement) => (
              <article
                key={achievement.title}
                className="rounded-[1.6rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-5"
              >
                <h3 className="text-[1.8rem] font-bold text-[var(--text-strong)]">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                  {achievement.detail}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="reeni-shell p-8">
          <SectionHeading
            eyebrow="Education"
            title="Engineering foundation"
            description="A technical background that shaped how I approach systems, problem-solving, and product thinking."
          />
          <div className="mt-8 rounded-[1.8rem] bg-[var(--surface-soft)] p-7 shadow-[var(--shadow-soft)]">
            <p className="reeni-eyebrow text-sm">Degree</p>
            <h3 className="mt-4 text-[2.5rem] font-bold text-[var(--text-strong)]">
              {education.degree}
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
              {education.institution}
            </p>
            <p className="mt-2 text-sm text-[var(--text-soft)]">Completed in {education.year}</p>
          </div>
          <div className="mt-6 rounded-[1.8rem] border border-[rgba(20,20,20,0.08)] bg-[var(--accent)] p-7">
            <p className="text-base leading-8 text-[var(--text-strong)]">
              My career since graduation has been shaped by shipping real client and product
              work quickly, then leveling up through ownership, breadth, and modern
              AI-assisted execution habits.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
