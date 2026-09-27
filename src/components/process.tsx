import Link from "next/link";
import { processSteps } from "@/data/site";
import { PenIcon, RocketIcon, TargetIcon } from "./icons";

const icons = {
  target: TargetIcon,
  pen: PenIcon,
  rocket: RocketIcon,
};

export function Process() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-6 pb-8 pt-4">
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {processSteps.map((step) => {
          const Icon = icons[step.icon];
          return (
            <article key={step.title} className="max-w-sm">
              <h2 className="flex items-center gap-2.5 text-[15px] font-semibold text-cream">
                <Icon className="h-[18px] w-[18px] shrink-0 text-cream/90" />
                {step.title}
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{step.body}</p>
              <Link
                href={step.href}
                className="mt-3 inline-flex items-center gap-1 text-[13.5px] text-cream underline decoration-cream/40 underline-offset-[5px] transition hover:decoration-cream"
              >
                {step.label}
                <span aria-hidden>→</span>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
