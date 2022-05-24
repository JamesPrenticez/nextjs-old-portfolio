import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons/common";

const data = [
  { id: 0, color: "teal" },
  { id: 1, color: "tomato" },
  { id: 2, color: "aquamarine" }
]

export default function FramerCarousel() {
  const [items, setItems] = useState(data)

  const arrayMove = (arr, oldIndex, newIndex) => {
  if (newIndex >= arr.length) {
      var k = newIndex - arr.length + 1;
      while (k--) {
          arr.push(undefined);
      }
  }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr
  }

  const arrayWrap = (x) => {
    let arr = [...x]
    let shift = arr.shift();
    arr[arr.length] = shift;
    setItems(arr)
  }


  const move = (direction) => {
    // direction forward = 1
    // direction backwards = -1
    let copiedArray = [...items]
    arrayMove(copiedArray, 0, direction)
    setItems(copiedArray)
  }


  const goToPrevSlide = () => {
    if(index < 1){
      index = items.length -1
    } else {
      index--
    }
    setIndex(index)
  }
  
  const goToNextSlide = () => {
    if(index === items.length - 1){
      index = 0
    } else {
      index ++
    }
    setIndex(index)
  }

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col h-full items-center justify-center p-12">
      <div className="border-2 border-gray-300 rounded-sm w-full flex justify-center">
            <AnimateSharedLayout>
              {items.map((item) => {
                return (
                  <motion.div layout
                    key={item.color}
                    className="w-[250px] h-[500px]"
                    style={{ 
                      background: item.color,
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                  >
                  <div className="">
                    <p>
                      id: {item.id}
                    </p>
                    <p>
                      color: {item.color}
                    </p>
                  </div>
                </motion.div>
                )
              })}
            </AnimateSharedLayout>
        </div>



      <button className="z-50 select-none" onClick={() => move(-1)}>
          <ChevronLeftIcon className="h-12 w-12 bubble" />
        </button>
      <button className="z-50 select-none" onClick={() => move(1)}>
          <ChevronRightIcon className="h-12 w-12 bubble" />
        </button>


        <button 
          className="bg-red-500 w-24 h-24"
          onClick={() => arrayWrap(items)}
        >
          move
        </button>
    </div>
  );
}
