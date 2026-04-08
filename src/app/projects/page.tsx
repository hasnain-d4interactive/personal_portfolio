import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects, secondaryBuilds } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Portfolio projects and case studies by Ahmed Hasnain, including Replug, ContentPen, and selected engineering highlights across SaaS and business software.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="space-y-20 md:space-y-28">
      <PageHero
        eyebrow="Projects"
        title="Case studies centered on live products and meaningful engineering work."
        description="I prefer showing product context, contribution areas, and technical focus over listing a long grid of disconnected demos."
      />

      <section className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Featured"
            title="Transforming ideas into exceptional product work."
            description="These case studies show the transition from marketing technology and analytics-heavy SaaS into AI-assisted content operations and modern product delivery."
            align="center"
          />
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap justify-center gap-3">
          {["All", "Branding", "Design", "Content writing", "Marketing"].map((item, index) => (
            <span
              key={item}
              className={[
                "rounded-full px-5 py-3 text-sm font-medium",
                index === 0
                  ? "bg-[var(--accent)] text-[var(--text-strong)]"
                  : "border border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--text-strong)]",
              ].join(" ")}
            >
              {item}
            </span>
          ))}
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="reeni-shell p-8 md:p-10">
        <Reveal>
          <SectionHeading
            eyebrow="Additional Work"
            title="Other engineering highlights from previous roles."
            description="These give useful evidence of range across operational software, commerce systems, and business-critical delivery."
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {secondaryBuilds.map((build, index) => (
            <Reveal
              key={build.name}
              delay={index * 70}
              className="rounded-[1.8rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-6"
            >
              <h3 className="text-[2rem] font-bold text-[var(--text-strong)]">{build.name}</h3>
              <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                {build.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
