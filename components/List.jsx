import { projects } from '../data';
import React, { useEffect, useRef, useState } from 'react';


function List() {

  const cardRef = useRef([])
  //const [data, setData] = useState(['1', '2', '3', '4', '5']
  const [data, setData] = useState(projects) //arry of objects

  const randomColor = () => {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  //Dynamically append a useRef arry
  useEffect(() => {
    cardRef.current = cardRef.current.slice(0, data.length);
  }, [cardRef, data]);

  const add = () => {
    let increment = data.length
    let color = randomColor()
    setData([...data, {id: increment, position: increment, title: `${color}`, color: `#${color}`}])
    //console.log(cardRef.current)
  }

  const subtract = () => {
    let a = data
    let newData = a.filter(p => p.position != a[a.length -1].position)
    setData(newData)
  }

  const shuffle = () => {
    let list = data
    let i = list.length -1, randomI, currentPos, randomPos
    //While there remains elements to shuffle... works top back to 0 index
    while(i >= 1){

      randomI = Math.ceil(Math.random() * i--)

      //Find a pair to swap
      currentPos = list[i].position //current position in array
      randomPos = list[randomI].position //find a random position another
      
      //Make the swap
      list[i].position = randomPos//assign the new position 
      list[randomI].position = currentPos//assign the old index to the element it got swapped with 
    }
    //update state
    let newList = list.map(p => p.id == list[i].id ? {...p, position: list[i].position} : p)
    setData(newList)
  }

  const sort = () => {
    console.log("hi")
  }

  return (
  <>
    <button type="button" className='px-8 py-4 bg-purple-500' onClick={() => shuffle()}>Shuffle</button>
    <button type="button" className='px-7 py-4 bg-yellow-500' onClick={() => sort()}>Sort</button>
    <button type="button" className='px-7 py-4 bg-green-500' onClick={() => add()}>Add</button>
    <button type="button" className='px-7 py-4 bg-red-500' onClick={() => subtract()}>Subtract</button>
    
    {data.map((item, i) => (
      <div
          id={item.id} 
          key={i} 
          ref={element => cardRef.current[i] = element} 
          style={{width: '100%', backgroundColor: `${item.color}`, padding: "10px", marginTop: `${item.position}00px`, position:'absolute'}}
      >
        {item.position + " " + item.title}
      </div>
    ))} 
  </>
  )
}

export default List;

// https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks