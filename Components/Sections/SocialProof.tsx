"use client"

import Container from "../Ui/Container"
import { FadeUp } from "../Ui/Motion"

const testimonials = [
  {
    quote:
      "Transformed our brand from static to unforgettable. The landing page converted 3x better than our previous one.",
    name: "Alex Chen",
    role: "Head of Marketing, Acme",
    initial: "A",
  },
  {
    quote:
      "Fast, sharp, and a pleasure to work with. Delivered ahead of schedule and the quality was through the roof.",
    name: "Jordan Rivera",
    role: "Founder, Studio X",
    initial: "J",
  },
  {
    quote:
      "Finally someone who gets design and conversion in one package. Our signups doubled in the first month.",
    name: "Sam Taylor",
    role: "Product Lead, Beta Co",
    initial: "S",
  },
]

const logos = [
  "Acme",
  "Studio X",
  "Beta Co",
  "Pulse",
  "Nova",
  "Lumen",
  "Safaricom",
  "Equity Banks",
  "Atlas",
  "Flow",
]

const stats = [
  { value: "50+", label: "Projects shipped" },
  { value: "98%", label: "Client satisfaction" },
  { value: "12+", label: "Industries" },
]

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 text-white">
      {/* Vibrant gradient background */}
      <div
        className="absolute inset-0 bg-linear-to-b from-zinc-950 via-indigo-950/80 to-violet-950/60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-indigo-500/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-[100px]"
        aria-hidden
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden
      />

      <Container>
        <div className="relative text-center mb-16 md:mb-20">
          <FadeUp>
            <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-300">
              Trusted by creators & brands
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Loved by{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                teams that ship
              </span>
            </h2>
          </FadeUp>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-20 md:mb-24">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={0.1 + i * 0.08}>
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.08]">
                <blockquote className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-semibold text-white ring-2 ring-white/10">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Stats row */}
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16 md:mb-20">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Logo marquee */}
        <div className="relative">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-gray-500">
            Trusted by teams at
          </p>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee gap-12 pr-12 shrink-0">
              {logos.map((name) => (
                <span
                  key={name}
                  className="shrink-0 text-lg font-semibold text-gray-500 transition hover:text-indigo-300 md:text-xl"
                >
                  {name}
                </span>
              ))}
            </div>
            <div
              className="flex animate-marquee gap-12 pr-12 shrink-0"
              aria-hidden
            >
              {logos.map((name) => (
                <span
                  key={`dup-${name}`}
                  className="shrink-0 text-lg font-semibold text-gray-500 md:text-xl"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
