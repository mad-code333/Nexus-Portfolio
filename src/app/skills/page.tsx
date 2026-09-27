import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SkillsExperience } from "@/components/skills-board";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills and technologies across frontend, backend, mobile, blockchain, AI, and tools.",
};

export default function SkillsPage() {
  return (
    <>
      <main>
        <SkillsExperience />
      </main>
      <SiteFooter />
    </>
  );
}
