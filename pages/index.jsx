import React, {useRef} from "react"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";


  

  
<button > Click to scroll </button> 

export default function Home() {
  const skillsRef = useRef(null)
  const portfolioRef = useRef(null)
  const hobbiesRef = useRef(null)

  return (
    <>
      <Head>
        <title>James&apos; Portfolio</title>
      </Head>
        <main className="w-full flex flex-wrap justify-center">

          {/* Section One */}
          <section className="grid h-screen grid-cols-6 grid-rows-6 relative">
            <Header skills={skillsRef} portfolio={portfolioRef} hobbies={hobbiesRef}/>
            <Hero />
          </section>

          {/* Skills */}
          <section ref={skillsRef}className="w-full h-full md:h-screen bg-blue-600">
            Skill Section - Work in Progress
          </section>

          {/* Portfolio */}
          <section ref={portfolioRef}className="w-full h-full min-h-screen bg-blue-700">
            <PortfolioGrid />
          </section>

          {/* Hobbies */}
          <section ref={hobbiesRef} className="w-full h-screen flex flex-wrap md:inline-flex bg-black">
            Hobbies
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