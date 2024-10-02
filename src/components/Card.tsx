import React from 'react'

const Card = ({title, name, description, url} : any) => 
{
  return (
    <div className="p-2 m-2 bg-theme min-w-[15rem] w-[18rem] min-h-[15rem] hover:scale-[104%] transition-all duration-200 rounded-md flex flex-col justify-evenly items-center hover:shadow-xl opacity-80 hover:opacity-100">
        <h1 className="text-white font-bold text-2xl text-center">{title}</h1>
        {name?<h2 className="text-orange-200">{name}</h2>:<></>}
        <p className="text-sm text-white font-medium text-center">{description}</p>
        <a href={url}  className="bg-white p-2 px-4 rounded-md hover:scale-x-[106%] transition-all duration-200 ">Visit</a>
    </div>
  )
}

const CardCategory = ({category, url} : any) =>
{
  return (
    <div className="p-2 bg-theme min-w-[20rem] w-[20rem] min-h-[15rem] hover:scale-[104%] transition-all duration-200 rounded-md flex flex-col justify-evenly items-center hover:shadow-xl opacity-80 hover:opacity-100">
        <h1 className="text-white font-bold text-2xl text-center">{category}</h1>
        <a href={url}  className="bg-white p-2 px-4 rounded-md hover:scale-x-[106%] transition-all duration-200 ">Explore</a>
    </div>
  )
}

const CardSubCategory = ({title, description, links} : any) =>
{
  return (
    <>
    <h1 className="text-black font-bold text-2xl text-center my-6">{title}</h1>
    <p>{description}</p>
    <div className="grid grid-cols-1 gap-6 place-content-center xl:grid-cols-4 sm:grid-cols-2">
        {
          links ? links.map(({title, description, url} : any)=>
          {
            return <Card key={title} title={title} description={description} url={url} />
          }) : <></>
        }
    </div>
    <hr className="w-[80%] border-theme border-2 rounded-xl my-[2rem]"/>
    </>
  )
}

export { Card, CardCategory, CardSubCategory }