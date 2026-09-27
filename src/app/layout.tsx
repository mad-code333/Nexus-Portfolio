import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nexus — Senior software engineer",
    template: "%s — Nexus",
  },
  description:
    "Senior software engineer working across code and AI. Discovery, delivery, and launch for web, mobile, and emerging systems.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const theme = (await cookies()).get("nexora-theme")?.value;

  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
      data-theme={theme === "light" ? "light" : undefined}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-page text-cream">{children}</body>
    </html>
  );
}
