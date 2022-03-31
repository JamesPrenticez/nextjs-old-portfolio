import React from 'react'
import Link from 'next/link'
import Carousel from './Carousel';

function Preview({project}) {
  const {id, title, desc, tech, images, link, video, tags, color} = project
  console.log(project)

  return (
    <div className={`h-[50vh] w-full  p-5 ${id == 2 ? "bg-blue-700" : "bg-[#21262b]" }`}>
      <div className={`flex justify-between h-full ${id == 2 ? "flex-row-reverse" : ""}`}>
        {/* Half one */}
        <div className='w-1/2 relative'>
          <h1 className="text-2xl">{title}</h1>
          <p>{desc}</p>

          <div>
            <Link href={`${link}`}>
              <a>
                {link ? "Click here to preview a working demo!" : ""}
              </a>
            </Link>
            <Link href={`${video}`}>
              <a className='text-fuchsia-500 '>
                {video && "Click here to watch a video demo!"}
              </a>
            </Link>
          </div>

          <ul className='flex-wrap flex'>
            {tech?.map((item, index) => (
              <li className='bg-sky-500 p-2 rounded-md mt-[.3rem] mr-[.3rem] text-sm' key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Half Two*/}
        <div className='w-1/2 object-contain'>
          {/* <div className='h-full w-full bg-black mr-auto object-contain'></div> */}
           <Carousel images={images}/>
        </div>
      </div>
    
    </div>
  )
}

export default Preview