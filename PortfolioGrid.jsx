import React, { useState } from "react";
import { motion } from "framer-motion";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";

import {data} from '../data';
import Modal from "./Modal";

function Item(props) {
    const { id, title, desc, images, color } = props;
    const { attributes, setNodeRef, listeners, transform, isDragging } = useSortable({
        id,
        transition: null
    });
    //console.log(isDragging);
    return (
      <motion.li 
        className="flex relative flex-grow-1 items-center box-border bg-[#044268]/90 text-white outline-none rounded-md list-none"
        style={{
          touchAction: 'none',
          postion: 'relative',
          height: 350,
          width: 300,
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
        <div className="h-full w-full p-4">
          <div className="flex w-full px-2">
            {/* Small Dot */}
            <div className="w-4 m-2 rounded-full" style={{background: color}}></div>
            <h3 className="text-2xl">{title}</h3>
          </div>

          {/* Image - images[0]*/}
          <div>
            <img className="h-full w-full m-auto rounded-sm px-4 py-3" src='/default-image.jpg' alt="" /> 
          </div>

          {/* SubTitle */}
          <div className="h-[4rem] px-4">
            <p className="italic text-gray-100 font-thin">{desc}</p>
          </div>


          {/* Open Modal/Show More */}
          <Modal props={props}/>
        
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
    <>
      <div className="inline-flex flex-wrap justify-center space-x-2 space-y-2 md:space-x-4 md:space-y-4 w-full flex-grow pb-4 mt-8 ">
        <button className="h-16 w-24 md:w-32 rounded-lg bg-red-500 ml-2 mt-2 md:mt-4 md:ml-4" onClick={() => addToFilteredIds('clone')}>
          Clone
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-green-500 " onClick={() => addToFilteredIds('database')}>
          Database
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-blue-500 " onClick={() => addToFilteredIds('crypto')}>
          Crypto
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-orange-500 " onClick={() => sort()}>
          Sort
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-yellow-400 " onClick={() => shuffle()}>
          Shuffle
        </button>
        <button className="h-16 w-24 md:w-32 rounded bg-pink-500 " onClick={() => setFilteredIds([])}>
          Show All
        </button>
      </div>
      <div className="flex justify-center items-center pt-4">
        <DndContext collisionDetection={closestCenter} sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <SortableContext strategy={rectSortingStrategy} items={items}>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {[...items]
                    .filter(item => !filteredIds.includes(item.id))// if not in filtered list
                    .map(({id, title, desc, images, color}) => (
                      <Item
                        id={id}
                        key={id}
                        title={title}
                        desc={desc}
                        images={images}
                        color={color}
                      />
                    ))} 
              </ul>
          </SortableContext>
        </DndContext>
      </div>
    </>);
}


// Forked from https://codesandbox.io/s/currying-night-8z16v?file=/src/FramerMotion.tsx
// Converted from TSX to JSX with ```npx tsc --jsx preserve -t es2020 --outDir js --noEmit false```
// Coverted use array of object rather than just and array indexOf => findIndex()
// Added filter/sort functionality
// Coverted CSS to use tailwind

// Would be cool to add this drop effect https://codesandbox.io/s/dnd-sortable-list-2-gvgr1