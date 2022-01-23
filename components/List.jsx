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
    let increment = data.length + 1
    let color = randomColor()
    setData([...data, {id: increment, title: `${increment}`, color: `#${color}`}])
    //console.log(cardRef.current)
  }

  const subtract = () => {
    let newData = data.filter(p => p.id != data[data.length -1].id)
    setData(newData)
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
          className=''
          style={{backgroundColor: `${item.color}`}}
      >
        {item.title}
      </div>
    ))} 
  </>
  )
}

export default List;

// https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks