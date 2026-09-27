"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  categories,
  isExternalProjectLink,
  projectImage,
  projects,
  type PortfolioProject,
  type ProjectCategory,
} from "@/data/portfolio";

const categoryLabels = new Map(categories.map((category) => [category.id, category.label]));

export function ProjectCatalog() {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const counts = useMemo(() => {
    const tally = new Map<string, number>();
    for (const project of projects) {
      tally.set(project.category, (tally.get(project.category) ?? 0) + 1);
    }
    return tally;
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects.filter((project) => {
      if (category !== "all" && project.category !== category) return false;
      if (!needle) return true;
      return (
        project.title.toLowerCase().includes(needle) ||
        project.description.toLowerCase().includes(needle) ||
        project.technologies.some((tag) => tag.toLowerCase().includes(needle))
      );
    });
  }, [category, query]);

  const visible = showAll ? filtered : filtered.slice(0, 9);

  return (
    <section className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-6 py-14 lg:flex-row lg:py-20">
      <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-60 lg:self-start">
        <h2 className="text-sm font-semibold text-cream">Search</h2>
        <div className="relative mt-3">
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setShowAll(false);
            }}
            placeholder="Search projects..."
            className="h-11 w-full rounded-xl border border-[var(--line)] bg-[var(--card)] px-3 text-sm text-cream outline-none ring-[#d86555] placeholder:text-muted focus:ring-2"
          />
        </div>
        <h2 className="mt-8 text-sm font-semibold text-cream">Categories</h2>
        <div className="mt-3 flex flex-col gap-1">
          <CategoryButton
            active={category === "all"}
            label="All Projects"
            count={projects.length}
            onClick={() => {
              setCategory("all");
              setShowAll(false);
            }}
          />
          {categories.map((item) => (
            <CategoryButton
              key={item.id}
              active={category === item.id}
              label={item.label}
              count={counts.get(item.id) ?? 0}
              onClick={() => {
                setCategory(item.id);
                setShowAll(false);
              }}
            />
          ))}
        </div>
        <p className="mt-6 border-t border-[var(--line)] pt-4 text-sm text-muted">
          Showing <span className="font-semibold text-[#d86555]">{visible.length}</span> of{" "}
          <span className="font-semibold text-cream">{filtered.length}</span> projects
        </p>
      </aside>

      <div className="min-w-0 flex-1">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <h3 className="font-serif text-3xl text-cream">No Projects Found</h3>
            <p className="mt-2 text-sm text-muted">Try adjusting your search or filter criteria</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
                setShowAll(false);
              }}
              className="mt-4 text-sm font-medium text-[#d86555]"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {filtered.length > 9 ? (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setShowAll((value) => !value)}
                  className="inline-flex h-12 items-center rounded-full bg-[#d86555] px-6 text-sm font-semibold text-white"
                >
                  {showAll ? "Show Less" : `View All ${filtered.length} Projects`}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}

function CategoryButton({
  active,
  label,
  count,
  onClick,
}: {
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between rounded-lg px-2 py-2 text-left text-sm ${active ? "text-cream" : "text-muted hover:text-cream"}`}
    >
      <span>{label}</span>
      <span className="rounded-full border border-[var(--line)] px-2 text-xs">{count}</span>
    </button>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  const [open, setOpen] = useState(false);
  const tags = open ? project.technologies : project.technologies.slice(0, 4);
  const hidden = project.technologies.length - tags.length;
  const external = isExternalProjectLink(project.link);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card)]">
      <div className="relative aspect-video bg-black/30">
        <Image src={projectImage(project)} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle details"
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/40 text-white"
        >
          <svg viewBox="0 0 24 24" className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-cream">{project.title}</h3>
          <span className="shrink-0 rounded-full border border-[var(--line)] px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">
            {categoryLabels.get(project.category)}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{project.description}</p>
        {open ? (
          <div className="mt-3 space-y-2 text-sm">
            <div className="rounded-lg border border-[var(--line)] p-3">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#d86555]">KEY FEATURES</p>
              <p className="mt-1 text-muted">{project.features}</p>
            </div>
            <div className="rounded-lg border border-[var(--line)] p-3">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#3ad1b0]">IMPACT</p>
              <p className="mt-1 text-muted">{project.impact}</p>
            </div>
          </div>
        ) : null}
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
          {hidden > 0 ? <li className="tag">+{hidden}</li> : null}
        </ul>
        <a
          href={project.link}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-cream hover:text-[#d86555]"
        >
          View Project
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
