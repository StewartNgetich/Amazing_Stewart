"use client"

import Link from "next/link"
import Navbar from "@/Components/Layout/Navbar"
import Footer from "@/Components/Layout/Footer"
import Container from "@/Components/Ui/Container"
import { FadeUp } from "@/Components/Ui/Motion"

const services = [
  {
    title: "Graphic Design",
    description:
      "Brand identity, posters, social media creatives, and visual systems that communicate clearly and consistently.",
    icon: "◆",
    includes: ["Brand identity", "Posters & print", "Social assets", "Visual systems"],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Video Editing",
    description:
      "Short-form, YouTube, cinematic edits, and content optimized for engagement and storytelling.",
    icon: "▶",
    includes: ["Short-form reels", "YouTube edits", "Cinematic cuts", "Motion graphics"],
    accent: "from-violet-500 to-purple-600",
  },
  {
    title: "UI Design",
    description:
      "User-centered interfaces, landing pages, and digital products designed for clarity and conversion.",
    icon: "◇",
    includes: ["Landing pages", "Web & app UI", "Design systems", "Prototypes"],
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "Writing",
    description:
      "Creative copy, scripts, captions, and narrative content aligned with brand voice.",
    icon: "✎",
    includes: ["Brand copy", "Scripts & captions", "Long-form", "Narrative"],
    accent: "from-rose-500 to-pink-600",
  },
]

const processSteps = [
  { step: "01", label: "Brief", text: "We align on goals, audience, and deliverables." },
  { step: "02", label: "Create", text: "Design and development in focused sprints." },
  { step: "03", label: "Deliver", text: "Handoff, feedback rounds, and launch support." },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 text-white">
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-indigo-950/40 to-zinc-950"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"
          aria-hidden
        />

        <Container>
          <div className="relative max-w-3xl">
            <FadeUp>
              <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-300">
                Services
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                End-to-end{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  creative services
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-xl text-lg text-gray-400">
                Design, video, UI, and copy—crafted to help brands communicate,
                connect, and convert.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Service cards */}
      <section className="relative py-20 md:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={0.05 + i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-sm transition hover:border-white/20 hover:bg-zinc-900/80">
                  <div
                    className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${service.accent} opacity-20 blur-2xl transition group-hover:opacity-30`}
                    aria-hidden
                  />
                  <div className="relative">
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-lg text-white`}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="relative border-t border-white/10 py-20 md:py-28">
        <Container>
          <FadeUp>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-500">
              How we work
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Simple, focused process
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {processSteps.map((item, i) => (
              <FadeUp key={item.step} delay={0.1 + i * 0.08}>
                <div className="flex gap-5">
                  <span className="text-3xl font-bold text-white/20">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-gray-400">{item.text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/10 py-20 md:py-28">
        <Container>
          <FadeUp>
            <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/50 to-violet-950/50 p-10 text-center md:p-14">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Ready to start?
              </h2>
              <p className="mt-3 text-gray-400">
                Tell me about your project and we&apos;ll make it happen.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-medium text-black transition hover:opacity-90"
              >
                Get in touch
              </Link>
            </div>
          </FadeUp>
        </Container>
      </section>

      <Footer />
    </>
  )
}
