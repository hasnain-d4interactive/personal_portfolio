import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { achievements, education, siteConfig, strengths } from "@/content/site";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn more about Ahmed Hasnain, a full-stack software developer focused on SaaS products, Laravel, React, Vue, Next.js, Python, and AI-assisted delivery workflows.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-24">
      <PageHero
        eyebrow="About Ahmed Hasnain"
        title="A software developer shaped by product work, delivery pressure, and curiosity."
        description={siteConfig.aboutSummary}
        actions={
          <Link
            href="/experience"
            className="rounded-full bg-[#382923] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5a3b30]"
          >
            View Experience
          </Link>
        }
        visual={
          <div className="mx-auto max-w-[320px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#ead6c7] bg-[linear-gradient(180deg,#fff8f2,#fbe8da)] p-3 shadow-[0_28px_80px_rgba(171,122,95,0.18)]">
              <Image
                src={siteConfig.portraitSrc}
                alt={siteConfig.portraitAlt}
                width={400}
                height={400}
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
          <SectionHeading
            eyebrow="Profile"
            title="My work is strongest where engineering supports clear business outcomes."
            description={siteConfig.summary}
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-[#6e5649]">
            <p>
              I enjoy building products that solve real operational problems. That has
              included link marketing and analytics, hospital software, ecommerce
              functionality, and now AI-assisted content operations.
            </p>
            <p>
              The common thread in my work is not a single framework. It is taking product
              ideas, clarifying what matters, and turning them into experiences that are
              usable, maintainable, and ready for production.
            </p>
            <p>
              Over the last year, I have also been using Claude, Codex, and ChatGPT
              extensively in a proper workflow to accelerate research, debugging,
              implementation support, and SaaS delivery while keeping engineering judgment
              in control.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-[#ead8cb] bg-white p-4 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
            <Image
              src="/images/about-visual.svg"
              alt="Creative abstract composition representing Ahmed Hasnain's full-stack SaaS and AI-assisted delivery work"
              width={1200}
              height={1200}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="rounded-[2rem] border border-[#e4c8b4] bg-[linear-gradient(145deg,#fff8f2,#ffe7d6)] p-6 shadow-[0_24px_70px_rgba(171,122,95,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
              AI-Assisted Delivery
            </p>
            <p className="mt-4 text-base leading-8 text-[#6b5347]">
              {siteConfig.aiWorkflowSummary}
            </p>
          </div>
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
              className="rounded-[1.75rem] border border-[#ead8cb] bg-white p-6 shadow-[0_18px_44px_rgba(171,122,95,0.08)]"
            >
              <h3 className="text-xl font-semibold text-[#2d211d]">{strength.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6e5649]">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
          <SectionHeading
            eyebrow="Achievements"
            title="Early signals of initiative and competition."
          />
          <div className="mt-8 space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="rounded-[1.5rem] border border-[#efe1d6] bg-[#fff9f3] p-5"
              >
                <h3 className="text-lg font-semibold text-[#2d211d]">{achievement.title}</h3>
                <p className="mt-2 text-sm text-[#6e5649]">{achievement.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ead8cb] bg-white p-8 shadow-[0_24px_70px_rgba(171,122,95,0.08)]">
          <SectionHeading
            eyebrow="Education"
            title="Engineering foundation"
            description="A technical background that shaped how I approach systems, problem-solving, and product thinking."
          />
          <div className="mt-8 rounded-[1.5rem] border border-[#efe1d6] bg-[#fff9f3] p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-[#9c7762]">Degree</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#2d211d]">{education.degree}</h3>
            <p className="mt-3 text-sm leading-7 text-[#6e5649]">
              {education.institution}
            </p>
            <p className="mt-2 text-sm text-[#8d7163]">Completed in {education.year}</p>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-[#e4c8b4] bg-[linear-gradient(145deg,#fff8f2,#ffe7d6)] p-6">
            <p className="text-sm leading-7 text-[#6a4b3c]">
              My career since graduation has been shaped by shipping real client and product
              work quickly, then leveling up through ownership, breadth, and modern
              AI-assisted execution habits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
