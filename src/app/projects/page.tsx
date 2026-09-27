import type { Metadata } from "next";
import { ProjectCatalog } from "@/components/project-catalog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nexus projects across web, mobile, blockchain, AI, bots, software, and scraping.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProjectCatalog />
      </main>
      <SiteFooter />
    </>
  );
}
