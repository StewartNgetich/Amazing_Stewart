import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/Components/Layout/Navbar"
import Footer from "@/Components/Layout/Footer"
import Container from "@/Components/Ui/Container"
import { FadeUp } from "@/Components/Ui/Motion"

export const metadata: Metadata = {
  title: "About | Stewart Futures",
  description:
    "Multidisciplinary creative blending design, video, writing, and UI to craft compelling digital experiences.",
}

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 md:py-48 text-white">
        {/* Background Effects */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
          aria-hidden
        />
        <div
          className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]"
          aria-hidden
        />
        <div
          className="absolute -right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[120px]"
          aria-hidden
        />

        <Container>
          <div className="relative z-10 max-w-4xl">
            <FadeUp>
              <p className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-400">
                The Architect
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                Crafting digital <br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                  legacies.
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg text-gray-400 md:text-xl leading-relaxed">
                I operate at the intersection of design, technology, and storytelling.
                My mission is simple: to build digital experiences that feel inevitable.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 bg-zinc-950/50 border-y border-white/5">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            <FadeUp delay={0.3}>
              <div className="space-y-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 text-indigo-400 border border-indigo-500/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Holistic Design</h3>
                <p className="text-gray-400 leading-relaxed">
                  Design isn&apos;t just decoration. It&apos;s how something works, feels, and communicates. I design with the entire system in mind.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="space-y-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 text-fuchsia-400 border border-fuchsia-500/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Modern Engineering</h3>
                <p className="text-gray-400 leading-relaxed">
                  Performance is a feature. I build with modern frameworks and best practices to ensure speed, accessibility, and scale.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="space-y-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Strategic Narrative</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every brand has a story. I help you tell yours through compelling copy, visuals, and flow that guides users to action.
                </p>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Bio / Story Section */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">


            <div className="w-full md:w-1/2">
              <FadeUp delay={0.2}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20" />

                  {/* Founder Image */}
                  <Image
                    src="/images/founder-photo.png"
                    alt="Stewart Futures Founder"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                    <p className="text-white font-medium">Stewart Futures</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Founder & Lead Creative</p>
                  </div>
                </div>
              </FadeUp>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <FadeUp delay={0.3}>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Driven by curiosity, <br />
                  defined by quality.
                </h2>
              </FadeUp>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <FadeUp delay={0.4}>
                  <p>
                    I started Stewart Futures with a simple premise: complexity shouldn&apos;t be complicated.
                    Whether it&apos;s a new brand identity or a full-scale web application, the end result should feel effortless.
                  </p>
                </FadeUp>
                <FadeUp delay={0.5}>
                  <p>
                    With a background spanning visual design and software engineering, I don&apos;t just hand off designs to developers—I speak both languages.
                    This ensures that the vision we create together is exactly what gets built.
                  </p>
                </FadeUp>
                <FadeUp delay={0.6}>
                  <p>
                    When I&apos;m not building, I&apos;m analyzing what makes the world&apos;s best brands tick, constantly
                    refining my craft to bring you the best in modern digital strategy.
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <Container>
          <FadeUp>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Ready to elevate your digital presence?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Let&apos;s turn your vision into a high-performance reality.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all bg-white rounded-full hover:bg-gray-200 hover:scale-105"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </FadeUp>
        </Container>
      </section>

      <Footer />
    </>
  )
}
