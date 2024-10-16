import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Card = ({title, name, description, url} : any) => 
{
  return (
    <div className="p-2 m-2 shadow-sm border-[0.1rem] hover:border-theme-a hover:shadow-theme-alt inset-x-4 shadow-theme rounded-xl bg-[#eee] flex flex-col justify-evenly items-center relative min-w-[15rem] w-[20rem] min-h-[6rem]">
        <a href={url} target='_blank' className=""><FaExternalLinkAlt className="absolute bottom-1 right-[-3px] bg-theme text-white hover:scale-105 text-2xl p-[0.25rem] mx-2 rounded-md hover:cursor-pointer hover:bg-theme-alt transition-all duration-200 inline-block"/></a>
        <h1 className="text-theme font-bold text-[1.3rem] text-center">{title}</h1>
        {name?<h2 className="text-theme-cont font-bold underline">{name}</h2>:<></>}
        <p className="text-sm text-black font-medium text-center my-2 mx-6">{description}</p>
    </div>
  )
}

const CardCategory = ({category, description, url} : any) =>
{
  return (
    <div className="p-md bg-theme-a hover:shadow-md min-w-[20rem] w-[20rem] min-h-[12rem] transition-all duration-200 rounded-md flex flex-col justify-between items-center hover:scale-[101%]">
        <h1 className="text-theme font-bold text-sub-head text-center uppercase bg-background w-full rounded-md">{category}</h1>
        {description ? <span className="text-white text-small text-justify my-4 px-2">{description}</span> : <></>}
        <a href={url}  className="bg-white hover:bg-background p-2 px-4 rounded-md font-bold mb-4 font-main-alt">Explore</a>
    </div>
  )
}

const CardSubCategory = ({title, description, links} : any) =>
{
  return (
    <>
    <h1 className="text-black font-bold text-2xl text-center my-2 underline">{title}</h1>
    <p className="mb-2">{description}</p>
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