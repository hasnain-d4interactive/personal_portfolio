import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#ebd7ca] bg-white shadow-[0_26px_60px_rgba(171,122,95,0.12)] transition hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(171,122,95,0.18)]">
      <div className="border-b border-[#f0e0d6] bg-[linear-gradient(180deg,#fff9f3,#fff3ea)] p-4">
        <Image
          src={project.media.src}
          alt={project.media.alt}
          width={1200}
          height={720}
          className="h-auto w-full rounded-[1.5rem] border border-[#f1ddd1]"
        />
      </div>
      <div className="space-y-5 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a16d53]">
            Case Study
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#2d211d]">{project.name}</h3>
          <p className="mt-3 text-sm leading-7 text-[#6e5649]">{project.tagline}</p>
        </div>

        <p className="text-sm leading-7 text-[#7e6558]">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#e9d5c8] bg-[#fff8f1] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#7e6558]"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center rounded-full bg-[#382923] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#5a3b30]"
        >
          Explore Project
        </Link>
      </div>
    </article>
  );
}
