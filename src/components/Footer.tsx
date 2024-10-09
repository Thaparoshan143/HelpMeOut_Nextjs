import React from 'react'
import { GiSelfLove } from 'react-icons/gi'

const Footer = () => {
  return (
    <footer className="py-4 w-full font-bold flex flex-col justify-evenly items-center bg-theme text-white">
      <div className="my-[2rem]">Crafted with &nbsp; <GiSelfLove className="text-red-600 text-4xl font-bold inline"/> &nbsp; by Roshan Thapa</div>
      <span className="text-background text-sm text-center font-light">Copyright © 2024 | All Right Reserved</span>
    </footer>
  )
}

export default Footer