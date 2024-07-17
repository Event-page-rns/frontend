import React from 'react'
import cubeImg from '../assets/deployed_code_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'

const Features = () => {
  return (
    <section className='bg-slate-600 flex justify-center items-center text-white py-20 ' id='Features'>
      <div className='w-[80%] max-lg:w-[90%] flex flex-col justify-center items-center gap-10'>
        <div className='text-center flex flex-col '>
          <p>FEATURES</p>
          <p className='text-4xl font-bold max-sm:text-2xl'>Explore Exciting Features</p>
        </div>
        <p className='text-center'>Discover how our event website can enhance your college experience</p>
        <div className='flex gap-8 flex-wrap justify-center items-center'>
          <div className='w-[300px] h-[150px] bg-red-400 p-5'>
            <div className='flex gap-x-4 mb-3'>
              <img src={cubeImg} alt="Feature icon" />
              <p>Club Events Listing</p>
            </div>
            <p>Easily browse and discover events organized by various college clubs</p>
          </div>
          <div className='w-[300px] h-[150px] bg-red-400 p-5 gap-3'>
            <div className='flex gap-x-4 mb-2'>
              <img src={cubeImg} alt="Feature icon" />
              <p>Event Details</p>
            </div>
            <p>Get all the necessary information about each event including time, location, and description.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
