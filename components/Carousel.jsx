import { useEffect, useState } from "react"

function Carousel({data}) {
  const [index, setIndex] = useState(0)
  const delay = 4000

  useEffect(() => {
   const timeout = setTimeout(() => {
      setIndex((prevIndex) => 
        prevIndex === cohorts.length - 1 ? 0 : prevIndex + 1
        )
    }, delay);
    return () => clearTimeout(timeout)
  },[index]);

  const goToPrevSlide = () => {
    if(index < 1){
      index = cohorts.length -1
    } else {
      index--
    }
    setIndex(index)
  }

  const goToNextSlide = () => {
    if(index === cohorts.length - 1){
      index = 0
    } else {
      index ++
    }
    setIndex(index)
  }

  return (
    <div className="border-2 border-gray-300 rounded-sm overflow-hidden">
      {/* Slideshow */}
      {/* We want to move the position of slideshow by 0% when index is 0, -100% when index is 1 and by -200% when index is 2 so on so forth. */}
      <div
        className="w-full h-[500px] whitespace-nowrap transistion ease duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} //Unfortunatly we can't use string interpolation in combination with tailwind JIT  
      >
        {cohorts.map((cohort, index1) => (
          <img 
            key={index1}
            className="w-[500px] h-[500px] inline-block" src={cohort.src}
          />
        ))}
      </div>

      {/* Lower Container */}
      <div className="w-full h-20 flex">
        {/* Left Arrow */}
        <div
          onClick={() => goToPrevSlide()}
          className="w-20 h-20 flex items-center justify-center hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 transistion ease-in-out duration-1000 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        {/* Name */}
        <h1 className="text-5xl flex flex-grow items-center justify-center">
          {cohorts[index]?.name} 
        </h1>

        {/* Right Arrow */}
        <div
          onClick={() => goToNextSlide()}
          className="w-20 h-20 flex items-center justify-center hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 transistion ease-in-out duration-1000 rounded-full ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Dots */}
        <div className="text-center">
          {cohorts.map((_, index2) => (
            <div 
            key={index2}
            onClick={() => setIndex(index2)} 
            className={`inline-block h-[20px] w-[20px] border rounded-full hover:cursor-pointer m-2 transistion ease duration-500 ${index === index2 ? 'bg-red-600' : 'bg-gray-300'}` }></div>
          ))}
         </div>
    </div>
  );
}

export default Carousel

//From: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react