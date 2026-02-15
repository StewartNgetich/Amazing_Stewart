"use client"

import Link from "next/link"
import Container from "../Ui/Container"
import { FadeUp } from "../Ui/Motion"

const services = [
  {
    title: "Graphic Design",
    desc: "Brand identities and visual systems that make you unforgettable.",
    icon: "◆",
    accent: "from-emerald-500 to-teal-600",
    glow: "bg-emerald-500/20",
  },
  {
    title: "Video Editing",
    desc: "Cinematic cuts and social-first edits that stop the scroll.",
    icon: "▶",
    accent: "from-violet-500 to-purple-600",
    glow: "bg-violet-500/20",
  },
  {
    title: "UI Design",
    desc: "High-conversion interfaces that look incredible and perform.",
    icon: "◇",
    accent: "from-amber-500 to-orange-600",
    glow: "bg-amber-500/20",
  },
  {
    title: "Writing",
    desc: "Narrative-driven copy that connects and converts.",
    icon: "✎",
    accent: "from-rose-500 to-pink-600",
    glow: "bg-rose-500/20",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 md:py-32 scroll-mt-20"
    >
      {/* Vibrant gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-indigo-950/50 to-zinc-950"
        aria-hidden
      />
      {/* Glow blurs */}
      <div
        className="pointer-events-none absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-500/15 blur-[100px]"
        aria-hidden
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden
      />

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <FadeUp>
              <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-300">
                Services
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Everything you need to{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  stand out
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-4 text-lg text-gray-400">
                From identity to interface, I craft every layer of your digital
                presence.
              </p>
            </FadeUp>
          </div>

          {/* Service cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={0.12 + i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/20">
                  {/* Accent glow */}
                  <div
                    className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${service.glow} blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-hidden
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-lg text-white shadow-lg`}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {service.desc}
                    </p>

                    {/* Hover arrow */}
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-white/0 transition-all duration-300 group-hover:text-white/80">
                      <span>Learn more</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <FadeUp delay={0.4}>
            <div className="mt-14 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
              >
                View all services
                <span className="text-lg">→</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
