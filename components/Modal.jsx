import Link from 'next/link';
import React, {useRef, useEffect} from 'react'
import Carousel from './Carousel';

function Modal({item, modalIsOpen, toggleModalIsOpen}){
  const modalContent = useRef(null);

  // useEffect(() => {
  //   if (modalIsOpen) {
  //     modalContent.current.focus()
  //   }
  // }, [modalIsOpen]);
  //console.log(item.tech)

  return (
      <div
        className={`${modalIsOpen ? "flex" : "hidden"} bg-black/80 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 justify-center items-center md:inset-0`}
      >
        {/* Modal content  */}
        <div
          //tabIndex={0} //required to make a div foucusable
          //ref={modalContent}
          className="relative rounded-lg shadow bg-gray-700 w-full max-w-[60vw] focus:ring-none"
          onBlur={() => toggleModalIsOpen(false)}
        >
          {/* Modal header */}
          <div className="flex justify-between items-center p-5 rounded-t border-b border-gray-600">
            <div className='inline-flex items-center space-x-4 text-3xl font-medium text-white'>
              <h3 className="h-full bg-yellow-300">
                {item.title}
              </h3>
              <Link href={item.link || item.video || ""} passHref>
                <a target={'_blank'} className="text-2xl text-sky-500 underline cursor-pointer">
                  {item.link || item.video}
                </a>
              </Link>
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
              onClick={() => toggleModalIsOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Modal body */}
          <div className='relative h-1/5 bg-red-500 w-full'>
          <Carousel images={item?.images}/>

          </div>

          <div className="p-6 space-y-6 text-xl leading-relaxed text-white">
            <p className="">
              {item.desc}
            </p>
            <ul className='inline-flex space-x-2'>
              {item.tech?.map((item, index) => (
               <li className='bg-sky-500 p-2 rounded-md' key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Modal footer */}
          <div className="flex justify-between items-center p-6 space-x-2 rounded-b border-t border-gray-600">
          </div>
        </div>
      </div>
  );
}

export default Modal