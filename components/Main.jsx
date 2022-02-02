import PortfolioGrid from './PortfolioGrid';
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
      <div className='w-full h-full md:h-screen'>
        <PortfolioGrid />
      </div>

      {/* Three */}
      <div className='w-full h-screen flex flex-wrap md:inline-flex'>

        {/* Form */}
        <div className='w-full md:w-1/2 p-8'>
          <form className='' action="/">
            <fieldset className='border border-solid border-gray-300 p-8'>
              <legend className='text-4xl px-4'>Contact Me</legend>

              <div className='pl-4 space-y-4'>
                <label className='' htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <br/>

                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/>
                <br/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"/>
                <br/>

                <button 
                  className="btn mt-12 float-right px-12 py-4 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-green-600 rounded-lg duration-500"
                  type="submit" 
                  value="Submit"
                >
                  <span className="absolute inset-0 bg-white"></span>
                  <span className="absolute inset-0 flex justify-center items-center font-bold">Submit</span>
                  Submit
                </button>
              </div>
            </fieldset>
            </form>
        </div>

        {/* Map */}
        <div className='w-full md:w-1/2 bg-map bg-cover bg-center bg-no-repeat'/>
      </div>
    </main>
  )
}

export default Main