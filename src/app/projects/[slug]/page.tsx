import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { categories, getProject, isExternalProjectLink, projectImage, projects } from "@/data/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const category = categories.find((item) => item.id === project.category)?.label;
  const external = isExternalProjectLink(project.link);

  return (
    <PageShell eyebrow={category?.toUpperCase()} title={project.title} lede={project.description}>
      <div className="relative aspect-[16/8] overflow-hidden rounded-xl">
        <Image src={projectImage(project)} alt={project.title} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[var(--line)] p-5">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#e6a23c]">KEY FEATURES</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.features}</p>
        </div>
        <div className="rounded-xl border border-[var(--line)] p-5">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#3ad1b0]">IMPACT</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.impact}</p>
        </div>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        {external ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-full bg-[#e6a23c] px-5 text-sm font-semibold text-white"
          >
            View Project
          </a>
        ) : null}
        <Link href="/projects" className="text-sm text-cream underline underline-offset-4">
          All projects
        </Link>
      </div>
    </PageShell>
  );
}
