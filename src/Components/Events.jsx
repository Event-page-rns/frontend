import React from 'react'
import img from '../assets/WhatsApp Image 2024-05-31 at 17.49.28_0bf84ad1.jpg'
import ticketImg from '../assets/confirmation_number_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import { useNavigate } from 'react-router-dom'

const Events = () => {

    const navigate = useNavigate();
  return (

    <section className=' flex justify-center items-center mt-20 max-sm:mt-0'> 
    <div className='w-[95%] gap-10 max-md:w-[95%] max-sm:gap-0 grid grid-cols-[repeat(auto-fit,_minmax(600px,1fr))] max-sm:grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] place-items-center '> 
    <div className='flex max-sm:flex-col max-sm:items-center mb-4 gap-y-3 max-w-[700px] max-md:max-w-[600px] max-sm:max-w-[500px] p-3 gap-x-3 border-2 border-black rounded-md '>
    <div className="w-[440px] max-sm:w-[330px]">
    <img src={img} className="rounded-lg w-full object-" alt="Responsive Image" />
</div>
    <div className='flex flex-col justify-evenly max-sm:gap-y-3  '>
        <h1 className='text-3xl max-sm:text-xl font-bold'>A SATURDAY BY GLASSWINGS AT GO WILD CAFE</h1>
        <p className='text-lg'>Hosted by: Bengaluru Sociale Meetup Group</p>
        <p>SAT, JUL 27 · 7:00 PM IST</p>
        <p className='flex items-center gap-2'><img src={ticketImg} className='brightness-0'/>Free</p>
        <button className='px-4 py-2 bg-red-500 rounded-md text-white w-[100px] text-lg' onClick={()=>navigate("/events/1")}>Apply</button>
    </div>
    </div>
    <div className='flex max-sm:flex-col max-sm:items-center mb-4 gap-y-3 max-w-[700px] max-md:max-w-[600px] max-sm:max-w-[500px] p-3 gap-x-3 border-2 border-black rounded-md '>
    <div className="w-[440px] max-sm:w-[330px]">
    <img src={img} className="rounded-lg w-full object-" alt="Responsive Image" />
</div>
    <div className='flex flex-col justify-evenly max-sm:gap-y-3 '>
        <h1 className='text-3xl max-sm:text-xl font-bold'>A SATURDAY BY GLASSWINGS AT GO WILD CAFE</h1>
        <p className='text-lg'>Hosted by: Bengaluru Sociale Meetup Group</p>
        <p>SAT, JUL 27 · 7:00 PM IST</p>
        <p className='flex items-center gap-2'><img src={ticketImg} className='brightness-0'/>Free</p>
        <button className='px-4 py-2 bg-red-500 rounded-md text-white w-[100px] text-lg' onClick={()=>navigate("/events/1")}>Apply</button>
    </div>
    </div>
    <div className='flex max-sm:flex-col max-sm:items-center mb-4 gap-y-3 max-w-[700px] max-md:max-w-[600px] max-sm:max-w-[500px] p-3 gap-x-3 border-2 border-black rounded-md '>
    <div className="w-[440px] max-sm:w-[330px]">
    <img src={img} className="rounded-lg w-full object-" alt="Responsive Image" />
</div>
    <div className='flex flex-col justify-evenly max-sm:gap-y-3 '>
        <h1 className='text-3xl max-sm:text-xl font-bold'>A SATURDAY BY GLASSWINGS AT GO WILD CAFE</h1>
        <p className='text-lg'>Hosted by: Bengaluru Sociale Meetup Group</p>
        <p>SAT, JUL 27 · 7:00 PM IST</p>
        <p className='flex items-center gap-2'><img src={ticketImg} className='brightness-0'/>Free</p>
        <button className='px-4 py-2 bg-red-500 rounded-md text-white w-[100px] text-lg' onClick={()=>navigate("/events/1")}>Apply</button>
    </div>
    </div>
    <div className='flex max-sm:flex-col max-sm:items-center mb-4 gap-y-3 max-w-[700px] max-md:max-w-[600px] max-sm:max-w-[500px] p-3 gap-x-3 border-2 border-black rounded-md '>
    <div className="w-[440px] max-sm:w-[330px]">
    <img src={img} className="rounded-lg w-full object-" alt="Responsive Image" />
</div>
    <div className='flex flex-col justify-evenly max-sm:gap-y-3 '>
        <h1 className='text-3xl max-sm:text-xl font-bold'>A SATURDAY BY GLASSWINGS AT GO WILD CAFE</h1>
        <p className='text-lg'>Hosted by: Bengaluru Sociale Meetup Group</p>
        <p>SAT, JUL 27 · 7:00 PM IST</p>
        <p className='flex items-center gap-2'><img src={ticketImg} className='brightness-0'/>Free</p>
        <button className='px-4 py-2 bg-red-500 rounded-md text-white w-[100px] text-lg' onClick={()=>navigate("/events/1")}>Apply</button>
    </div>
    </div>
    
    
     
    </div>
    </section>

  )
}

export default Events