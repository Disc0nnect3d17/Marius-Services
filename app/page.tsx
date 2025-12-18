import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import Reviews from "@/components/home/Reviews"
import About from "@/components/home/About"
import CallToAction from "@/components/home/CallToAction"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Reviews />
      <About />
      <CallToAction />
    </main>
  )
}
