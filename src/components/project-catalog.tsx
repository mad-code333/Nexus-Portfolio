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

type TriangleItem = {
  id: ProjectCategory;
  label: string;
  count: number;
};

type CellId = "peak" | "midL" | "midR" | "diam" | "botL" | "botC" | "botR";

/**
 * Extra-wide triangle: mid chambers get more horizontal room for full labels.
 * viewBox 0 0 520 360 — apex 260. cx/cy = stack center.
 */
const CELLS: { id: CellId; path: string; cx: number; cy: number }[] = [
  { id: "peak", path: "M260 14 L356 132 L164 132 Z", cx: 260, cy: 86 },
  { id: "midL", path: "M164 132 L260 132 L198 248 L52 248 Z", cx: 166, cy: 186 },
  { id: "midR", path: "M260 132 L356 132 L468 248 L322 248 Z", cx: 354, cy: 186 },
  { id: "diam", path: "M260 132 L322 248 L260 268 L198 248 Z", cx: 260, cy: 200 },
  { id: "botL", path: "M52 248 L198 248 L260 268 L90 348 L4 348 Z", cx: 114, cy: 286 },
  { id: "botC", path: "M260 268 L430 348 L90 348 Z", cx: 260, cy: 308 },
  { id: "botR", path: "M322 248 L468 248 L516 348 L430 348 L260 268 Z", cx: 406, cy: 286 },
];

const CELL_ORDER: CellId[] = ["peak", "midL", "midR", "diam", "botL", "botC", "botR"];

/** Short, wrap-friendly labels so every word stays inside its chamber. */
const displayLabel: Record<ProjectCategory, string> = {
  web: "Web\nDevelopment",
  blockchain: "Blockchain",
  bot: "Bots &\nAutomation",
  scraping: "Web\nScraping",
  mobile: "Mobile\nApps",
  software: "Software",
  ai: "AI & ML",
};

export function ProjectCatalog() {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const ranked = useMemo(() => {
    const tally = new Map<ProjectCategory, number>();
    for (const project of projects) {
      tally.set(project.category, (tally.get(project.category) ?? 0) + 1);
    }
    return [...categories]
      .map((item) => ({
        id: item.id,
        label: item.label,
        count: tally.get(item.id) ?? 0,
      }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, []);

  const cellItems = useMemo(() => {
    const map = new Map<CellId, TriangleItem>();
    CELL_ORDER.forEach((cellId, index) => {
      const item = ranked[index];
      if (item) map.set(cellId, item);
    });
    return map;
  }, [ranked]);

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
  const activeLabel =
    category === "all" ? "All Projects" : (categoryLabels.get(category) ?? "Projects");

  function selectCategory(next: ProjectCategory | "all") {
    setCategory(next);
    setShowAll(false);
  }

  return (
    <section className="mx-auto w-full max-w-[1180px] px-6 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#3ad1b0]">PROJECT ARCHIVE</p>
        <h1 className="mt-3 font-serif text-[2rem] font-medium tracking-[-0.02em] text-cream md:text-[2.5rem]">
          Browse by craft
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Seven chambers in one triangle — widened so every label reads in full.
        </p>
        <div className="relative mt-6">
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setShowAll(false);
            }}
            placeholder="Search projects..."
            className="h-12 w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 text-sm text-cream outline-none ring-[#e6a23c] placeholder:text-muted focus:ring-2"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <button
          type="button"
          onClick={() => selectCategory("all")}
          className={`mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            category === "all"
              ? "border-[#e6a23c]/55 bg-[#e6a23c]/15 text-[#edaf5f]"
              : "border-[var(--line)] bg-[var(--card)] text-cream/80 hover:border-cream/30 hover:text-cream"
          }`}
        >
          <CategoryGlyph name="all" className="h-4 w-4" />
          All Projects
          <span className="rounded-full bg-black/25 px-2 py-0.5 text-xs text-cream/70">{projects.length}</span>
        </button>

        <div className="w-full max-w-[720px] sm:max-w-[860px]">
          <svg
            viewBox="0 0 520 360"
            className="h-auto w-full drop-shadow-[0_12px_40px_rgba(230,162,60,0.12)]"
            role="img"
            aria-label="Category triangle with seven equal chambers"
          >
            <defs>
              <linearGradient id="tri-wash" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#e6a23c" stopOpacity="0.2" />
                <stop offset="45%" stopColor="#3ad1b0" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#e6a23c" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="cell-idle" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#1a1612" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0c0b0a" stopOpacity="0.92" />
              </linearGradient>
              <linearGradient id="cell-active" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#e6a23c" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#e6a23c" stopOpacity="0.14" />
              </linearGradient>
              <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#e6a23c" floodOpacity="0.45" />
              </filter>
            </defs>

            <polygon points="260,14 516,348 4,348" fill="url(#tri-wash)" stroke="#edaf5f" strokeWidth="2.4" />

            {CELLS.map((cell) => {
              const item = cellItems.get(cell.id);
              if (!item) return null;
              const active = category === item.id;
              const featured = cell.id === "peak" || cell.id === "diam";
              const lines = displayLabel[item.id].split("\n");
              const icon = featured ? 22 : 18;
              const lineH = 13;
              const gap = 5;
              const countGap = 4;
              const stackH = icon + gap + lines.length * lineH + countGap + 12;
              const top = cell.cy - stackH / 2;
              const iconStroke = featured
                ? "rgba(230,162,60,0.55)"
                : active
                  ? "rgba(58,209,176,0.5)"
                  : "rgba(255,255,255,0.18)";
              const iconFill = featured
                ? "rgba(230,162,60,0.18)"
                : active
                  ? "rgba(58,209,176,0.15)"
                  : "rgba(0,0,0,0.5)";
              const iconColor = featured ? "#edaf5f" : active ? "#3ad1b0" : "#f3ebe2";
              const glyph = featured ? 12 : 10;
              return (
                <g key={cell.id} className="cursor-pointer" onClick={() => selectCategory(item.id)}>
                  <path
                    d={cell.path}
                    fill={active ? "url(#cell-active)" : "url(#cell-idle)"}
                    stroke={active ? "#edaf5f" : "rgba(237,175,95,0.45)"}
                    strokeWidth={active ? 2.2 : 1.4}
                    className="transition-[fill,stroke] duration-200 hover:fill-[rgba(230,162,60,0.22)]"
                    filter={active && featured ? "url(#soft-glow)" : undefined}
                  />
                  <g className="pointer-events-none" aria-hidden>
                    <rect
                      x={cell.cx - icon / 2}
                      y={top}
                      width={icon}
                      height={icon}
                      rx={featured ? 7 : 6}
                      fill={iconFill}
                      stroke={iconStroke}
                      strokeWidth={1.2}
                    />
                    <g
                      transform={`translate(${cell.cx - glyph / 2} ${top + (icon - glyph) / 2})`}
                      color={iconColor}
                    >
                      <CategoryGlyph name={item.id} size={glyph} />
                    </g>
                    {lines.map((line, index) => (
                      <text
                        key={line}
                        x={cell.cx}
                        y={top + icon + gap + (index + 1) * lineH - 2}
                        textAnchor="middle"
                        fill="#f3ebe2"
                        fontSize={11}
                        fontWeight={600}
                      >
                        {line}
                      </text>
                    ))}
                    <text
                      x={cell.cx}
                      y={top + icon + gap + lines.length * lineH + countGap + 10}
                      textAnchor="middle"
                      fill="#edaf5f"
                      fontSize={12}
                      fontWeight={700}
                    >
                      {item.count}
                    </text>
                  </g>
                  <title>{`${item.label} — ${item.count} projects`}</title>
                </g>
              );
            })}
          </svg>
        </div>

        <p className="mt-5 text-sm text-muted">
          Showing <span className="font-semibold text-[#e6a23c]">{visible.length}</span> of{" "}
          <span className="font-semibold text-cream">{filtered.length}</span> in{" "}
          <span className="font-semibold text-cream">{activeLabel}</span>
        </p>
      </div>

      <div className="mt-10 min-w-0">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <h3 className="font-serif text-3xl text-cream">No Projects Found</h3>
            <p className="mt-2 text-sm text-muted">Try adjusting your search or filter criteria</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                selectCategory("all");
              }}
              className="mt-4 text-sm font-medium text-[#e6a23c]"
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
                  className="inline-flex h-12 items-center rounded-full bg-[#e6a23c] px-6 text-sm font-semibold text-white"
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

function CategoryGlyph({
  name,
  className,
  size,
}: {
  name: ProjectCategory | "all";
  className?: string;
  size?: number;
}) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    className,
    width: size,
    height: size,
    "aria-hidden": true as const,
  };
  if (name === "all") {
    return (
      <svg {...props}>
        <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "web") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 12h15M12 4.5c2.2 2.4 3.3 5 3.3 7.5S14.2 17.1 12 19.5c-2.2-2.4-3.3-5-3.3-7.5S9.8 6.9 12 4.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (name === "mobile") {
    return (
      <svg {...props}>
        <rect x="8" y="3.5" width="8" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "software") {
    return (
      <svg {...props}>
        <rect x="3.5" y="5" width="17" height="11" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 19.5h6M12 16v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "bot") {
    return (
      <svg {...props}>
        <rect x="5" y="8" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 4.5v3.5M9 12.5h.01M15 12.5h.01M9 15.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "blockchain") {
    return (
      <svg {...props}>
        <path d="M12 3.5 18 7v10l-6 3.5L6 17V7l6-3.5Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
        <path d="M12 12 18 7M12 12 6 7M12 12v10.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (name === "ai") {
    return (
      <svg {...props}>
        <path
          d="M9.2 5.2a2.6 2.6 0 0 1 2.8-2 2.6 2.6 0 0 1 2.8 2c1.4.2 2.5 1.4 2.5 2.9 0 .5-.1 1-.4 1.4 1 .6 1.6 1.7 1.6 2.9 0 1.4-.8 2.6-2 3.2v1.6c0 1.3-1 2.3-2.3 2.3h-.6c-.4 1-1.4 1.7-2.6 1.7s-2.2-.7-2.6-1.7h-.6c-1.3 0-2.3-1-2.3-2.3v-1.6c-1.2-.6-2-1.8-2-3.2 0-1.2.6-2.3 1.6-2.9-.3-.4-.4-.9-.4-1.4 0-1.5 1.1-2.7 2.5-2.9Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M4 7h8l2 2h6v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 13h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
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
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#e6a23c]">KEY FEATURES</p>
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
          className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-cream hover:text-[#e6a23c]"
        >
          View Project
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
