import React, {useState, useEffect, useRef} from 'react'

//import {data} from '../data';
//import Carousel from './Carousel';

function Modal({item}){
  const [modal, toggleModal] = useState(false)
  const modalContent = useRef(null);

  //Prevent Scroll When Modal is 'true' and set focus to allow for onBlur
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
      modalContent.current.focus()
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [modal]);

  return (
    <>
    <p 
      className="text-sm text-white hover:text-transparent cursor-pointer"
      onClick={() => toggleModal(true)}
    >
      Show More
    </p>

    <div 
      className={`${modal ? 'block' : 'hidden'} bg-black/80 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full  `}
    >
        <div className="relative px-4 w-full max-w-7xl h-full md:h-auto">
            {/* Modal content  */}
            <div 
              tabIndex = {0} //required to make a div foucusable
              ref={modalContent}
              className="relative bg-white rounded-lg shadow dark:bg-gray-700 focus:ring-2 ring-fuchsia-500"
              onBlur={() => toggleModal(false)}
            >
                {/* Modal header */}
                <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        {item.title}
                    </h3>
                    <button 
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => toggleModal(false)}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                    </button>
                </div>
                {/* Modal body */}
                <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                       {/* {item.desc} */}
                    </p>
                    {/* <Carousel images={project.images}/> */}
                </div>
                {/* Modal footer */}
                <div className="flex justify-between items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button 
                    type="button"
                    onClick={() => console.log('prev project')}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Prev
                  </button>
                  <button 
                    type="button"
                    onClick={() => console.log('next project')}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Next
                  </button>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Modal