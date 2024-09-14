import React from 'react'
import { GiSelfLove } from 'react-icons/gi'

const Footer = () => {
  return (
    <footer className="w-full min-h-[7rem] flex flex-col justify-evenly items-center bg-theme text-white">
        <div>
            Designed with &nbsp; <GiSelfLove className="text-red-700 text-4xl font-bold inline"/> &nbsp; by Roshan Thapa
            <div className="text-white">
                Contact : <a href="mailto:thaparoshan3722@gmail.com" >thaparoshan3722@gmail.com</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer