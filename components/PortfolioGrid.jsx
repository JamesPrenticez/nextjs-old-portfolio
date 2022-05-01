import React, { useState } from "react";
import Image from 'next/image'
import { motion } from "framer-motion";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import TextEffect from "./TextEffect";

import {data} from '../data';


function Item(props) {
    const { id, title, desc, img, color } = props;
    const { attributes, setNodeRef, listeners, transform, isDragging } = useSortable({
        id,
        transition: null
    })
    return (
      <motion.li 
        className="relative rounded-md bg-blue-600"
        style={{
          touchAction: 'none',
        }}
        ref={setNodeRef}
        tabIndex={0}
        layoutId={id}
        animate={transform 
          ? {
              x: transform.x,
              y: transform.y,
              scale: isDragging ? 1.05 : 1,
              zIndex: isDragging ? 1 : 0,
              boxShadow: isDragging ? "0 0 0 1px rgba(22, 163, 74, 0.05), 0px 0px 2px 2px rgba(255, 255, 255, 0.75)" : undefined
            } : {
            x: 0,
            y: 0,
            scale: 1
          }}
      
        transition={{
          duration: !isDragging ? 0.25 : 0,
          easings: {
              type: "spring"
          },
          scale: {
              duration: 0.25
          },
          zIndex: {
              delay: isDragging ? 0 : 0.25
          }
        }}
        
        {...attributes}
        {...listeners}
      >

          {/* Small Dot */}
          {/* <div className="flex w-full px-2">
            <div className="w-4 h-4 m-2 rounded-full" style={{background: color}}></div>
            <h3 className="text-xl">{title}</h3>
          </div> */}

          {/* Image - images[0]*/}
                {/* <div className="relative h-full w-full rounded-md p-5 shadow-lg">
                  <Image
                      src={img.src}
                      alt={img.alt}
                      height={img.height}
                      width={img.width}
                      layout="intrinsic"
                    />
                </div> */}
                <img
                  className="h-full w-full rounded-md p-5 shadow-lg"
                  src={img.src || "/default-image.jpg"}
                  alt=''
                  />
                <div className="flex items-center justify-center h-full w-full rounded-md absolute top-0 left-0 right-0 bottom-0 bg-blue-600 transition-opacity duration-1000 ease-out opacity-0 hover:opacity-90">
                  {title}
                </div>
      </motion.li>
    );
}

export default function PortfolioGrid() {    
    const [items, setItems] = useState(data)
    const [filteredIds, setFilteredIds] = useState([])
    const [activeId, setActiveId] = useState(null)//being dragged

    const sensors = useSensors(useSensor(PointerSensor));

    function handleDragStart({ active }){
        //console.log(active);
        setActiveId(active.id);
    }

    function handleDragEnd({ over }){
        //console.log(over)
        // const a = items.findIndex((item) => item.id === activeId);
        // const b = items.findIndex((item) => item.id === over.id)
        setItems((items) => arrayMove(items, items.findIndex((item) => item.id === activeId), items.findIndex((item) => item.id === over.id)))
        setActiveId(null);
    }

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
    <div className="p-10">
    <div className="flex w-full justify-center text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold">
      <TextEffect text={"Projects"}/>
    </div>
    <div className="inline-flex flex-wrap justify-center space-x-2 space-y-2 md:space-x-4 md:space-y-4 w-full flex-grow pb-2 mt-2 ">
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
      <div className="flex justify-center items-center pt-4 ">
        {/* <DndContext collisionDetection={closestCenter} sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}> */}
          <SortableContext strategy={rectSortingStrategy} items={items}>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-7xl">
                  {[...items]
                    .filter(item => !filteredIds.includes(item.id))// if not in filtered list
                    .map(({id, title, desc, img, color}) => (
                      <Item
                        id={id}
                        key={id}
                        title={title}
                        desc={desc}
                        img={img}
                        color={color}
                      />
                    ))} 
              </ul>
          </SortableContext>
        {/* </DndContext> */}
      </div>
    </div>
  )
}

