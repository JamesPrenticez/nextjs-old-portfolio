//https://www.youtube.com/watch?v=nyg5Lpl6AiM

import { useState, useEffect } from "react";
import { data } from "../data";
import Link from "next/Link";
import {motion, AnimatePresence} from 'framer-motion'
import { arrayMove } from "@dnd-kit/sortable";
//import Modal from "./Modal";

import React from "react";
import Modal from "./Modal";

function Grid() {
  const [items, setItems] = useState(data);
  const [filtered, setFiltered] = useState(items)
  const [active, setActive] = useState('all')

  useEffect(() => {
    if(active === 'all') setFiltered(items)
    const filteredItems = items.filter((item) => item.tags.includes(active))
    setFiltered(filteredItems)
  }, [active])

  function shuffle(){
    let shuffledArrayOfItems = filtered.sort(() => Math.random() - 0.5) 
    setFiltered((items) => arrayMove(items, items.findIndex((item) => item.id), shuffledArrayOfItems.findIndex((item) => item.id)))
  }

  function sort(){
    let sortedArrayOfItems = filtered.sort((a, b) => { return a.id - b.id })
    setFiltered((items) => arrayMove(items, items.findIndex((item) => item.id), sortedArrayOfItems.findIndex((item) => item.id)))
  }

  const buttonStyle = "w-full h-full text-blue-700 hover:text-white font-bold py-8 hover:bg-blue-700 w-full bg-gray-300" 
  return (
    
    <div className="min-h-screen bg-black p-4">
      {/* Filter Buttons */}
      <div className="grid grid-cols-5 lg:grid-cols-10 gap-[0.15rem] bg-blue-700 justify-between flex-wrap w-full border-t-[0.15rem] border-b-[0.15rem] border-blue-700">
        <button onClick={() => setActive('group')} className={`${buttonStyle} ${active === 'group' ? '!bg-blue-700 !text-white' : ''}`}>Group</button>
        <button onClick={() => setActive('hobby')} className={`${buttonStyle} ${active === 'hobby' ? '!bg-blue-700 !text-white' : ''}`}>Hobby</button>
        <button onClick={() => setActive('clone')} className={`${buttonStyle} ${active === 'clone' ? '!bg-blue-700 !text-white' : ''}`}>Clone</button>
        <button onClick={() => setActive('database')} className={`${buttonStyle} ${active === 'database' ? '!bg-blue-700 !text-white' : ''}`}>Database</button>
        <button onClick={() => setActive('authentication')} className={`${buttonStyle} ${active === 'authentication' ? '!bg-blue-700 !text-white' : ''}`}>Auth</button>
        <button onClick={() => setActive('crypto')} className={`${buttonStyle} ${active === 'crypto' ? '!bg-blue-700 !text-white' : ''}`}>Crypto</button>
        <button onClick={() => setActive('ecommerce')} className={`${buttonStyle} ${active === 'ecommerce' ? '!bg-blue-700 !text-white' : ''}`}>Ecom</button>
        <button onClick={() => sort()} className={buttonStyle}>Sort</button>
        <button onClick={() => shuffle()} className={buttonStyle}>Shuffle</button>
        <button onClick={() => setActive('all')} className={`${buttonStyle} ${active === 'all' ? '!bg-blue-700 font-extrabold !text-white' : ''}`}>All</button>
      </div>

      <div>
        <motion.div layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 md:pd-6 mt-4"
          >
          {/* Post Display Card */}
          <AnimatePresence>
          {filtered.map((item) => {
            return (
              <motion.div layout
              key={item.id}
              animate = {{ opacity: 1}}
              initial = {{ opacity: 0}}
              exit = {{ opacity: 0}}
              className="p-[2px] rounded-lg"
              style={{backgroundImage: item.color || 'red'}}
              >
                <div className="overflow-hidden rounded-lg ">
                  <div 
                    className="group overflow-hidden border-b-2"
                    style={{borderColor: 'transparent'}}
                    >
                    <Link href={`/`}>
                      <img
                        className="object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                        src={item.images[0] || "/default-image.jpg"}
                        />
                    </Link>
                  </div>

                  <div className="p-2 h-[6rem] bg-black ">
                    <div 
                      className="bg-clip-text flex justify-between items-center"
                      style={{backgroundImage: item.color}}
                      >
                      <p className="text-[1.125rem] font-bold text-transparent ">{item.title}</p>
                      <Modal item={item}/>
                    </div>
                      <p className="text-[1rem] text-white">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
              )
            }
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Grid;
