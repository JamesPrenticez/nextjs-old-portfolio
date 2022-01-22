import { useEffect, useState } from 'react'

function TypeWriter() {
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
    <div>
    <p className={`text-7xl ${index > 0 ? 'transform transition duration-700 ease-in-out' : 'hidden'}`}>{text}</p>
  </div>
  )
}

export default TypeWriter;