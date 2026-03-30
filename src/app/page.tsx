import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import {
  experienceEntries,
  focusAreas,
  heroStats,
  projects,
  siteConfig,
  skills,
  strengths,
} from "@/content/site";

export default function Home() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="Ahmed Hasnain"
        title="Building SaaS products across marketing tech, content workflows, and modern web stacks."
        description={siteConfig.intro}
        actions={
          <>
            <Link
              href="/projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
            >
              View Case Studies
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Contact Me
            </Link>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Featured Work"
          title="Real product experience, not just isolated demo builds."
          description="The strongest proof in my portfolio comes from products used by growth teams, content teams, and operational software environments."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <SectionHeading
            eyebrow="How I Work"
            title="A practical engineer with product context."
            description="I enjoy the kind of work where backend reliability, frontend clarity, and product execution all need to move together."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{strength.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(9,14,27,0.92))] p-8">
          <SectionHeading
            eyebrow="Stack"
            title="Built on strong web fundamentals."
            description="My background started in Laravel and Vue, expanded into React and Next.js, and now includes Python-connected product work."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-100"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Focus Areas
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/[0.06] px-4 py-2 text-sm text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <SectionHeading
          eyebrow="Experience Snapshot"
          title="Recent roles across SaaS, healthcare software, ecommerce, and client delivery."
          description="My experience mixes long-running product work with feature ownership, stakeholder collaboration, and production support."
        />
        <div className="mt-8 space-y-6">
          {experienceEntries.slice(0, 3).map((entry) => (
            <div
              key={`${entry.company}-${entry.role}`}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {entry.role} · {entry.company}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{entry.summary}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  {entry.start} - {entry.end}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/experience"
            className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
          >
            Explore Full Experience
          </Link>
        </div>
      </section>

      <section className="rounded-[2rem] border border-sky-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(12,18,38,0.94))] p-8 md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
              Let&apos;s Build
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Looking for a developer who can ship real product work with care and consistency.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              I am most valuable in product teams where engineering quality, user experience,
              and delivery momentum all matter.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
            >
              Email Me
            </a>
            <a
              href={siteConfig.resumeHref}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
