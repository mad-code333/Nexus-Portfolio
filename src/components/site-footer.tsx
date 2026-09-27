import Link from "next/link";
import { Logo } from "./site-header";

const quickLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = ["Web Development", "Mobile Development", "AI Solutions", "Blockchain"];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto w-full max-w-[1120px] px-6 pt-12 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo prominent />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Building innovative digital solutions with cutting-edge technology and creative excellence.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Quick Links</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Services</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link href="/services" className="hover:text-cream">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-cream">Connect</h2>
            <div className="mt-4 flex items-center gap-4 text-muted">
              <a href="https://github.com/Axioner" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cream">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
              <a href="https://t.me/nexora_w" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-cream">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M21.5 4.4 2.7 11.7c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.9 5.8c.2.7.1.9.8.9.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.2-.4-1.7-1.4-1.4ZM8.8 14.6l9.3-5.8c.4-.3.8-.1.5.2l-7.6 6.9-.3 3.3-2-4.6Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nexus. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
