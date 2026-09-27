import type { Metadata } from "next";
import { ContactExperience } from "@/components/contact-experience";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a project in mind? Send a message and I'll respond as soon as possible.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactExperience />
      </main>
      <SiteFooter />
    </>
  );
}
