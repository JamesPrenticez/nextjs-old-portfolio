import React, { useRef, useState, useEffect } from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { useImageLoader } from './hooks/useImageLoader'
import TextEffect from './TextEffect'
import { GithubIcon, LinkedInIcon } from './icons/socials'

export default function Hero(){
  return (
    <div className='bg-blue-700 w-full h-full pt-[3.5rem]'>
      <div className='min-h-screenNav'>
        <div className='flex justify-between max-w-7xl mx-auto mt-12'>
        {/* Left */}
        <div className='min-w-4/6'>
          {/* Name */}
          <div className='text-2xl md:text-4xl font-extrabold absolute top-[1.25rem] left-0 flex md:hidden'>
              <TextEffect text={"J"}/>
              <TextEffect text={"P"}/>
          </div>
          <div className='text-2xl md:text-7xl font-extrabold w-full hidden md:block'>
              <TextEffect text={"James"}/>
              <TextEffect text={"Prentice"}/>
          </div>

          {/* Bio */}
          <div className='w-5/6 text-gray-100 text-sm sm:text-xl md:text-xl p-10 md:p-5 mt-3 '>
            <p className='leading-10'>
              I&apos;m an Enspiral Dev Academy graduate on a journey to becoming a professional 
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-[0.8rem] mx-3 before:bg-orange-500 relative inline-block">
              <span className='font-bold italic relative text-white'>full stack web developer.</span>
              </span>
              I have a keen interest in working with databases and transforming that data into an unforgettable user experience.
            </p>
            <div className='flex mt-12 space-x-4'>
            <NextLink href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz" passHref>
                <GithubIcon className='h-12 w-12 cursor-pointer'/>
              </NextLink>

              <NextLink href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz" passHref>
                <LinkedInIcon className='h-12 w-12 cursor-pointer'/>
              </NextLink>
            </div>

    
          <div className='py-4 mt-6'>
            <a
              role="button"
              className='border rounded-md hover:bg-white hover:text-blue-700 text-white cursor-pointer p-4' 
              href='/JPCV2022.pdf' 
              download>
                Download Resume
            </a>
          </div>
            
          </div>
        </div>
        
        {/* Image of Me */}
        <div className="w-full h-full ">
          <div className=""> 
            <NextImage
              className="rounded-full bg-orange-500"
              loader={useImageLoader}
              src="/me.png"
              alt="Me"
              width={1000}
              height={1000}
              layout="responsive"
              priority
              placeholder="blur"
              blurDataURL="/me.png"
            />
          </div>
        </div>
        </div>

       
    </div>
  </div>
  )
}