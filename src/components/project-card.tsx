import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-sky-400/30">
      <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] p-4">
        <Image
          src={project.media.src}
          alt={project.media.alt}
          width={1200}
          height={720}
          className="h-auto w-full rounded-[1.5rem] border border-white/10"
        />
      </div>
      <div className="space-y-5 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Case Study
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{project.tagline}</p>
        </div>

        <p className="text-sm leading-7 text-slate-400">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
        >
          Explore Project
        </Link>
      </div>
    </article>
  );
}
