import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

const Items = ["teal", "tomato", "thistle", "aquamarine"]

const arr = ["one", " two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]

function wrap(min, max, v) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

const swipeConfidenceThreshold = 10000

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default function FramerCarousel() {
  const [[page], setPage] = useState([0, 0])
  const curr = wrap(0, Items.length, page)
  const prev = wrap(0, Items.length, page - 1)
  const next = wrap(0, Items.length, page + 1)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
<div className="flex w-full h-full items-center">

      <div className="flex w-full h-[60%] items-center justify-center space-x-4 overflow-hidden">
        <AnimateSharedLayout>
            <motion.div
              className="h-full w-[250px] -translate-x-[250px] invisible"
              key={Items[prev]}
              layoutId={Items[prev]}
              style={{ background: Items[prev]}}
            >
            {Items[prev]}
          </motion.div> 


          <div className="flex max-w-7xl w-[80rem] h-full overflow-hidden items-center space-x-4">
            <button 
              className="z-50 select-none"
              onClick={() => paginate(-1)}
            >
              {"<"}
            </button>

            {/* Middle */}
            <motion.div
              key={Items[curr]}
              className=" w-full h-full cursor-pointer "
              layoutId={Items[curr]}
              style={{ background: Items[curr] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >

              <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
                {arr.filter((item, index) => index >= (curr * 3) &&  index < (curr * 3 + 3)).map((item) =>(
                  <div className="h-full w-full flex items-center justify-center border">{item}</div>
                  ))}
              </div>

            </motion.div>

            <button 
              className="z-50 select-none"
              onClick={() => paginate(1)}
            >
              {">"}
            </button>

          </div>

          <motion.div
            className="h-full w-[250px] translate-x-[250px] invisible"
            key={Items[next]}
            layoutId={Items[next]}
            style={{ background: Items[next] }}
          >
            {Items[next]}
          </motion.div>
          
        </AnimateSharedLayout>
      </div>
      </div>

  )
}