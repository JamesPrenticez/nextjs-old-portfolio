import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import TextEffect from './TextEffect'

export default function Hero(){
  const imgRef = useRef()
  const [height, setHeight] = useState();

  const setDimensions = () => {
    const newHeight = imgRef?.current.clientHeight;
    setHeight(newHeight);
  };
  
  useEffect(() => {
    setHeight(imgRef?.current.clientHeight)
    window.addEventListener("resize", setDimensions);
  }, []);

  return (
    <>


      {/* Left */}
      <div className='inline-flex col-span-6 md:col-span-2 row-span-4 md:row-span-6 bg-blue-700'>
        <div className='inline-flex text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold h-4/6 items-center px-5 w-full'>
            <div className='fixed top-0 left-0 ml-4 mt-1 inline-flex md:hidden'>
                <TextEffect text={"J"}/>
                <TextEffect text={"P"}/>
            </div>
            <div className='w-full hidden md:block' style={{height: height}}>
                <TextEffect text={"James"}/>
                <TextEffect text={"Prentice"}/>
            </div>
          </div>
      </div>

      {/* Right */}
      <div className='absolute md:static w-full h-4/6 md:h-full md:inline-flex md:col-span-4 md:row-span-4 items-center bg-transparent md:bg-blue-600'>
        <div ref={imgRef} id="hero" className="absolute object-contain hidden md:flex items-end justify-center"> 
            <Image
              //loader={myLoader}
              //onLoadingComplete={(e) => handleImageLoad(e)}
              priority={true}
              as="image"
              src="/code.png"
              alt="Picture of the author"
              //layout="fill"
              objectFit='contain'
              height={500}
              width={1500}
              quality={75}
            />
          </div>
          <div className='w-full h-full object-contain relative mx-auto flex items-end justify-center'>
              <Image
                priority={true}
                as="image" 
                src="/me.png"
                alt="Picture of the author"
                //layout="fill"
                //objectFit='contain'
                height={500}
                width={500}
                quality={75}
                />
            </div>
        </div>

        {/* Bottom*/}
        <div className='bg-gray-300 col-span-6 md:col-span-4 row-span-2 text-black p-4 md:p-12 flex-col items-center'>
          <p className='text-sm sm:text-xl md:text-xl py-10 md:py-5'>
            I&apos;m an Enspiral Dev Academy graduate on a journey to becoming a professional 
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-1 mx-2 my-1 before:bg-fuchsia-600 relative inline-block">
            <span className='font-bold italic relative text-white'>full stack web developer.</span>
            </span>
            I have a keen interest in working with databases and transforming that data into an unforgettable user experience.
          </p>
          <a  className='bg-gray-700 py-4 px-4 text-white cursor-pointer w-full md:w-auto' href='/JPCV2022.pdf' download>Download Resume</a>
        </div>
  </>
  )
}