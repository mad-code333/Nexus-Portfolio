import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1120px] px-6 py-14 md:py-20">
        {eyebrow ? (
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#3ad1b0]">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-serif text-[2.4rem] font-medium leading-[1.1] tracking-[-0.03em] text-cream md:text-5xl">
          {title}
        </h1>
        {lede ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{lede}</p> : null}
        <div className="mt-10">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
