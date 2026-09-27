"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaPaperPlane, FaPhone, FaTelegram } from "react-icons/fa";
import { SiteHeader } from "./site-header";

const inputClass =
  "w-full rounded-xl border border-cream/10 bg-black/25 px-3 py-2.5 text-sm text-cream outline-none transition placeholder:text-cream/40 focus:border-[#e6a23c]/50 focus:ring-2 focus:ring-[#e6a23c]/50 sm:px-4 sm:py-3 sm:text-base";

const emptyFields = { fullName: "", email: "", subject: "", message: "" };

export function ContactExperience() {
  const [fields, setFields] = useState(emptyFields);
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; message: string } | null>(null);

  function update(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = event.currentTarget;
    setFields((current) => ({ ...current, [target.name]: target.value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setNotice(null);
    await new Promise((resolve) => setTimeout(resolve, 450));
    setFields(emptyFields);
    setNotice({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
    setSending(false);
  }

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[200px] overflow-hidden opacity-20 sm:h-[250px] md:h-[317px]" aria-hidden>
        <div className="absolute bottom-0 z-10 h-[100px] w-full bg-gradient-to-t from-[var(--page)] sm:h-[120px] md:h-[165px]" />
        <div className="relative h-full">
          <Image
            src="/contact/bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="relative z-10">
        <SiteHeader overlay />

        <section className="overflow-hidden py-8 sm:py-12 md:py-16">
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex w-full flex-col items-start justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center">
              <h1 className="text-2xl font-semibold tracking-tight text-cream sm:text-3xl md:text-4xl">
                Let&apos;s <span className="mx-2 text-[#e6a23c]">Connect</span>
              </h1>
              <div className="flex items-center gap-2 sm:gap-3">
                <a href="mailto:contact@nexorahq.dev" aria-label="Email" className="text-xl text-[#e6a23c] transition hover:opacity-80 sm:text-2xl">
                  <FaEnvelope />
                </a>
                <a href="https://t.me/nexora_w" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-xl text-[#e6a23c] transition hover:opacity-80 sm:text-2xl">
                  <FaTelegram />
                </a>
                <a href="https://github.com/Axioner" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-xl text-[#e6a23c] transition hover:opacity-80 sm:text-2xl">
                  <FaGithub />
                </a>
              </div>
            </div>
            <p className="w-full text-base leading-relaxed text-cream/70 sm:w-2/3 sm:text-lg">
              Have a project in mind? Want to collaborate? Or just want to say hello? I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8">
            <aside className="space-y-6 sm:space-y-8 lg:sticky lg:top-24 lg:self-start">
              <div>
                <h2 className="mb-4 text-xl font-semibold text-cream sm:mb-6 sm:text-2xl">Contact Information</h2>
                <a
                  href="mailto:contact@nexorahq.dev"
                  className="flex items-start gap-3 rounded-xl border border-cream/10 bg-[var(--card)]/70 p-3 backdrop-blur-sm transition hover:border-[#e6a23c]/50 sm:gap-4 sm:p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#e6a23c]/10 text-lg text-[#e6a23c] sm:h-12 sm:w-12 sm:text-xl">
                    <FaEnvelope aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-xs text-cream/60 sm:text-sm">Email</span>
                    <span className="block text-sm font-medium break-words text-cream sm:text-base">contact@nexorahq.dev</span>
                  </span>
                </a>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-cream sm:mb-4 sm:text-xl">Follow Me</h3>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://github.com/Axioner"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-10 w-10 place-items-center rounded-lg border border-cream/10 bg-[var(--card)]/70 text-lg text-cream/70 backdrop-blur-sm transition hover:scale-110 hover:border-[#e6a23c]/50 hover:text-cream active:scale-95 sm:h-12 sm:w-12 sm:text-xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://t.me/nexora_w"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="grid h-10 w-10 place-items-center rounded-lg border border-cream/10 bg-[var(--card)]/70 text-lg text-cream/70 backdrop-blur-sm transition hover:scale-110 hover:border-[#e6a23c]/50 hover:text-[#3ad1b0] active:scale-95 sm:h-12 sm:w-12 sm:text-xl"
                  >
                    <FaTelegram />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-cream/10 bg-[var(--card)]/70 p-4 backdrop-blur-sm sm:p-6">
                <h3 className="mb-2 text-base font-semibold text-cream sm:text-lg">Response Time</h3>
                <p className="text-xs leading-relaxed text-cream/70 sm:text-sm">
                  I typically respond within 24-48 hours. For urgent matters, feel free to reach out via Telegram.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-cream/10 bg-[var(--card)]/70 p-6 backdrop-blur-sm sm:p-8 lg:p-12">
                <h2 className="mb-2 text-2xl font-semibold text-cream sm:text-3xl">Send a Message</h2>
                <p className="mb-6 text-sm text-cream/70 sm:mb-8 sm:text-base">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>
                {notice ? (
                  <p
                    role="status"
                    className={`mb-6 rounded-xl border p-4 text-sm ${notice.type === "success" ? "border-green-500/50 bg-green-500/10 text-green-400" : "border-red-500/50 bg-red-500/10 text-red-400"}`}
                  >
                    {notice.message}
                  </p>
                ) : null}
                <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <label className="block" htmlFor="fullName">
                      <span className="mb-2 block font-medium text-cream">
                        Full Name <span className="text-[#e6a23c]">*</span>
                      </span>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        value={fields.fullName}
                        onChange={update}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </label>
                    <label className="block" htmlFor="email">
                      <span className="mb-2 block font-medium text-cream">
                        Email Address <span className="text-[#e6a23c]">*</span>
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={fields.email}
                        onChange={update}
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </label>
                  </div>
                  <label className="block" htmlFor="subject">
                    <span className="mb-2 block font-medium text-cream">
                      Subject <span className="text-[#e6a23c]">*</span>
                    </span>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={fields.subject}
                      onChange={update}
                      placeholder="What's this about?"
                      className={inputClass}
                    />
                  </label>
                  <label className="block" htmlFor="message">
                    <span className="mb-2 block font-medium text-cream">
                      Message <span className="text-[#e6a23c]">*</span>
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={fields.message}
                      onChange={update}
                      placeholder="Tell me about your project or inquiry..."
                      className={`${inputClass} resize-none`}
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={sending}
                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e6a23c] to-[#f6d27a] px-6 py-3 text-sm font-semibold text-[#3d2422] transition hover:scale-105 hover:shadow-xl hover:shadow-[#e6a23c]/30 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
                  >
                    {sending ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane aria-hidden />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black/25 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:gap-8 sm:px-6 md:grid-cols-3 lg:px-8">
            <article className="rounded-xl border border-cream/10 bg-[var(--card)]/70 p-5 text-center backdrop-blur-sm sm:p-6">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#e6a23c]/10 text-xl text-[#e6a23c] sm:mb-4 sm:h-16 sm:w-16 sm:text-2xl">
                <FaEnvelope aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-cream sm:text-xl">Quick Response</h3>
              <p className="text-xs text-cream/70 sm:text-sm">I aim to respond to all inquiries within 24-48 hours.</p>
            </article>
            <article className="rounded-xl border border-cream/10 bg-[var(--card)]/70 p-5 text-center backdrop-blur-sm sm:p-6">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#3ad1b0]/10 text-xl text-[#3ad1b0] sm:mb-4 sm:h-16 sm:w-16 sm:text-2xl">
                <FaPaperPlane aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-cream sm:text-xl">Project Discussion</h3>
              <p className="text-xs text-cream/70 sm:text-sm">Let&apos;s discuss your project requirements and how I can help.</p>
            </article>
            <article className="rounded-xl border border-cream/10 bg-[var(--card)]/70 p-5 text-center backdrop-blur-sm sm:col-span-2 sm:p-6 md:col-span-1">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#f4e7d4]/10 text-xl text-[#f4e7d4] sm:mb-4 sm:h-16 sm:w-16 sm:text-2xl">
                <FaPhone aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-cream sm:text-xl">Direct Contact</h3>
              <p className="text-xs text-cream/70 sm:text-sm">For urgent matters, reach out via Telegram.</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
