"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SunIcon, UserIcon } from "./icons";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Logo({ prominent = false }: { prominent?: boolean }) {
  return (
    <Link
      href="/home"
      className={`flex items-center tracking-tight ${prominent ? "gap-2 text-2xl font-bold text-[#d86555]" : "gap-2.5 text-[15px] font-semibold text-cream"}`}
    >
      <span
        className={`grid place-items-center rounded-full bg-[#d86555] font-bold text-white ${prominent ? "h-10 w-10 text-base" : "h-6 w-6 text-[12px]"}`}
      >
        N
      </span>
      Nexus
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    if (next === "light") {
      document.documentElement.dataset.theme = "light";
    } else {
      delete document.documentElement.dataset.theme;
    }
    document.cookie = `nexora-theme=${next}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <header className={overlay ? "relative z-20" : "sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-md"}>
      <div className="mx-auto flex h-[72px] w-full max-w-[1120px] items-center justify-between px-6">
        <Logo />
        <div className="flex items-center gap-7">
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] transition-colors ${active ? "text-cream" : "text-cream/75 hover:text-cream"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="grid h-8 w-8 place-items-center rounded-full border border-[var(--line)] text-cream/90 transition hover:border-cream/40"
          >
            <SunIcon className="h-4 w-4" />
          </button>
          <Link
            href="/contact"
            aria-label="Contact"
            className="grid h-8 w-8 place-items-center rounded-full border border-[var(--line)] text-cream/90 transition hover:border-cream/40"
          >
            <UserIcon className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-full border border-[var(--line)] text-cream md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="flex w-3.5 flex-col gap-1">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-[var(--line)] px-6 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
