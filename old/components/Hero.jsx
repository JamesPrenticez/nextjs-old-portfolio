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
        <div className='flex flex-col-reverse md:flex-row max-w-7xl mx-auto mt-6 md:mt-12'>
          {/* Left */}
          <div className=''>
            {/* Name */}
            <div className='text-2xl md:text-4xl font-extrabold absolute top-[1.25rem] left-0 flex md:hidden ml-4'>
                <TextEffect text={"J"}/>
                <TextEffect text={"P"}/>
            </div>
            <div className='text-2xl md:text-7xl font-extrabold w-full hidden md:block'>
                <TextEffect text={"James"}/>
                <TextEffect text={"Prentice"}/>
            </div>

            {/* Bio */}
            <div className='md:w-5/6 text-gray-100  py-5 px-6 md:mt-3 '>
              <p className='text-sm sm:text-xl md:text-xl'>
                I&apos;m an Enspiral Dev Academy graduate on a journey to becoming a professional 
                <span className="before:block before:absolute before:-inset-y-0 before:-inset-x-[.25rem] before:-skew-y-[0.8rem] mx-3 before:bg-white relative inline-block">
                  <span className='font-bold italic relative text-blue-700 '>full stack web developer.</span>
                </span>
                I have a keen interest in working with databases and transforming that data into an unforgettable user experience.
              </p>
              <div className='flex mt-8 md:mt-12 space-x-4'>
              <NextLink href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz" passHref>
                  <a>
                    <GithubIcon className='h-8 w-8 md:h-12 md:w-12 cursor-pointer'/>
                  </a>
                </NextLink>

                <NextLink href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz" passHref>
                  <a>
                    <LinkedInIcon className='h-8 w-8 md:h-12 md:w-12 cursor-pointer'/>
                  </a>
                </NextLink>
              </div>

      
              <div className='py-2 md:py-4 mt-8 md:mt-12 block'>
                <a
                  role="button"
                  className='border rounded-md hover:bg-white hover:text-blue-700 text-white cursor-pointer p-3 md:p-4' 
                  href='/JPCV2022.pdf' 
                  download>
                    Download Resume
                </a>
              </div>
              
            </div>
          </div>
        
        {/* Image of Me */}
        <div className="w-4/6 h-4/6 md:w-full md:h-full mx-auto">
          <div className="rounded-full"> 
            <NextImage
              className="rounded-full bg-blue-600"
              loader={useImageLoader}
              src="/me.webp"
              alt="Me"
              width={1000}
              height={1000}
              layout="responsive"
              priority
              placeholder="blur"
              blurDataURL="/me.webp"
            />
          </div>
        </div>
        </div>

       
    </div>
  </div>
  )
}