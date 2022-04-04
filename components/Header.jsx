import React from 'react'

function Header({home, skills, projects, hobbies}){
  const executeScroll = (ref) => ref.current.scrollIntoView({behavior: "smooth"})  
  return (
    <nav className='absolute py-5 w-full text-base z-50'>
      <div className='flex items-center '>
        <ul className='flex ml-auto mr-4 md:mr-10 lg:mr-16 space-x-4 cursor-pointer'>
            <li onClick={() => executeScroll(skills)}>Skills</li>
            <li onClick={() => executeScroll(projects)}>Projects</li>
            <li onClick={() => executeScroll(hobbies)}>Hobbies</li>
          </ul>
      </div>
    </nav>
  )
}

export default Header