function Main() {
  return (
    <div className='w-full flex flex-wrap justify-center'>
      <div className='w-full h-screen bg-black p-4'>
        {/* <p className='text-7xl font-black absolute stretch text-blue-500'>J</p> */}
        <p className='text-7xl font-black absolute select-none text-green-600'>J</p>
        <p className='text-7xl font-black absolute select-none text-white ml-[0.3rem]'>J</p>
        <p className='text-7xl font-black absolute select-none text-green-600  ml-[2.8rem] '>P</p>
        <p className='text-7xl font-black absolute select-none text-white ml-[3.1rem]'>P</p>
      </div>
      <div className='w-full h-screen bg-green-500 p-4'>
        two
      </div>
      <div className='w-full h-screen bg-blue-500 p-4'>
        three
      </div>
    </div>
  )
}

export default Main