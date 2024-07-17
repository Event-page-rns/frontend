import React from 'react'
import img from '../assets/WhatsApp Image 2024-05-31 at 17.49.28_0bf84ad1.jpg'
import ticketImg from '../assets/confirmation_number_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'

const Events = () => {
  return (
    <section className='min-h-[100vh] w-full flex justify-center items-center'> 
    <div className='flex w-[550px] p-3 gap-x-3 border-2 border-black rounded-md '>
    <div className='w-[400px]'>
        <img src={img} className='o object-cover rounded-lg'/>
    </div>
    <div className='flex flex-col justify-evenly'>
        <h1 className='text-2xl'>A SATURDAY BY GLASSWINGS AT GO WILD CAFE</h1>
        <p>Hosted by: Bengaluru Sociale Meetup Group</p>
        <p>SAT, JUL 27 · 7:00 PM IST</p>
        <p className='flex items-center gap-2'><img src={ticketImg} className='brightness-0'/>Free</p>
        <button className='px-4 py-2 bg-red-500 rounded-md text-white w-[100px] text-lg'>Apply</button>
    </div>
    </div>
    </section>
  )
}

export default Events