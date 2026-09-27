import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ServiceGlyph } from "@/components/icons";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Web, mobile, enterprise software, and blockchain and AI work.",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="SERVICES"
      title="What the engagement covers."
      lede="Full-stack product work, from the first scope conversation through launch and the support that follows."
    >
      <ul className="grid gap-5">
        {services.map((service) => (
          <li key={service.title} className="flex gap-4 rounded-xl border border-[var(--line)] bg-[var(--card)] p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#141214] text-[#f8e6cf]">
              <ServiceGlyph name={service.icon} className="h-5 w-5" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-semibold text-cream">{service.title}</h2>
                <span className="rounded-full bg-[#16382f] px-2 py-0.5 text-[10px] font-medium text-[#9ee8cf]">
                  {service.badge}
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{service.summary}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="mt-8 inline-flex text-sm font-semibold tracking-[0.14em] text-[#3ad1b0]">
        GET IN TOUCH →
      </Link>
    </PageShell>
  );
}
