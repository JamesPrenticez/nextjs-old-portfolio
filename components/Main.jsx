
import TypeWriter from "./TypeWriter"

function Main() {
  return (
    <main className='w-full flex flex-wrap justify-center'>
      {/* One */}
      <div className='w-full h-screen p-4'>
        <div className='w-[6.5rem] h-[6.5rem]'>
          <p className='text-7xl font-black absolute select-none text-green-600 mt-[0.8rem]'>J</p>
          <p className='text-7xl font-black absolute select-none mt-[0.8rem] ml-[0.3rem]'>J</p>
          <p className='text-7xl font-black absolute select-none text-green-600 mt-[0.8rem] ml-[2.8rem] '>P</p>
          <p className='text-7xl font-black absolute select-none mt-[0.8rem] ml-[3.1rem]'>P</p>
        </div>
        <TypeWriter />
      </div>

      {/* Two */}
      <div className='w-full h-screen p-4'>
        two
      </div>

      {/* Three */}
      <div className='w-full h-screen inline-flex'>
        <div className='w-1/2 h-full bg-red-500'>

        </div>
        <div className='w-1/2'>
          <img className="h-full w-full" src="map.png" alt="" />
        </div>
      </div>
    </main>
  )
}

export default Main