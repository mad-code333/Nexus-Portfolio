import { expertise } from "@/data/site";

const tones = {
  rose: "bg-[#e6a23c] text-[#1a1208]",
  ink: "border border-[var(--line)] bg-[var(--card)] text-cream",
  teal: "bg-[#14685e] text-[#f4fff9]",
};

export function Expertise() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-6 pb-20 pt-10 md:pb-28">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-[#3ad1b0]">CORE EXPERTISE</p>
      <h2 className="mt-3 max-w-xl font-serif text-[2rem] font-medium leading-tight tracking-[-0.02em] text-cream md:text-[2.35rem]">
        Enterprise-Grade Solutions
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
        Delivering comprehensive full-stack solutions with modern frameworks, scalable cloud infrastructure, and industry-leading practices that drive business growth and operational excellence.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {expertise.map((item) => (
          <article key={item.title} className={`min-h-[250px] rounded-xl p-6 ${tones[item.tone]}`}>
            {item.tone === "ink" ? <ApiMark /> : null}
            <h3 className={`text-[17px] font-semibold ${item.tone === "ink" ? "mt-4 text-center" : ""}`}>{item.title}</h3>
            <p className={`mt-3 text-[13.5px] leading-relaxed ${item.tone === "rose" ? "text-[#4a2c2a]/90" : item.tone === "ink" ? "text-center text-muted" : "text-white/85"}`}>
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ApiMark() {
  return (
    <svg viewBox="0 0 160 110" className="mx-auto h-24 w-36" aria-hidden>
      <circle cx="80" cy="48" r="34" fill="none" stroke="#7d8ea8" strokeWidth="1.4" />
      <circle cx="28" cy="28" r="8" fill="#60a5fa" />
      <circle cx="132" cy="30" r="7" fill="#34d399" />
      <circle cx="126" cy="84" r="6" fill="#f59e0b" />
      <rect x="58" y="30" width="44" height="34" rx="6" fill="#10141c" stroke="#d7deea" />
      <text x="80" y="52" textAnchor="middle" fill="#f8fafc" fontSize="12" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        API
      </text>
    </svg>
  );
}
