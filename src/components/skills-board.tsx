"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import skills from "@/data/skills.json";
import { SiteHeader } from "./site-header";
import { SkillIcon, skillColors } from "./skill-icons";

type Skill = (typeof skills)[number];

const areas = [
  {
    label: "Frontend",
    description: "Building responsive, interactive UIs with React, Next.js, Vue.js, and modern CSS frameworks.",
  },
  {
    label: "Backend",
    description: "Creating robust APIs and server-side solutions with Node.js, Python, and various databases.",
  },
  {
    label: "Mobile",
    description: "Developing cross-platform mobile apps with React Native and Flutter.",
  },
  {
    label: "Blockchain",
    description: "Smart contracts, Solidity, Ethereum, and blockchain infrastructure",
  },
  {
    label: "Web3",
    description: "Decentralized applications, wallets, and Web3 ecosystem integration",
  },
  {
    label: "AI & ML",
    description: "Implementing AI solutions, ML models, and intelligent automation systems.",
  },
  {
    label: "DevOps",
    description: "Managing cloud infrastructure, CI/CD pipelines, and deployment automation.",
  },
];

const filters = [
  { id: "all", label: "All Skills", icon: "🎯" },
  { id: "frontend", label: "Frontend", icon: "🎨" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "mobile", label: "Mobile", icon: "📱" },
  { id: "blockchain", label: "Blockchain", icon: "⛓️" },
  { id: "ai", label: "AI & ML", icon: "🤖" },
  { id: "tools", label: "Tools", icon: "🛠️" },
] as const;

const filterLabels = new Map(filters.map((filter) => [filter.id, filter.label]));

export function SkillsExperience() {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");
  const [hovered, setHovered] = useState<Skill | null>(null);
  const [tip, setTip] = useState<{ x: number; y: number } | null>(null);
  const [area, setArea] = useState<string | null>(null);

  const visible = active === "all" ? skills : skills.filter((skill) => skill.categories.includes(active));

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[200px] overflow-hidden opacity-20 sm:h-[250px] md:h-[317px]" aria-hidden>
        <div className="absolute bottom-0 z-10 h-[100px] w-full bg-gradient-to-t from-[var(--page)] sm:h-[120px] md:h-[165px]" />
        <div className="relative h-full">
          <Image src="/skills/bg-apps.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </div>
      </div>
      <div className="relative z-10">
      <SiteHeader overlay />
      <section className="overflow-hidden py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-2xl font-semibold tracking-tight text-cream sm:mb-8 sm:text-3xl md:text-4xl">
            Skills <span className="mx-2 text-[#e6a23c]">&</span> Technologies
          </h1>
          <div className="flex w-full flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center">
            <p className="w-full text-base leading-relaxed text-cream/70 sm:text-lg lg:w-1/2">
              A passionate senior software engineer dedicated to creating innovative solutions that combine cutting-edge technology with creative excellence.
            </p>
            <div className="w-full space-y-2 lg:w-auto">
              <div className="flex flex-wrap items-center gap-2">
                {areas.slice(0, 3).map((item) => (
                  <AreaChip key={item.label} label={item.label} description={item.description} open={area === item.label} onOpen={setArea} />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {areas.slice(3).map((item) => (
                  <AreaChip key={item.label} label={item.label} description={item.description} open={area === item.label} onOpen={setArea} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap justify-start gap-2 sm:mb-12 sm:gap-3">
          {filters.map((filter) => {
            const selected = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition active:scale-95 sm:px-5 sm:py-3 sm:text-base ${selected ? "bg-[#f4e7d4] text-[#3d2422]" : "border border-cream/10 bg-[var(--card)]/80 text-cream/80 hover:text-cream"}`}
              >
                <span aria-hidden>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((skill) => {
            const color = skillColors[skill.color] ?? "#f8e6cf";
            return (
              <article
                key={skill.name}
                onMouseEnter={(event) => {
                  const box = event.currentTarget.getBoundingClientRect();
                  setHovered(skill);
                  setTip({ x: box.left + box.width / 2, y: box.top - 10 });
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setTip(null);
                }}
                className="cursor-pointer rounded-lg bg-[var(--card)]/70 p-3 backdrop-blur-sm transition hover:bg-white/5 sm:p-4"
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-black/30 sm:h-12 sm:w-12">
                    <SkillIcon name={skill.name} color={color} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-sm font-medium text-cream">{skill.name}</h2>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/30">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#e6a23c] to-[#f6d27a]" style={{ width: `${skill.level}%` }} />
                      </div>
                      <span className="shrink-0 text-xs text-muted">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        </div>
        {hovered && tip ? (
          <div className="pointer-events-none fixed z-50 w-[300px] -translate-x-1/2 -translate-y-full" style={{ left: tip.x, top: tip.y }}>
            <div className="rounded-lg border border-[var(--line)] bg-[#2a2428]/95 p-4 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-black/30">
                  <SkillIcon name={hovered.name} color={skillColors[hovered.color] ?? "#f8e6cf"} />
                </div>
                <div>
                  <p className="font-semibold text-cream">{hovered.name}</p>
                  <p className="text-xs text-muted">
                    {hovered.categories.map((id) => filterLabels.get(id as (typeof filters)[number]["id"]) ?? id).join(", ")}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-cream/80">{hovered.description}</p>
            </div>
          </div>
        ) : null}
      </section>

      <section className="bg-black/25 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-[#3ad1b0]/20 bg-[#3ad1b0]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#3ad1b0] uppercase">
              Continuous Growth
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-cream sm:text-3xl lg:text-4xl">
              Always <span className="text-[#e6a23c]">Learning</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Technology evolves rapidly, and so do I. I&apos;m constantly exploring new frameworks, tools, and methodologies to stay at the cutting edge of software development.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cream/75 sm:text-base">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#e6a23c]" />Exploring Rust for system programming</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#3ad1b0]" />Deep diving into AI/ML architectures</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#f4e7d4]" />Building with latest Web3 protocols</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#c084fc]" />Experimenting with edge computing</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Stat value="50+" label="Technologies" className="text-[#e6a23c]" />
            <Stat value="7+" label="Years Experience" className="text-[#3ad1b0]" />
            <Stat value="61+" label="Projects" className="text-[#f4e7d4]" />
            <Stat value="∞" label="Curiosity" className="text-[#c084fc]" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[var(--page)] via-[#0a0a0a] to-[var(--page)] px-4 py-12 text-center sm:px-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold text-cream sm:text-3xl lg:text-4xl">
          Ready to Build Something <span className="text-[#e6a23c]">Amazing</span>?
        </h2>
        <p className="mx-auto mt-4 mb-6 max-w-2xl text-base text-cream/70 sm:mb-8 sm:text-lg">
          Let&apos;s combine these skills to create innovative solutions that drive your business forward.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e6a23c] to-[#f6d27a] px-6 py-3 text-sm font-semibold text-[#3d2422] transition hover:scale-105 sm:px-8 sm:py-4 sm:text-base">
            Start a Project
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 bg-[var(--card)] px-6 py-3 text-sm font-semibold text-cream transition hover:border-[#e6a23c]/50 sm:px-8 sm:py-4 sm:text-base">
            View Projects
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        </div>
      </section>
      </div>
    </div>
  );
}

function AreaChip({
  label,
  description,
  open,
  onOpen,
}: {
  label: string;
  description: string;
  open: boolean;
  onOpen: (label: string | null) => void;
}) {
  return (
    <div className="relative" onMouseEnter={() => onOpen(label)} onMouseLeave={() => onOpen(null)}>
      <span className="inline-flex cursor-default rounded-full bg-black/25 px-3 py-1.5 text-xs text-[#f8e6cf]/80">{label}</span>
      {open ? (
        <span className="absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 rounded-lg bg-[#f4e7d4] px-3 py-2 text-xs leading-relaxed text-[#3d2422] shadow-lg">
          {description}
        </span>
      ) : null}
    </div>
  );
}

function Stat({ value, label, className }: { value: string; label: string; className: string }) {
  return (
    <div className="rounded-2xl border border-cream/10 bg-[var(--card)]/80 p-4 text-center backdrop-blur-sm sm:p-6">
      <p className={`text-2xl font-bold sm:text-3xl md:text-4xl ${className}`}>{value}</p>
      <p className="mt-1 text-xs text-cream/70 sm:mt-2 sm:text-sm">{label}</p>
    </div>
  );
}
