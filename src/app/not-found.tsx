import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[50vh] w-full max-w-[1120px] flex-col justify-center px-6 py-20">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#3ad1b0]">404</p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-cream">That page is not on this site.</h1>
        <Link href="/home" className="mt-6 text-sm text-cream underline underline-offset-4">
          Back home
        </Link>
      </main>
    </>
  );
}
