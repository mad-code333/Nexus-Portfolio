import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "How Nexus scopes, builds, and supports software.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="ABOUT"
      title="A senior engineer for the whole arc of the work."
      lede="I sit with the goal before the stack. Scope, budget, timeline, and what success looks like come first. Then the product gets designed, built, tested, and handed over with the documents a team needs to keep it running."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <article key={step.title} className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#3ad1b0]">0{index + 1}</p>
            <h2 className="mt-3 text-lg font-semibold text-cream">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
        The work spans full-stack web, mobile, enterprise software, and emerging systems — blockchain, automation, and applied AI — under the Nexus name. Code is the craft. AI is part of how the craft moves faster without getting sloppy.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 text-sm text-cream underline decoration-cream/40 underline-offset-4"
      >
        Get in touch
        <span aria-hidden>→</span>
      </Link>
    </PageShell>
  );
}
