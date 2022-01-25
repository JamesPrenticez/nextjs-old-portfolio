import React, {useLayoutEffect, useRef} from 'react';
import { animate } from 'popmotion'

function Card({item, i, matrix}) {
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
  }, [item.position])

console.log(matrix)

  return (
      <div
        id={item.id} 
        key={i}
        ref={ref}  
        style={{
          width: '100%',
          padding: "10px",
          backgroundColor: `${item.color}`,
          gridColStart: `${matrix[item.position][0]}`,
          gridRowStart: `${matrix[item.position][1]}`,
        }}
      >
        {item.id + " " + item.title}
      </div>
  );
}

export default Card;