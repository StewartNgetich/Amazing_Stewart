import Navbar from "@/Components/Layout/Navbar"
import Hero from "@/Components/Sections/Hero"
import SocialProof from "@/Components/Sections/SocialProof"
import Services from "@/Components/Sections/Services"
import Process from "@/Components/Sections/Process"
import CTA from "@/Components/Sections/CTA"
import Footer from "@/Components/Layout/Footer"


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </>
  )
}
