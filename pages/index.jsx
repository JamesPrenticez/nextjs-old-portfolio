import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import { data } from "../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>James&apos; Portfolio</title>
      </Head>
        <main className='w-full flex flex-wrap justify-center'>
          {/* Section One */}
          <Hero />

          {/* Skills */}
          <div className='w-full h-full md:h-screen bg-blue-600'>
            Skill Section - Work in Progress
          </div>

          {/* Portfolio */}
          <div className='w-full h-full min-h-screen bg-blue-700'>
            <PortfolioGrid />
          </div>


          {/* Four */}
          <div className='w-full h-screen flex flex-wrap md:inline-flex bg-black'>

            {/* Form */}
            {/* <div className='w-full md:w-1/2 p-16'>
              <form className='' action="/">
                <fieldset className='border border-solid border-gray-300 p-8'>
                  <legend className='text-4xl px-4'>Contact Me</legend>

                  <div className='pl-4 space-y-4'>
                    <label className='' htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="fname"/>
                    <br/>

                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="lname" name="lname"/>
                    <br/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    <br/>

                    <button 
                      className="btn mt-12 float-right px-12 py-4 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-green-600 rounded-lg duration-500"
                      type="submit" 
                      value="Submit"
                    >
                      <span className="absolute inset-0 bg-white"></span>
                      <span className="absolute inset-0 flex justify-center items-center font-bold">Submit</span>
                      Submit
                    </button>
                  </div>
                </fieldset>
                </form>
            </div> */}

            {/* Map */}
            <div className="w-full bg-contain bg-[url('/map-black.png')] bg-center bg-no-repeat"/>
          </div>
        </main>
      <Footer/>
    </>
  )
}