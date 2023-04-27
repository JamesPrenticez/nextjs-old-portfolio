import { useEffect, useState } from "react"

function Carousel({images}) {
  const [index, setIndex] = useState(0)
  //const delay = 4000

  //Reset index when image props change..
  useEffect(()=>{
    return () => {
      setIndex(0)
    }
  }, [images])

  // useEffect(() => {
  //  const timeout = setTimeout(() => {
  //     setIndex((prevIndex) => 
  //       prevIndex === images?.length - 1 ? 0 : prevIndex + 1
  //       )
  //   }, delay);
  //   return () => clearTimeout(timeout)
  // },[index]);

  const goToPrevSlide = () => {
    if(index < 1){
      index = images?.length -1
    } else {
      index--
    }
    setIndex(index)
  }

  const goToNextSlide = () => {
    if(index === images?.length - 1){
      index = 0
    } else {
      index ++
    }
    setIndex(index)
  }

  return (
    <div className="relative flex justify-center h-full w-full flex-wrap">
      <div className=" flex justify-center overflow-hidden w-full h-full ">
        {/* Slideshow */}
        {/* We want to move the position of slideshow by 0% when index is 0, -100% when index is 1 and by -200% when index is 2 so on so forth. */}
        <div
          className="whitespace-nowrap transistion ease duration-1000 "
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} //Unfortunatly we can't use string interpolation in combination with tailwind JIT
        >
          {images?.map((image, index) => (
            <img
              //onBlurdataURL
              key={index}
              className="object-contain w-full h-full inline-block border-none outline-none"
              src={image}
            />
          ))}
        </div>
      </div>


        {/* Left Arrow */}
        <div
          onClick={() => goToPrevSlide()}
          className="absolute  left-0 w-16 h-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 transistion ease-in-out duration-1000"
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

        {/* Dots */}
        <div className="absolute bottom-0 text-center flex">
          {images?.map((_, index2) => (
            <div
              key={index2}
              onClick={() => setIndex(index2)}
              className={`inline-block h-2 w-2 rounded-full hover:cursor-pointer m-2 transistion ease duration-500 ${
                index === index2 ? "bg-sky-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          onClick={() => goToNextSlide()}
          className="absolute right-0 w-16 h-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 transistion ease-in-out duration-1000"
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
  );
}

export default Carousel

//From: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react