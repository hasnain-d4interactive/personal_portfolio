import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/content/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Reveal>
      <article className="group reeni-shell overflow-hidden transition duration-300 hover:-translate-y-1">
        <div className="p-5">
          <div className="overflow-hidden rounded-[1.75rem]">
            <Image
              src={project.media.src}
              alt={project.media.alt}
              width={1200}
              height={720}
              className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-[340px]"
            />
          </div>
        </div>
        <div className="space-y-5 px-6 pb-6">
          <div>
            <p className="reeni-eyebrow text-base">{project.name}</p>
            <h3 className="mt-3 text-[2.1rem] font-bold text-[var(--text-strong)] md:text-[2.35rem]">
              {project.tagline}
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">{project.summary}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--text-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-3 text-sm font-medium text-[var(--text-strong)] transition hover:border-[rgba(20,20,20,0.18)] hover:bg-[var(--accent)]"
            >
              View Design
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
