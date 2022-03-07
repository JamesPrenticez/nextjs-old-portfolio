import React from 'react'
import Image from 'next/image'
import Typewriter from "./Typewriter"
import Header from './Header'

const Hero = () => {
  return (
    <section className="w-full h-screen">
    <Header />

    <div className='flex justify-between w-full h-full '>
    {/* Left */}
    <div className='w-2/5 bg-blue-700 '>

      <div className='ml-20 h-4/6 mt-20'>
        <div>
          <p className='text-7xl font-extrabold absolute select-none text-gray-500'>James</p>
          <p className='text-7xl font-extrabold relative ml-2'>James</p>
        </div>
        <div>
          <p className='text-7xl font-extrabold absolute select-none text-gray-500'>Prentice</p>
          <p className='text-7xl font-extrabold relative ml-2'>Prentice</p>
        </div>
      </div>
    </div>

    {/* Right */}
      <div className='w-3/5 '>
        <div className='flex h-4/6 w-full items-center bg-blue-600'>
          <div className='object-contain absolute ml-10 bg-red-500 '>
              <img
                //loader={myLoader}
                className='shadow-[10px_10px_0_0] shadow-gray-600'
                src="/code.png"
                alt="Picture of the author"
                />
            </div>
            <div className='w-3/5 h-full object-contain relative mx-auto'>
                <Image
                  priority={true}
                  as="image" 
                  src="/me.png"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit='contain'
                  quality={75}
                  />
              </div>
          </div>
          <div className='bg-gray-300 w-full h-2/6 text-black p-12'>
            <p className='text-xl'>
              I’m an Enspiral Dev Academy graduate on a journey to becoming a professional 
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-1 mx-2 my-1 before:bg-blue-600 relative inline-block">
              <span className='font-bold italic relative text-white'>full stack web developer.</span>
              </span>
              I have a keen interest in working with databases and transforming that data into an unforgettable user experience.
            </p>
            <button 
              className='bg-gray-700 py-4 px-4 text-white mt-10 cursor-pointer'
              onClick={() => alert("Please Email me for a copy jamesprenticez@gmail.com =)")}
            >
              View Resume
            </button>
          </div>
      </div>
    </div>
  </section>
  )
}

export default Hero