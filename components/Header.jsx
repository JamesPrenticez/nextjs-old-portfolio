import React from 'react'


function Header({pY, sY, hY}){
  return (
    <nav className='absolute py-5 w-full text-base z-50'>
      <div className='flex items-center '>
        <ul className='flex ml-auto mr-4 md:mr-10 lg:mr-16 space-x-4 cursor-pointer'>
            <li>Projects</li>
            <li>Skills</li>
            <li>Hobbies</li>
          </ul>
      </div>
    </nav>
  )
}

export default Header