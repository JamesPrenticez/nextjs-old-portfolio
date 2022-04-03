import React from 'react'
import Link from "next/link"

function Header(){
  return (
    <nav className='absolute py-5 w-full text-base z-50'>
      <div className='flex items-center '>
        <ul className='flex ml-auto mr-4 md:mr-10 lg:mr-16 space-x-4 cursor-pointer'>
            <Link href={"/projects"}>
              <li>Projects</li>
            </Link>
            <li>Skills</li>
            <li>Hobbies</li>
          </ul>
      </div>
    </nav>
  )
}

export default Header