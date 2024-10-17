'use client'

import { useEffect, useState } from "react";

export default function Time() 
{
  const [currTime, setCurrTime] = useState(Date())

  setInterval(()=>
  {
    setCurrTime(Date())
  }, 900)

  return (
    <div className="flex flex-col justify-evenly items-center h-[60vh] w-full">
      <h1 className="text-black text-xl font-bold uppercase font-main">Current Time</h1>
      {
        <span className="text-theme text-8xl font-bold uppercase text-center">
          {
            currTime.toLocaleUpperCase()
          }
        </span>
      }
    </div>
  );
}

