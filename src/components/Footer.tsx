import React from 'react'
import { GiSelfLove } from 'react-icons/gi'

const Footer = () => {
  return (
    <footer className="w-full min-h-[12rem] flex flex-col justify-evenly items-center bg-theme-a text-white mt-10">
            <div>Designed with &nbsp; <GiSelfLove className="text-red-700 text-4xl font-bold inline"/> &nbsp; by Roshan Thapa</div>
            <div className="text-white my-2">
                Contact: <a href="mailto:thaparoshan3722@gmail.com" >thaparoshan3722@gmail.com</a>
            </div>
            <span className="text-black text-sm text-center">Copyright © 2024 | All Right Reserved</span>
    </footer>
  )
}

export default Footer