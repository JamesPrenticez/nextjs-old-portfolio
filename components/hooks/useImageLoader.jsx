export const nextImageLoader = ({ src, width, quality }) => {
  return `${NEXT_PUBLIC_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
}