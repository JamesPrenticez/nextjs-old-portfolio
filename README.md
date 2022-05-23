# James' Web Dev Portfolio

Dark Blue - #002d49

gradient-to-r from-[#055080] via-[#044268] to-[#002d49]

gradient-to-r from-cyan-500 to-blue-500

bg-[#044268]

radial-gradient(circle, rgba(37,99,235,1) 0%, rgba(29,78,216,1) 100%)


### Image optimization
<div className="realative">
  <Image
    src={images[0]}
    alt={images[0]}
    layout="fill"
    //height={732}
    //width={1500}
  />
</div>

//next.config - to match break points with tailwind
module.exports = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
  }
}

### Draggable Carousel
https://codesandbox.io/s/framer-motion-carousel-40xnd
https://codesandbox.io/s/framer-motion-image-gallery-dx0pb?file=/src/Example.tsx
https://codesandbox.io/s/framerx-carousel-0xt2u?file=/src/index.tsx:133-146
