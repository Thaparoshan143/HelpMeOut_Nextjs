import React from 'react'

const Card = ({title, name, url} : any) => {
  return (
    <div className="p-4 m-2 bg-theme min-w-[20rem] min-h-[15rem] hover:scale-[104%] transition-all duration-200 rounded-md flex flex-col justify-evenly items-center hover:shadow-xl">
        <h1 className="text-white font-bold text-2xl">{title}</h1>
        <h2 className="text-orange-200">{name}</h2>
        <a href={url}  className="bg-white p-2 px-4 rounded-md hover:scale-x-[106%] transition-all duration-200 ">Visit</a>
    </div>
  )
}

export default Card