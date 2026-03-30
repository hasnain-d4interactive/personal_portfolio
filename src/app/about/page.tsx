import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { achievements, education, siteConfig, strengths } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ahmed Hasnain, a full-stack software developer focused on SaaS product development, Laravel, React, Vue, Next.js, and Python-connected workflows.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="About"
        title="A developer shaped by product work, not only frameworks."
        description="My path started with Laravel, WordPress, and Vue.js projects, then grew into modern SaaS product work where shipping dependable user-facing features matters every week."
        actions={
          <Link
            href="/experience"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
          >
            View Experience
          </Link>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <SectionHeading
            eyebrow="Profile"
            title="My work is strongest where engineering supports clear business outcomes."
            description={siteConfig.summary}
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
            <p>
              I enjoy working on products that solve real operational problems. That has
              included link marketing and analytics, hospital software, ecommerce
              functionality, and now AI-assisted content operations.
            </p>
            <p>
              The common thread in my work is not a single framework. It is taking product
              ideas, clarifying what matters, and turning them into experiences that are
              usable, maintainable, and ready for production.
            </p>
            <p>
              Today, I position myself as a full-stack software developer who is
              comfortable moving between backend logic, frontend interfaces, product
              collaboration, and day-to-day delivery under real constraints.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70">
          <Image
            src="/images/about-visual.svg"
            alt="Abstract visual composition representing full-stack SaaS product work"
            width={1200}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Strengths"
          title="What I bring to a product team."
          description="These are the qualities that show up repeatedly in my recent work across live products and fast-moving requirements."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold text-white">{strength.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <SectionHeading
            eyebrow="Achievements"
            title="Early signals of initiative and competition."
          />
          <div className="mt-8 space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{achievement.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <SectionHeading
            eyebrow="Education"
            title="Engineering foundation"
            description="A technical background that shaped how I approach systems, problem-solving, and product thinking."
          />
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Degree</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{education.degree}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {education.institution}
            </p>
            <p className="mt-2 text-sm text-slate-400">Completed in {education.year}</p>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 p-6">
            <p className="text-sm leading-7 text-sky-100">
              My career since graduation has been shaped by shipping real client and product
              work quickly, then leveling up through ownership and breadth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
