import React, {useRef} from "react"
import Head from "next/head"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import Skills from "../components/Skills";
import FramerCarousel from "../components/FramerCarousel";

export default function Home() {
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const hobbiesRef = useRef(null)

  return (
    <>
      <Head>
        <title>James&apos; Portfolio</title>
      </Head>
        <main>
          {/* Section One */}
          <section className="w-full h-full min-h-screen bg-blue-700">
            <Nav skills={skillsRef} projects={projectsRef} hobbies={hobbiesRef}/>
            <Hero />
          </section>

          {/* Skills */}
          <section ref={skillsRef} className="w-full h-full md:h-screen bg-blue-600">
            <Skills />
          </section>

          {/* Portfolio */}
          <section ref={projectsRef} className="w-full h-full min-h-screen bg-blue-700">
            <PortfolioGrid />
          </section>

          {/* Hobbies */}
          <section ref={hobbiesRef} className="w-full h-screen flex flex-wrap md:inline-flex bg-blue-600">
            <FramerCarousel />
          </section>

          {/* Contact & Location */}
          <section className="w-full h-screen flex flex-wrap md:inline-flex bg-black">
            {/* Map */}
            <div className="w-full bg-contain bg-[url('/map-black.png')] bg-center bg-no-repeat" />
          </section>
        </main>
      <Footer/>
    </>
  )
}