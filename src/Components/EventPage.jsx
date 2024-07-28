import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DocumentContext } from '../Contexts/DocumentContext';
import img from '../assets/WhatsApp Image 2024-05-31 at 17.49.28_0bf84ad1.jpg';

const EventPage = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null); 
  const { events, getEvents } = useContext(DocumentContext);
  const { eventId } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        setIsSticky(header.getBoundingClientRect().top <= 15);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(()=>{
    const filteredEvent = events.find((i) => i.eventId == eventId)
    setCurrentEvent(filteredEvent)
  },[events])

  // console.log(currentEvent)


  return (
    <section className=''>
      {/* header */}
      <div className={`w-full min-h-[70px] bg-white z-40 flex justify-center items-center md:sticky p-2 top-0 max-sm:p-2 header ${isSticky ? 'text-xl min-h-[10px] p-2' : 'text-3xl max-sm:text-2xl font-bold bg-white z-50 '}`}>
        <h1>{currentEvent?.title}</h1>
      </div>
      {/* main */}
      <div className='h-full bg-black bg-opacity-5 pb-20 max-sm:pb-32' >
        <div className='md:p-16 p-3 flex max-lg:flex-col gap-10 justify-center it'>
        
            <img src={currentEvent?.base32Url} className='max-sm:max-w-full md:w-[50%] object-fill' alt="Event" />

          <div className='text-xl max-sm:text-md' >
            {currentEvent?.description.map((item, index) => (
              <p key={index} className='whitespace-pre-line'>{item}</p>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='flex fixed bottom-0 w-full justify-evenly items-center p-5 z-[1000] bg-white '>
        <div className='max-sm:hidden'>
          <h1>{currentEvent?.eventDate} · {currentEvent?.eventTime}</h1>
          <h1 className='text-2xl'>{currentEvent?.title}</h1>
        </div>
        <div className='hidden max-sm:block'>
          <p className='text-2xl font-bold font-sans'>{currentEvent?.entryFee == 0 ? 'FREE' : `${currentEvent?.entryFee} RS`}</p>
        </div>
        <div>
          <a href={currentEvent?.applyLink} target='_blank' className='px-6 py-3 bg-red-500 rounded-md text-white w-[180px] h-[70px] text-xl font-bold'>Apply</a>
        </div>
      </div>
    </section>
  );
};

export default EventPage;
