export function HeroArt() {
  return (
    <svg
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label="A classical temple and a spacecraft in a dark canyon"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#050505" />
          <stop offset="0.42" stopColor="#2a1206" />
          <stop offset="0.7" stopColor="#140a06" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
        <radialGradient id="templeGlow" cx="72%" cy="42%" r="34%">
          <stop offset="0" stopColor="#ffb03a" stopOpacity="0.9" />
          <stop offset="0.38" stopColor="#e25a12" stopOpacity="0.42" />
          <stop offset="1" stopColor="#e25a12" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hull" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7e2cf" />
          <stop offset="0.35" stopColor="#f0b48a" />
          <stop offset="0.72" stopColor="#d97858" />
          <stop offset="1" stopColor="#a45340" />
        </linearGradient>
        <linearGradient id="hullShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#4a2018" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3e2c4" />
          <stop offset="1" stopColor="#c9aa7c" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4fffb" />
          <stop offset="0.5" stopColor="#8fd0d4" />
          <stop offset="1" stopColor="#3e7f92" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <rect width="1440" height="640" fill="url(#sky)" />
      <rect width="1440" height="640" fill="url(#templeGlow)" />

      {Array.from({ length: 28 }).map((_, index) => (
        <circle
          key={index}
          cx={80 + ((index * 97) % 1280)}
          cy={30 + ((index * 53) % 220)}
          r={index % 4 === 0 ? 1.4 : 0.7}
          fill="#f6e6d4"
          opacity={index % 3 === 0 ? 0.55 : 0.28}
        />
      ))}

      <path
        d="M0 180 L70 150 L120 210 L180 120 L250 230 L310 160 L360 250 L0 340 Z"
        fill="#1a1418"
      />
      <path d="M0 250 L90 210 L150 280 L230 190 L300 300 L0 420 Z" fill="#120e13" />
      <path
        d="M1180 80 L1260 40 L1320 120 L1380 60 L1440 140 L1440 360 L1280 300 L1200 340 Z"
        fill="#1c151a"
      />
      <path d="M1260 160 L1340 120 L1440 210 L1440 420 L1300 360 Z" fill="#120e12" />

      <g opacity="0.9">
        <ellipse cx="690" cy="430" rx="210" ry="28" fill="#000" opacity="0.35" filter="url(#soft)" />
        <g transform="translate(500 168)">
          <polygon points="30,250 350,250 328,226 52,226" fill="#b8956c" />
          <polygon points="52,226 328,226 310,206 70,206" fill="url(#stone)" />
          <polygon points="70,206 310,206 294,188 86,188" fill="#ddc49a" />
          {Array.from({ length: 6 }).map((_, index) => (
            <g key={index} transform={`translate(${88 + index * 36} 96)`}>
              <rect width="18" height="92" rx="2" fill="url(#stone)" />
              <rect width="5" height="92" fill="#fff" opacity="0.28" />
              <rect x="16" width="2" height="92" fill="#8d6b45" opacity="0.35" />
            </g>
          ))}
          <rect x="78" y="86" width="224" height="14" fill="#e7d3ae" />
          <polygon points="48,86 332,86 190,18" fill="#edd9b4" />
          <polygon points="78,78 302,78 190,28" fill="#f7e7c8" opacity="0.45" />
          <rect x="176" y="48" width="28" height="16" fill="#c45a3a" opacity="0.85" />
        </g>
      </g>

      <g className="ship-drift">
        <g transform="translate(860 168) rotate(-14 180 90)">
          <ellipse cx="36" cy="98" rx="46" ry="22" fill="#ffb15a" opacity="0.55" filter="url(#soft)" />
          <ellipse cx="22" cy="98" rx="16" ry="8" fill="#fff4df" />
          <path
            d="M30 92c18-34 78-62 168-68 92-6 168 8 214 28 22 10 28 28 16 42-38 22-120 40-214 42-96 2-168-10-196-28-14-8-8-12 12-16Z"
            fill="url(#hull)"
          />
          <path
            d="M30 92c18-34 78-62 168-68 92-6 168 8 214 28 22 10 28 28 16 42-38 22-120 40-214 42-96 2-168-10-196-28-14-8-8-12 12-16Z"
            fill="url(#hullShade)"
          />
          <path d="M92 78c70 18 150 16 214-8" stroke="#fff6ea" strokeWidth="3" opacity="0.55" fill="none" />
          <path d="M110 104c60 10 120 6 168-10" stroke="#7a3b2e" strokeWidth="2" opacity="0.35" fill="none" />
          <ellipse cx="268" cy="78" rx="42" ry="28" fill="#d5ecec" />
          <ellipse cx="274" cy="74" rx="26" ry="16" fill="url(#glass)" />
          <path d="M86 46 48 8l58 28Z" fill="#e7a07a" />
          <path d="M96 118 46 164l62-28Z" fill="#c56b4e" />
          <rect x="70" y="86" width="22" height="10" rx="2" fill="#5c342c" opacity="0.45" />
          <rect x="150" y="70" width="28" height="8" rx="2" fill="#fff" opacity="0.28" />
          <circle cx="196" cy="92" r="3" fill="#fff1d4" />
          <circle cx="214" cy="96" r="2.2" fill="#7fd0c8" />
          <path d="M40 90h28" stroke="#f6d7bf" strokeWidth="4" strokeLinecap="round" />
        </g>
      </g>

      <path d="M980 430c80 40 180 30 280-20l180 40v190H900Z" fill="#161216" opacity="0.55" />
    </svg>
  );
}
