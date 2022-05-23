import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

const Items = ["teal", "tomato", "thistle", "aquamarine"]

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
    <div className="w-full max-w-7xl mx-auto flex flex-col h-full items-center justify-center p-12">
        <AnimateSharedLayout>
          <div className="flex w-full h-[80%] overflow-hidden items-center space-x-4">

            <button 
              className="z-50 select-none"
              onClick={() => paginate(-1)}
            >
              {"<"}
            </button>

            <motion.div
              className="w-full h-[80%]"
              key={Items[prev]}
              layoutId={Items[prev]}
              style={{ background: Items[prev] }}
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
              {Items[prev]}
            </motion.div>


            <motion.div
              key={Items[curr]}
              className="w-full h-full cursor-pointer"
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
              {Items[curr]}
            </motion.div>

          <motion.div
            className="w-full h-[80%]"
            key={Items[next]}
            layoutId={Items[next]}
            style={{ background: Items[next] }}
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
            {Items[next]}
          </motion.div>

          <button 
            className="z-50 select-none"
            onClick={() => paginate(1)}
          >
            {">"}
          </button>

          </div>
        </AnimateSharedLayout>
    </div>
  )
}