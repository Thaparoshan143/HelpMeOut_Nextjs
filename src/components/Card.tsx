import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Card = ({title, name, description, url} : any) => 
{
  return (
    <div className="p-2 m-2 shadow-sm border-[0.1rem] hover:border-theme-a hover:shadow-theme-alt inset-x-4 shadow-theme rounded-xl bg-[#eee] flex flex-col justify-evenly items-center relative min-w-[15rem] w-[20rem] min-h-[6rem]">
        <a href={url} target='_blank' className=""><FaExternalLinkAlt className="absolute top-1 right-1 bg-theme text-white hover:scale-105 text-3xl p-[0.35rem] mx-2 rounded-md hover:cursor-pointer hover:bg-theme-alt transition-all duration-200 inline-block"/></a>
        <h1 className="text-theme font-bold text-[1.3rem] mr-10 text-center">{title}</h1>
        {name?<h2 className="text-theme-cont font-bold underline">{name}</h2>:<></>}
        <p className="text-sm text-black font-medium text-center my-2">{description}</p>
    </div>
  )
}

const CardCategory = ({category, description, url} : any) =>
{
  return (
    <div className="p-2 px-4 bg-theme hover:shadow-xl min-w-[20rem] w-[20rem] min-h-[12rem] transition-all duration-200 rounded-md flex flex-col justify-evenly items-center opacity-80 hover:opacity-100">
        <h1 className="text-white font-bold text-2xl text-center uppercase">{category}</h1>
        {description ? <span className="text-black text-justify my-4">{description}</span> : <></>}
        <a href={url}  className="bg-white hover:bg-theme-cont hover:text-white p-2 px-4 rounded-md hover:scale-110 transition-all duration-200 ">Explore</a>
    </div>
  )
}

const CardSubCategory = ({title, description, links} : any) =>
{
  return (
    <>
    <h1 className="text-black font-bold text-2xl text-center my-2 underline">{title}</h1>
    <p>{description}</p>
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {
          links ? links.map(({title, description, url} : any)=>
          {
            return <Card key={title} title={title} description={description} url={url} />
          }) : <></>
        }
    </div>
    <hr className="w-[90%] border-theme border-[1.25px] rounded-xl my-[1.2rem]"/>
    </>
  )
}

export { Card, CardCategory, CardSubCategory }