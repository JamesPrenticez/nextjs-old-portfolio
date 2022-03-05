import React from 'react'

const Header = () => {
  return (
    <nav className='py-5 absolute top-0 w-full'>
      <div className='flex justify-between items-center mx-10'>
        {/* Left */}
        <div>
 
        </div>

        {/* Right */}
        <div>
          <ul className='flex space-x-4'>
              <li>Projects</li>
              <li>Skills</li>
              <li>Hobbies</li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header