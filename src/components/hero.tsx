import "@fontsource/quantico/400-italic.css";
import "@fontsource/quantico/700.css";
import { SiteHeader } from "./site-header";
import { NexusSpellMark } from "./nexus-spell-mark";

export function Hero() {
  return (
    <section className="hero-tone relative h-[calc(100svh-72px)] min-h-[540px] overflow-hidden bg-black sm:min-h-[640px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero/flames.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--page)]" />

      <div className="relative z-10 flex h-full flex-col">
        <SiteHeader overlay />
        <div className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col items-center justify-center px-4 pb-16 text-center">
          <p
            className="mb-2 font-[Quantico,sans-serif] text-sm tracking-[0.18em] text-white uppercase italic sm:text-base"
            style={{ animation: "fadeInUp 0.8s ease-out both", animationDelay: "0.2s" }}
          >
            Welcome to
          </p>

          <div
            className="relative flex w-full max-w-[600px] items-center justify-center"
            style={{ animation: "fadeInUp 0.8s ease-out both", animationDelay: "0.5s" }}
          >
            <NexusSpellMark
              decorative
              className="pointer-events-none absolute w-[115%] text-[#2a2a2a]"
            />
            <NexusSpellMark className="relative z-10 w-[80%] text-[#edaf5f]" />
          </div>

          <h1
            className="mt-6 font-serif text-[clamp(1.85rem,4vw,2.85rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#f8e6cf]"
            style={{ animation: "fadeInUp 0.8s ease-out both", animationDelay: "0.65s" }}
          >
            Senior Software Engineer
          </h1>

          <p
            className="mt-4 max-w-xl font-[Quantico,sans-serif] text-xs tracking-[0.16em] text-white/85 uppercase italic sm:text-sm"
            style={{ animation: "fadeInUp 0.8s ease-out both", animationDelay: "0.8s" }}
          >
            The home of <span className="text-[#edaf5f]">code + AI</span>
          </p>

          <div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            style={{ animation: "fadeInUp 0.8s ease-out both", animationDelay: "1s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm border border-white/35 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:border-[#edaf5f] hover:text-[#edaf5f] sm:text-sm"
            >
              Projects
            </a>
            <a
              href="/skills"
              className="inline-flex items-center gap-2 rounded-sm border border-white/35 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:border-[#edaf5f] hover:text-[#edaf5f] sm:text-sm"
            >
              Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
