import React from 'react'

function TextEffect({text}) {
  return (
    <div>
      <p className='absolute select-none text-gray-500'>{text}</p>
      <p className='font-bold text-gray-100 relative ml-[0.15rem] md:ml-1 lg:ml-2'>{text}</p>
    </div>
  )
}

export default TextEffect