import { SiteHeader } from "./site-header";
import { HeroArt } from "./hero-art";

export function Hero() {
  return (
    <section className="hero-tone relative h-[540px] overflow-hidden bg-[#140f14] sm:h-[580px]">
      <div className="absolute inset-0">
        <HeroArt />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#161216_0%,rgba(22,18,22,0.78)_32%,rgba(22,18,22,0.18)_58%,rgba(22,18,22,0.28)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[var(--page)]" />
      <div className="relative z-10 flex h-full flex-col">
        <SiteHeader overlay />
        <div className="mx-auto flex w-full max-w-[1120px] flex-1 items-center px-6 pb-16">
          <div className="max-w-xl">
            <h1 className="font-serif text-[clamp(2.6rem,5vw,4.15rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[#f8e6cf]">
              Senior software
              <br />
              engineer
            </h1>
            <p className="mt-5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-[#f8e6cf]/85">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d86555]" />
              CODE + AI
            </p>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-3 text-sm text-[#f8e6cf] transition hover:text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d86555] shadow-[0_8px_20px_rgba(216,101,85,0.35)]">
                <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden>
                  <path d="M0 0.8 9.2 6 0 11.2Z" fill="white" />
                </svg>
              </span>
              View my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
