"use client"

import Container from "../Ui/Container"
import { FadeUp } from "../Ui/Motion"

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dig into your goals, audience, and vision. No fluff—just the insights that matter.",
    icon: "🔍",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "A clear roadmap emerges. We align on scope, timeline, and what success looks like.",
    icon: "🎯",
    accent: "from-violet-500 to-purple-600",
  },
  {
    num: "03",
    title: "Create",
    desc: "Design and build in focused sprints. You see progress, give feedback, and we iterate fast.",
    icon: "⚡",
    accent: "from-amber-500 to-orange-600",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Polished assets, smooth handoff, and support to make sure everything lands perfectly.",
    icon: "🚀",
    accent: "from-emerald-500 to-teal-600",
  },
]

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-slate-900 to-zinc-950"
        aria-hidden
      />
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]"
        aria-hidden
      />
      {/* Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden
      />

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="mb-16 text-center md:mb-20">
            <FadeUp>
              <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-300">
                How it works
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                A process that{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  just works
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
                From first call to final delivery—transparent, collaborative,
                and built around your schedule.
              </p>
            </FadeUp>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div
              className="absolute left-0 right-0 top-[60px] hidden h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block"
              aria-hidden
            />

            <div className="grid gap-8 md:grid-cols-4 md:gap-6">
              {steps.map((step, i) => (
                <FadeUp key={step.num} delay={0.15 + i * 0.08}>
                  <div className="group relative flex flex-col items-center text-center md:items-center">
                    {/* Number circle */}
                    <div className="relative mb-6">
                      <div
                        className={`flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br ${step.accent} text-2xl shadow-lg shadow-black/30 ring-4 ring-zinc-900 transition-transform duration-300 group-hover:scale-110`}
                      >
                        {step.icon}
                      </div>
                      {/* Pulse ring on hover */}
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.accent} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40`}
                        aria-hidden
                      />
                    </div>

                    {/* Step number */}
                    <span className="mb-2 text-xs font-bold uppercase tracking-widest text-white/30">
                      Step {step.num}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <FadeUp delay={0.5}>
            <div className="mt-16 flex justify-center md:mt-20">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:opacity-90"
              >
                Start your project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
