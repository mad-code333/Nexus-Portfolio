import Link from "next/link";
import { services } from "@/data/site";
import { ServiceGlyph, UserIcon } from "./icons";
import { LaptopArt } from "./laptop-art";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-[1180px] px-6 py-10 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 xl:gap-20">
        <div className="order-2 lg:order-1">
          <h2 className="font-serif text-[2rem] font-medium leading-tight tracking-[-0.02em] text-[#edaf5f] md:text-[2.35rem]">
            Services
          </h2>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#3ad1b0] transition hover:text-[#7aebc8]"
          >
            GET IN TOUCH
            <span className="grid h-6 w-6 place-items-center rounded-full border border-[#3ad1b0] bg-[#3ad1b0]/10 text-[#3ad1b0]">
              <UserIcon className="h-3.5 w-3.5" />
            </span>
          </Link>

          <div className="mt-8 max-w-[340px] lg:mt-12">
            <LaptopArt />
          </div>
        </div>

        <ul className="order-1 flex flex-col gap-2 lg:order-2 lg:gap-3">
          {services.map((service) => (
            <li key={service.title}>
              <div className="group flex items-center gap-5 rounded-2xl border border-transparent px-3 py-4 transition hover:border-white/8 hover:bg-white/[0.03] sm:gap-6 sm:px-4 sm:py-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-[#141214] text-cream shadow-[0_0_0_1px_rgba(237,175,95,0.08)] sm:h-16 sm:w-16">
                  <ServiceGlyph name={service.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                <div className="flex min-w-0 flex-wrap items-center gap-3 sm:gap-3.5">
                  <h3 className="text-[1.15rem] font-semibold tracking-tight text-cream sm:text-[1.35rem] md:text-[1.5rem]">
                    {service.title}
                  </h3>
                  <span className="rounded-full bg-[#16382f] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#9ee8cf] sm:text-xs">
                    {service.badge}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex justify-center md:mt-14">
        <Link href="/services" className="text-sm font-medium text-[#edaf5f]/85 transition hover:text-[#edaf5f]">
          View All Services
        </Link>
      </div>
    </section>
  );
}
