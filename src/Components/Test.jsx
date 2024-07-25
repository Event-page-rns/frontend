import React, { useEffect, useState } from 'react'
import { DocumentContext } from '../Contexts/DocumentContext';
import { useContext } from 'react';

const Test = () => {

    const[img,setImg] = useState();
    const {text,getEvents,events} = useContext(DocumentContext);

    const handleOnChange = (e) => {
        console.log(e.target.files);
        const reader = new FileReader();

        reader.onload = () => {
            console.log(reader.result);
            setImg(reader.result);
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    useState(()=>{
        getEvents();
    },[])

 

  return (
    <div>
        <img src={""}></img>
    <div className='flex max-sm:flex-col max-sm:items-center mb-4 gap-y-3 w-[700px] max-md:max-w-[600px] max-sm:max-w-[500px] p-3 gap-x-3 border-2 border-black rounded-md '>
    <div className="w-[440px] max-sm:w-[330px]">
    <img src={img} className="rounded-lg w-full object-" alt="Responsive Image" />
</div>
    <div className='flex flex-col justify-evenly max-sm:gap-y-3  '>
        <h1 className='text-3xl max-sm:text-xl font-bold'>A SATURDAY BY GLASSWINGS AT GO WILD CAFE</h1>
        <p className='text-lg'>Hosted by: Bengaluru Sociale Meetup Group</p>
        <p>SAT, JUL 27 · 7:00 PM IST</p>
        <button className='px-4 py-2 bg-red-500 rounded-md text-white w-[100px] text-lg' onClick={()=>navigate("/events/1")}>Apply</button>
    </div>
    </div>
    <input type='file' onChange={handleOnChange}/>
    <button onClick={getEvents}>clikc</button>
    {
        events.map(()=>(
            <p>hello</p>
        ))
    }
    </div>
  )
}

export default Test