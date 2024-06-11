import React, { useState, useEffect } from 'react';
import wave from '../assets/offerpage/wave.png';
import { Link } from 'react-router-dom';

function OfferSection4() {
  const initialCount = 98; // Initial count value
  const hoursToDecrease = 2; // Number of hours to decrease the count by one

  const getStoredTime = () => {
    const storedTime = localStorage.getItem('countdownStartTime');
    return storedTime ? parseInt(storedTime, 10) : null;
  };

  const [count, setCount] = useState(() => {
    const storedTime = getStoredTime();
    if (storedTime) {
      const elapsedHours = Math.floor((Date.now() - storedTime) / (1000 * 60 * 60*60*60));
      const decrement = Math.floor(elapsedHours / hoursToDecrease);
      return Math.max(initialCount - decrement, 0);
    } else {
      localStorage.setItem('countdownStartTime', Date.now().toString());
      return initialCount;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const storedTime = getStoredTime();
      const elapsedHours = Math.floor((Date.now() - storedTime) / (1000 * 60 * 60));
      const decrement = Math.floor(elapsedHours / hoursToDecrease);
      setCount(Math.max(initialCount - decrement, 0));
    }, 1000); // Check every second for updates

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className='relative bg-[#5824C7] rounded-2xl mt-24 p-4 py-8 px-6' dir='rtl'>
      <div className='grid grid-cols-12 items-center gap-4 relative z-0'>
        <div className='col-span-12 md:col-span-8 p-4'>
          <h3 className='text-white font-[400] md:text-[18px]'>
            لا تفوتوا الفرصة! اشتركوا الآن في متقن وتمتعوا بأفضل تجربة في كتابة المحتوى
          </h3>
          <Link to='https://auth.mutqinai.com/signup'>
          <button className="text-[#692BEF] rounded-lg py-2 mt-6 px-16 text-center bg-white">
            اشترك الآن
          </button>
          </Link>
        </div>
        <div className='flex items-center justify-center col-span-12 md:col-span-4 p-4'>
          <div>
            <h5 className='text-white text-center'>العرض متاح لأول 100 شخص فقط!</h5>
            <p className='text-white text-center pt-3 text-[30px]'>متبقي</p>
            <div className='mt-5 justify-center gap-4 flex'>
             
              <span className='bg-[#FFCA64] rounded-lg p-6 py-2 inter-text font-[900] text-[2rem] text-[#212529]'>{count % 10}</span>
              <span className='bg-[#FFCA64] rounded-lg p-6 py-2 inter-text font-[900] text-[2rem] text-[#212529]'>{Math.floor(count / 10)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full z-0'>
        <img src={wave} className='w-full'/>
      </div>
    </div>
  );
}

export default OfferSection4;
