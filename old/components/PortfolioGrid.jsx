import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SortableContext, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import TextEffect from "./TextEffect";

import {data} from '../data';
import { CrossIcon } from "./icons/common";

function Card({ item, handleClick }){
  const { id, title, img } = item
  return (
    <motion.li 
      className="relative rounded-md bg-blue-600 cursor-pointer"
      onClick={() => handleClick(id)}
      tabIndex={0}
      layoutId={id}
    >
      <img
        className="h-full w-full rounded-md p-5 shadow-lg"
        src={img.src || "/default-image.jpg"}
        alt=''
      />
      <div className="flex items-center justify-center h-full w-full rounded-md absolute top-0 left-0 right-0 bottom-0 bg-blue-600 transition-opacity duration-1000 ease-out opacity-0 hover:opacity-90">
        {title}
      </div>
    </motion.li>
  )
}

function Modal({selectedId, setSelectedId, item}){
  const { id, title, img } = item
  return (
  <motion.div 
    layoutId={selectedId}
    className="bg-blue-600 rounded-md fixed z-50 top-[5%] left-[5%] w-[90%] h-[90%] p-6 border border-white"
  >
    <motion.div onClick={() => setSelectedId(null)} className="flex">
      <motion.h2>{title}</motion.h2>
      <CrossIcon className="h-12 w-12 text-white ml-auto cursor-pointer"/>
    </motion.div>
    <img
        className="h-1/2 w-1/2"
        src={img.src || "/default-image.jpg"}
        alt=''
    />
  </motion.div>
  )
}


export default function PortfolioGrid() {    
    const [items, setItems] = useState(data)
    const [selectedId, setSelectedId] = useState(null) //onclick modal
    const [filteredIds, setFilteredIds] = useState([])

    function addToFilteredIds(word){
      let newArrayOfItems = items.filter(item => item.tags.includes(word) === false)
      let newArrayOfItemIds = newArrayOfItems.map(item => item.id)
      setFilteredIds(newArrayOfItemIds)
    }

    function sort(){
      let sortedArrayOfItems = items.sort((a, b) => { return a.id - b.id })
      setItems((items) => arrayMove(items, items.findIndex((item) => item.id), sortedArrayOfItems.findIndex((item) => item.id)))
    }

    function shuffle(){
      let shuffledArrayOfItems = items.sort(() => Math.random() - 0.5) 
      setItems((items) => arrayMove(items, items.findIndex((item) => item.id), shuffledArrayOfItems.findIndex((item) => item.id)))
    }

    return (
    <div className="min-h-screen">
      <div className="flex w-full justify-center text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold pt-10 pb-5 px-10 ">
        <TextEffect text={"Projects"}/>
      </div>
      <div className="inline-flex flex-wrap justify-center space-x-2 space-y-2 md:space-x-4 md:space-y-4 w-full flex-grow pb-2">
        <button className="h-16 w-24 md:w-32 rounded-lg bg-red-500 ml-2 mt-2 md:mt-4 md:ml-4" onClick={() => addToFilteredIds('group')}>
          Group
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-green-500 " onClick={() => addToFilteredIds('database')}>
          Database
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-blue-500 " onClick={() => addToFilteredIds('crypto')}>
          Crypto
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-orange-500 " onClick={() => shuffle()}>
          Shuffle
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-yellow-400 " onClick={() => sort()}>
          Sort
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-fuchsia-500 " onClick={() => setFilteredIds([])}>
          Show All
        </button>
      </div>
      <div className="flex justify-center items-center pt-4">
          <SortableContext strategy={rectSortingStrategy} items={items}>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-7xl ">
              {[...items]
                .filter(item => !filteredIds.includes(item.id))// if not in filtered list
                .map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    handleClick={setSelectedId}
                  />
                ))} 
            </ul>
          </SortableContext>

          {/* Modal */}
          {selectedId && (
          <AnimatePresence>
              {/* <div className="absolute top-0 left-0 bg-blue-700/90 h-full w-full"> */}
                <Modal selectedId={selectedId} setSelectedId={setSelectedId} item={items.find(item => item.id === selectedId)}/>
              {/* </div> */}
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

// {items[selectedId].name}