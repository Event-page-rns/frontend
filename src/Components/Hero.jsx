import React from 'react'
import arrow from '../assets/arrow_forward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import mainImg from '../assets/irl_event.svg'
import { Navigate, useNavigate } from 'react-router-dom'


const Hero = () => {
    const navigation = useNavigate();
  return (
    <section className='flex justify-center items-center mt-32 mb-32 max-md:mt-24' id='home'>
        <div className='w-[90%] flex justify-between items-center  '>
        <div className='flex flex-col gap-8'>
            <div className='text-6xl max-md:text-5xl max-sm:text-4xl'>
                <h1>Discover Exciting Events on</h1>
                <h1 className='mt-2'>Campus</h1>
            </div>
            <div className='text-4xl flex flex-col gap-y-2 max-md:text-3xl max-sm:text-2xl'>
                <p>Stay updated with</p>
                <p>all the latest</p>
                <p>happenings</p>
            </div>
            <div className='flex text-lg gap-x-6'>
                <p className='bg-red-500 px-4 py-2 text-white cursor-pointer' onClick={()=>navigation("/events")}>Explore Events</p>
                <p className='flex justify-center items-center cursor-pointer'>Learn More <img src={arrow} className='brightness-0'/></p>
            </div>
        </div>
        <div className='max-lg:hidden'>
            <img src={mainImg} className='w-[500px]'/>
        </div>
        </div>
    </section>
  )
}

export default Hero