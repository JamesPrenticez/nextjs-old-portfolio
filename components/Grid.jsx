import { projects } from '../data';
import React, { useState } from 'react';
import Card from './Card';

function Grid() {
  const [data, setData] = useState(projects) //arry of objects

  const shuffle = () => {
    let list = data
    let i = list.length -1, randomI, currentPos, randomPos

    //While there remains elements to shuffle...works backwards 8 => 1
    while(i > 0){
      //console.log(list[i])
      randomI = Math.ceil(Math.random() * i--)

      //Find a pair to swap
      currentPos = list[i].position //current position in array
      randomPos = list[randomI].position //find a random position another
      
      //Make the swap
      list[i].position = randomPos//assign the new position 
      list[randomI].position = currentPos//assign the old index to the element it got swapped with 
    }
    //update state with position and sort
    let newList = list.map(p => p.id == list[i].id ? {...p, position: list[i].position} : p)
    setData(newList)
  }

  // const sortById = () => {
  //   let list = data
  //   let i = list.length -1, currentPos, updatedPos
  //   let sortedList = list.sort((a, b) => a.position > b.position ? 1 : -1)

  //   while(i>1){
  //     //Find a pair to swap
  //     currentPos = list[i].position //current position in array
  //     // match to sorted list 
  //   }
  //   sortedList.map(p => p.id == list[i].id ? {...p, position: list[i].position} : p)
  //   console.log(sortedList)
  // }

  let matrix = [
    [1,1], [1,2], [1,3],
    [2,1], [2,2], [2,3],
    [3,1], [3,2], [3,3],
  ]

  return (
  <>
    <div className='w-full flex justify-center bg-gray-800'>
      {/* <button type="button" className='px-7 py-4 bg-yellow-500' onClick={() => sortById()}>SortById</button> */}
      <button type="button" className='px-8 py-4 bg-purple-500' onClick={() => shuffle()}>Shuffle</button>
    </div>

    <div className='w-full h-screenNav flex justify-center items-center bg-black-100'>
      <div className='w-[60vw] h-[80vh]'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-rows-9 md:grid-rows-5 lg:grid-rows-3 h-full gap-8 rounded-sm'>
          {data.map((item, i) => (
            <Card 
              item={item} 
              i={i}
              matrix={matrix}
            />
            ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default Grid;

// https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

// Grid properties are not directly animatable.
// To animate between them, you must save their visual state before the change (width, height, absolute position with regards to the viewport)
// make the change to the properties, then animate from the saved values to the new values. This sort of transition commonly is called the FLIP technique.
// Flip technique in React https://souporserious.com/build-a-simple-flip-animation-in-react/