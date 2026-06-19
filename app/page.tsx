// src/app/page.tsx
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Stripped all layout constraints (`mx-auto`, `max-w-5xl`, `px-6`).
        The sections now have full access to 100% of the viewport width, 
        giving you total control over padding right inside each separate component.
      */}
      <main className="w-full bg-black flex flex-col space-y-32 sm:space-y-48">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}