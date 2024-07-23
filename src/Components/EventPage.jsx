import React, { useEffect, useState } from 'react';
import img from '../assets/WhatsApp Image 2024-05-31 at 17.49.28_0bf84ad1.jpg';

const EventPage = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Multiline string using template literals
  const str = `Dear Students of RNS Group of Institutions, 
Greetings to you all!

We are delighted to extend an invitation to all innovative minds and aspiring entrepreneurs to participate in the RNS Maverick - our very own rendition of Shark Tank. This is a unique idea-based learning competition aimed at bringing out exciting and innovative business ideas, emphasizing the 4Cs - Critical Thinking, Creativity, Collaboration, and Communication. 

The RNS Maverick is designed to uncover groundbreaking business ideas, fostering a culture of scientific methodology and persuasive communication in project design.

 Eligibility
Open to all students of RNS Group of Institutions

🗓 Registration to submit ideas are open from - May 24, 2024 to June 07, 2024 

Preliminary Round to screen the ideas: June 08, 2024

Final Round - June 13, 2024

📍 Venue - Dr. R N Shetty Mini Auditorium

🔗 Use the following link to REGISTER NOW and to know more information
https://linktr.ee/rnsmaverick
`;

  // Split the string where there are two or more spaces
  const strProcessed = str.split(/ {2,}/);

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

  return (
    <section className=''>
      {/* header */}
      <div className={`w-full min-h-[70px] bg-white z-40 flex justify-center items-center md:sticky p-2 top-0 max-sm:p-2 header ${isSticky ? 'text-xl min-h-[40px] p-2' : 'text-3xl max-sm:text-2xl font-bold bg-white z-50 '}`}>
        <h1>MagicBall - AI Product Demo Day with Grayscale Ventures & Jungle Ventures</h1>
      </div>
      {/* main */}
      <div className='h-full bg-black bg-opacity-5 pb-20 max-sm:pb-32' >
        <div className='md:p-16 p-3 flex max-lg:flex-col gap-10 justify-center'>
        
            <img src={img} className='max-sm:max-w-full w-[500px]' alt="Event" />

          <div className='text-xl max-sm:text-md' >
            {strProcessed.map((item, index) => (
              <p key={index} className='whitespace-pre-line'>{item}</p>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='flex fixed bottom-0 w-full justify-evenly items-center p-5 z-[1000] bg-white '>
        <div className='max-sm:hidden'>
          <h1>WED, JUL 24 · 6:00 PM IST</h1>
          <h1 className='text-2xl'>MagicBall - AI Product Demo Day with Grayscale Ventures & Jungle Ventures</h1>
        </div>
        <div className='hidden max-sm:block'>
          <p className='text-2xl font-bold font-sans'>FREE</p>
        </div>
        <div>
          <button className='px-4 py-2 bg-red-500 rounded-md text-white w-[150px] h-[50px] text-xl font-bold'>Apply</button>
        </div>
      </div>
    </section>
  );
}

export default EventPage;
