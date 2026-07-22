import Navbar from "@/components/section/Navbar";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Projects from "@/components/section/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}