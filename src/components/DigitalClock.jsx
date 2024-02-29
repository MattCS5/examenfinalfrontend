"use client";
import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); 

  return (
    <div className='flex justify-center items-center h-screen bg-black text-red-600 text-7xl'>
      <div className='border rounded border-red-600 p-6 flex-col justify-center text-center'>
        <p>DIGITAL CLOCK</p>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default DigitalClock;