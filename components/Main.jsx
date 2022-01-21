import { useEffect, useState } from 'react'

function Main() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  let string = "Hi, I'm James "

  useEffect(() => {
    const typeWriter = setTimeout(() => {
      if(index === string.length) return
       setIndex((prevIndex) => 
        prevIndex === string.length ? true : prevIndex + 1
         )
         setText(string.substring(0, index))
         console.log(index)
     }, 150);
     return () => clearTimeout(typeWriter)
   },[index]);

  return (
    <div className='w-full flex flex-wrap justify-center'>
      <div className='w-full h-screen bg-[hsl(210,50%,5%)] p-4'>

        <div className='w-[6.5rem] h-[6.5rem]'>
          <p className='text-7xl font-black absolute select-none text-green-600 mt-[0.8rem]'>J</p>
          <p className='text-7xl font-black absolute select-none text-white mt-[0.8rem] ml-[0.3rem]'>J</p>
          <p className='text-7xl font-black absolute select-none text-green-600 mt-[0.8rem] ml-[2.8rem] '>P</p>
          <p className='text-7xl font-black absolute select-none text-white mt-[0.8rem] ml-[3.1rem]'>P</p>
        </div>

        <div>
          <p className={`text-white text-7xl ${index > 0 ? 'transform transition duration-700 ease-in-out' : 'hidden'}`}>{text}</p>
        </div>

      </div>


      <div className='w-full h-screen bg-green-500 p-4'>
        two
      </div>
      <div className='w-full h-screen bg-blue-500 p-4'>
        three
      </div>
    </div>
  )
}

export default Main