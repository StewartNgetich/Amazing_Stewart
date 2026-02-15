import type { Metadata } from "next"
import Navbar from "@/Components/Layout/Navbar"
import Footer from "@/Components/Layout/Footer"
import Container from "@/Components/Ui/Container"
import { FadeUp } from "@/Components/Ui/Motion"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Contact | Stewart Futures",
  description:
    "Have a project or collaboration in mind? Get in touch and I’ll get back to you.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

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
          className="absolute -right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]"
          aria-hidden
        />

        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-24">

            {/* Left Column: Info */}
            <div>
              <FadeUp>
                <p className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-300">
                  Get in Touch
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Let’s build something <br />
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                    legendary.
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-lg">
                  Whether you have a clear vision or just a rough idea, I’m here to help you turn it into a reality.
                </p>
              </FadeUp>

              <div className="mt-12 space-y-8">
                <FadeUp delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">Email</h3>
                      <p className="mt-1 text-gray-400">Stewartkiprotich@gmail.com</p>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">Availability</h3>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <p className="text-sm font-medium text-emerald-400">Accepting new projects</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:pt-12">
              <FadeUp delay={0.2}>
                <ContactForm />
              </FadeUp>
            </div>

          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
