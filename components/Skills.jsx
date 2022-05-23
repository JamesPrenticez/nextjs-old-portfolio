import React, {useState} from 'react'
import { softSkills, techSkills } from '../data' 
import TextEffect from './TextEffect'

export default function Skills() {
  return (
    // Timeline
    <>
      <div className="flex w-full justify-center">
      
      <div className="max-w-7xl w-full mx-auto">

      

      <div className="flex justify-center text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold pt-10 px-10 w-full">
        <TextEffect text={"Skills"} />
      </div>  



 
     <div className="flex justify-between">
        <div className="w-[49%]">


          {softSkills.map(skill => (
            <div 
            key={skill.id}
            className=' text-gray-700 p-4 rounded-md w-full my-3 ml-auto shadow-lg bg-gray-300'
            >
              <h2 className='flex items-center justify-between text-2xl'>
                <span className='grow'>{skill.title}</span>
                <span className='cursor-pointer w-12 h-12'>{skill.icon}</span>
              </h2>
            </div>
          ))}
        </div>

        <div className="w-[49%]">

          {techSkills.map(skill => (
            <div 
            key={skill.id}
            className=' text-gray-700 p-4 rounded-md w-full my-3 ml-auto shadow-lg bg-gray-300'
            >
              <h2 className='flex items-center justify-between text-2xl'>
                <span className='grow'>{skill.title}</span>
                <span className='cursor-pointer w-12 h-12'>{skill.icon}</span>
              </h2>
            </div>
          ))}
        </div>
      </div> 





      </div>
    </div>
    </>

  )
}
