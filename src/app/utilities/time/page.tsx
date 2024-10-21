'use client'

import { useState } from "react";

export default function Time() 
{
  const [currTime, setCurrTime] = useState(Date())

  setInterval(()=>
  {
    setCurrTime(Date())
  }, 900)

  return (
    <div className="flex flex-col justify-evenly items-center h-[60vh] w-full">
      <h1 className="text-theme text-heading md:text-sup-head font-bold uppercase font-main">Current Time</h1>
      {
        <span className="p-4 bg-theme text-white text-4xl xl:text-8xl font-bold uppercase text-center">
          {
            currTime.toLocaleUpperCase()
          }
        </span>
      }
    </div>
  );
}

