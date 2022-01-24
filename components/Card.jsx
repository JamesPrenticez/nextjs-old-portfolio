import React, {useLayoutEffect, useRef, useState} from 'react';
import { animate } from 'popmotion'

function Card() {
  const [move, setMove] = useState(false)
  const ref = useRef(null)
  const lastBounds = useRef(null)

  function getInvertedTransform(startBounds, endBounds) {
    return {
      x: startBounds.x - endBounds.x,
      y: startBounds.y - endBounds.y,
      scaleX: startBounds.width / endBounds.width,
      scaleY: startBounds.height / endBounds.height,
    }
  }

  useLayoutEffect(() => {
    const bounds = ref.current.getBoundingClientRect()
    if (lastBounds.current) {
      const invertedTransform = getInvertedTransform(lastBounds.current, bounds)
      animate({
        from: invertedTransform,
        to: { x: 0, y: 0, scaleX: 1, scaleY: 1 },
        duration: 800,
        onUpdate: (transform) => {
          const { x, y, scaleX, scaleY } = transform
          const translate = `translate(${x}px, ${y}px)`
          const scale = `scale(${scaleX}, ${scaleY})`
          ref.current.style.transform = `${translate} ${scale}`
        },
      })
    }
    lastBounds.current = bounds
  }, [move])


  return (
  <div className='w-full h-screen flex justify-center items-center bg-pink-400'>
    <div className='w-[60vw] h-[80vh] flex'
      style={{justifyContent: move ? 'flex-end' : 'flex-start',}}
      >
      {/* Box */}
      <div
        id= "box"
        ref= {ref}
        onClick={() => setMove((bool) => !bool)}
        style={{
          display: 'flex',
          width: 100,
          height: 100,
          background: 'blue',
        }}
      >
      </div>
    </div>
  </div>
  );
}

export default Card;