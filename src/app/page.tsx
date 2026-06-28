import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Levels from "@/components/sections/levels";
import Pains from "@/components/sections/pains";
import About from "@/components/sections/about";
import Cases from "@/components/sections/cases";
import Process from "@/components/sections/process";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Levels />
      <Pains />
      <About />
      <Cases />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}