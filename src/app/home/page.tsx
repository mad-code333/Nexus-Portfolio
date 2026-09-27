import type { Metadata } from "next";
import { Expertise } from "@/components/expertise";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Senior software engineer",
  description:
    "Nexus is a senior software engineer portfolio. Code and AI, from discovery through launch.",
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Process />
        <FeaturedProjects />
        <ServicesSection />
        <Expertise />
      </main>
      <SiteFooter />
    </>
  );
}
