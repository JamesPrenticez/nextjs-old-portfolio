import React from 'react'

export default function Nav({skills, projects, hobbies}){
  const executeScroll = (ref) => ref.current.scrollIntoView({behavior: "smooth"})  
  return (
    <nav className='absolute top-0 left-0 py-5 w-full text-base z-50 '>
      <div className='flex items-center max-w-7xl mx-auto '>
        <ul className='flex ml-auto mr-4 md:mr-0 space-x-4 cursor-pointer'>
            <li onClick={() => executeScroll(skills)}>Skills</li>
            <li onClick={() => executeScroll(projects)}>Projects</li>
            <li onClick={() => executeScroll(hobbies)}>Hobbies</li>
          </ul>
      </div>
    </nav>
  )
}
