import React from 'react'
import { softSkills } from '../data' 

export default function Skills() {
  return (
    // Timeline
    <div className="flex items-center justify-center h-full">
      <div className="relative max-w-7xl">
        {softSkills.map(skill => (
          <div 
            key={skill.id}
            className='bg-gray-100 text-gray-700 p-4 rounded-md w-[49%] my-3 even:ml-auto shadow-lg'
          >
            <h2 className='flex justify-between text-2xl'>
              <span className='grow'>{skill.title}</span>
              <span className='cursor-pointer'>{skill.icon}</span>
            </h2>
            <p className='py-4 '>
              {skill.content} 
            </p>
            
          </div>
        ))}
      </div>
    </div>

  )
}
