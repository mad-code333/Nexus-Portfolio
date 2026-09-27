import Link from "next/link";
import { services } from "@/data/site";
import { ArrowUpRight, ServiceGlyph } from "./icons";
import { LaptopArt } from "./laptop-art";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-[1120px] px-6 py-8 md:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="font-serif text-[2rem] font-medium leading-tight tracking-[-0.02em] text-cream md:text-[2.35rem]">
            Services
          </h2>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#3ad1b0]"
          >
            GET IN TOUCH
            <span className="grid h-5 w-5 place-items-center rounded-full border border-[#3ad1b0]">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <div className="mt-8">
            <LaptopArt />
          </div>
        </div>
        <ul className="flex flex-col gap-7">
          {services.map((service) => (
            <li key={service.title} className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#141214] text-cream">
                <ServiceGlyph name={service.icon} className="h-5 w-5" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[15px] font-semibold text-cream">{service.title}</h3>
                  <span className="rounded-full bg-[#16382f] px-2 py-0.5 text-[10px] font-medium tracking-wide text-[#9ee8cf]">
                    {service.badge}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 max-w-xl text-[13.5px] leading-relaxed text-muted">
                  {service.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-12 text-center">
        <Link href="/services" className="text-sm text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream">
          View All Services
        </Link>
      </p>
    </section>
  );
}
