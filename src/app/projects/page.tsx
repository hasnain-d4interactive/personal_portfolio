import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { projects, secondaryBuilds } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects and case studies by Ahmed Hasnain, including Replug, ContentPen, and selected engineering highlights across SaaS and business software.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-24">
      <PageHero
        eyebrow="Projects"
        title="Case studies centered on live products and meaningful engineering work."
        description="I prefer showing product context, contribution areas, and technical focus over listing a long grid of disconnected demos."
      />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Featured"
          title="Two products that best represent my current direction."
          description="These case studies show the transition from marketing technology and analytics-heavy SaaS into AI-assisted content operations."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <SectionHeading
          eyebrow="Additional Work"
          title="Other engineering highlights from previous roles."
          description="These are useful signals of range, especially across operational software and business-critical systems."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {secondaryBuilds.map((build) => (
            <article
              key={build.name}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{build.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {build.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
