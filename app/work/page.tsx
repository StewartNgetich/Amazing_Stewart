"use client"

import Navbar from "@/Components/Layout/Navbar"
import Footer from "@/Components/Layout/Footer"
import Container from "@/Components/Ui/Container"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    description:
      "Visual identity system including logo, color palette, and brand assets.",
  },
  {
    title: "Product Promo Video",
    category: "Video Editing",
    description:
      "Short-form cinematic promo optimized for social media engagement.",
  },
  {
    title: "Landing Page UI",
    category: "UI Design",
    description:
      "High-conversion landing page designed and built with modern UI principles.",
  },
  {
    title: "Story-driven Script",
    category: "Writing",
    description:
      "Narrative script crafted for brand storytelling and emotional impact.",
  },
]

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <section className="py-32 bg-black text-white">
        <Container>
          <header className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Selected Work
            </h1>
            <p className="text-gray-400">
              A curated selection of projects across design, video, writing,
              and UI.
            </p>
          </header>

          <motion.div
  whileHover={{ y: -6 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="grid grid-cols-1 md:grid-cols-2 gap-6"
>
  {projects.map((project) => (
    <motion.article
      key={project.title}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="border border-white/10 p-6 rounded-lg hover:border-white/30 bg-black/20"
    >
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-sm text-gray-400 mb-2">{project.category}</p>
      <p className="text-gray-300 text-sm">{project.description}</p>
    </motion.article>
  ))}
</motion.div>

        </Container>
      </section>

      <Footer />
    </>
  )
}
