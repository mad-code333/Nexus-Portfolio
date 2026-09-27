import { expertiseFeatures, expertiseSkills } from "@/data/site";

export function Expertise() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-6 pb-20 pt-10 md:pb-28">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-[#3ad1b0]">CORE EXPERTISE</p>
      <h2 className="mt-3 max-w-2xl font-serif text-[2rem] font-medium leading-tight tracking-[-0.02em] text-cream md:text-[2.5rem]">
        Enterprise-Grade Solutions
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#c4a574] md:text-[15px]">
        Delivering comprehensive full-stack solutions with modern frameworks, scalable cloud infrastructure, and
        industry-leading practices that drive business growth and operational excellence.
      </p>

      <div className="mt-10 grid auto-rows-fr gap-3 sm:gap-4 lg:grid-cols-3 lg:grid-rows-[minmax(180px,1fr)_minmax(180px,1fr)]">
        {expertiseFeatures.map((item) => (
          <FeatureCard key={item.title} title={item.title} kind={item.kind} />
        ))}
      </div>

      <ul className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseSkills.slice(0, 6).map((skill) => (
          <li key={skill.title} className="flex items-center gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#3ad1b0]/10 text-[#3ad1b0]">
              <SkillIcon name={skill.icon} />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-cream">{skill.title}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:max-w-2xl">
        {expertiseSkills.slice(6).map((skill) => (
          <li key={skill.title} className="flex items-center gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center text-cream">
              <SkillIcon name={skill.icon} />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-cream">{skill.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FeatureCard({
  title,
  kind,
}: {
  title: string;
  kind: (typeof expertiseFeatures)[number]["kind"];
}) {
  const layout =
    kind === "architecture"
      ? "lg:row-span-2 min-h-[320px] lg:min-h-0 bg-[#1a0f0c] border border-[#3a2018]"
      : kind === "ux"
        ? "min-h-[180px] bg-[#0d2a26] border border-[#1a4a42]"
        : "min-h-[180px] border border-[var(--line)] bg-[var(--card)]";

  return (
    <article className={`relative flex flex-col overflow-hidden rounded-2xl p-5 sm:p-6 ${layout}`}>
      <h3 className="relative z-10 text-[16px] font-semibold tracking-tight text-cream sm:text-[17px]">{title}</h3>
      <div className="relative z-10 mt-auto flex flex-1 items-end justify-center pt-6">
        {kind === "architecture" ? <ArchitectureMark /> : null}
        {kind === "api" ? <ApiMark /> : null}
        {kind === "ux" ? <CodeMark /> : null}
        {kind === "clean" ? <DeskMark /> : null}
        {kind === "cloud" ? <CloudMark /> : null}
      </div>
    </article>
  );
}

function ArchitectureMark() {
  return (
    <svg viewBox="0 0 220 200" className="h-44 w-full max-w-[220px] sm:h-52" aria-hidden>
      <defs>
        <radialGradient id="arch-glow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#ff6b3d" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ff6b3d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="arch-face" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8a5c" />
          <stop offset="100%" stopColor="#c23018" />
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="150" rx="90" ry="40" fill="url(#arch-glow)" />
      {/* isometric cube */}
      <path d="M110 48 168 78v68l-58 30-58-30V78Z" fill="#2a1210" opacity="0.35" />
      <path d="M110 56 158 82v56l-48 26-48-26V82Z" fill="url(#arch-face)" />
      <path d="M110 56 158 82l-48 26-48-26Z" fill="#ffb08a" />
      <path d="M110 108 158 82v56l-48 26Z" fill="#e04520" />
      <path d="M110 108 62 82v56l48 26Z" fill="#a82812" />
      <path d="M110 70 138 85v28l-28 15-28-15V85Z" fill="#1a0a08" opacity="0.35" />
      <circle cx="110" cy="100" r="8" fill="#ffd0b8" opacity="0.9" />
    </svg>
  );
}

function ApiMark() {
  return (
    <svg viewBox="0 0 180 120" className="h-28 w-40" aria-hidden>
      <circle cx="90" cy="56" r="40" fill="none" stroke="#4a5568" strokeWidth="1.2" strokeDasharray="3 5" />
      <circle cx="90" cy="56" r="28" fill="none" stroke="#6b7c93" strokeWidth="1.2" />
      <circle cx="42" cy="30" r="7" fill="#60a5fa" />
      <circle cx="140" cy="28" r="6" fill="#34d399" />
      <circle cx="148" cy="78" r="5.5" fill="#f59e0b" />
      <circle cx="38" cy="82" r="5" fill="#38bdf8" />
      <line x1="90" y1="56" x2="42" y2="30" stroke="#4a5568" strokeWidth="1" />
      <line x1="90" y1="56" x2="140" y2="28" stroke="#4a5568" strokeWidth="1" />
      <line x1="90" y1="56" x2="148" y2="78" stroke="#4a5568" strokeWidth="1" />
      <line x1="90" y1="56" x2="38" y2="82" stroke="#4a5568" strokeWidth="1" />
      <rect x="68" y="40" width="44" height="32" rx="7" fill="#10141c" stroke="#d7deea" strokeWidth="1.4" />
      <text x="90" y="61" textAnchor="middle" fill="#f8fafc" fontSize="12" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        API
      </text>
    </svg>
  );
}

function CodeMark() {
  return (
    <div className="mb-1 grid h-24 w-28 place-items-center rounded-xl bg-[#14685e] sm:h-28 sm:w-32">
      <span className="font-mono text-3xl font-semibold tracking-tight text-[#e8fff8] sm:text-4xl">{`</>`}</span>
    </div>
  );
}

function DeskMark() {
  return (
    <svg viewBox="0 0 160 100" className="h-24 w-36" aria-hidden>
      <rect x="58" y="18" width="48" height="34" rx="3" fill="#1e2430" stroke="#8a93a5" strokeWidth="1.3" />
      <rect x="64" y="24" width="36" height="20" rx="1.5" fill="#0d1118" />
      <path d="M70 30h10M70 35h16M70 40h8" stroke="#3ad1b0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M78 52h8v4h-8Z" fill="#8a93a5" />
      <ellipse cx="82" cy="58" rx="18" ry="3" fill="#2a3140" />
      <circle cx="48" cy="48" r="8" fill="#c4a574" />
      <path d="M40 58c2-8 8-12 16-12s14 4 16 12" fill="#2a3140" />
      <path d="M36 78h72" stroke="#5a6478" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 78v12M100 78v12" stroke="#5a6478" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloudMark() {
  return (
    <svg viewBox="0 0 140 90" className="h-20 w-32 text-[#8a93a5]" aria-hidden>
      <path
        d="M38 58a18 18 0 0 1 4-35 24 24 0 0 1 46 6 18 18 0 0 1 6 35Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M52 68h40M60 76h24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function SkillIcon({ name }: { name: (typeof expertiseSkills)[number]["icon"] }) {
  const cls = "h-5 w-5";
  if (name === "frameworks") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    );
  }
  if (name === "performance") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
        <path d="M4 16a8 8 0 0 1 14.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 12l5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "responsive") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
        <rect x="2.5" y="5" width="12" height="9" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 16.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="15" y="8" width="6.5" height="11" rx="1.3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 16.5h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "testing") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
        <path
          d="M12 3.5 18.5 6v5.2c0 4.2-2.7 7.2-6.5 8.8-3.8-1.6-6.5-4.6-6.5-8.8V6L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="m9.2 12 1.8 1.8 3.8-3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "agile") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
        <path d="M6.5 9.5A5.5 5.5 0 0 1 17 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 14.5A5.5 5.5 0 0 1 7 16.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m15 4.5 2.2 2.7-3 .4M9 19.5 6.8 16.8l3-.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "learning") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden>
        <path d="M3.5 9.5 12 5l8.5 4.5L12 14 3.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 11.5v4.2c0 .8 2.2 2.3 5 2.3s5-1.5 5-2.3v-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20.5 9.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "opensource") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.5" cy="8.5" r="2.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 17.5c.9-2.2 2.6-3.3 4.5-3.3s3.6 1.1 4.5 3.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.2 14.5c.7-.4 1.5-.6 2.4-.6 1.6 0 3 .8 3.9 2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
