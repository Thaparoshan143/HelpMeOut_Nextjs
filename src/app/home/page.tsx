import { _subCategoriesItems } from "@/_data/CategoriesItems";
import { CardCategory } from "@/components/Card";
import Link from "next/link";

export default function Home() 
{
  let catTitles : string[] = [];
  let urls : string[] = [];
  const itemsString : string[] = []

  _subCategoriesItems.forEach(({title, items}) => {
    urls.push(title)
    const tempString : string[] = [];
    items.forEach(({title})=>
      {
        tempString.push(title)
      })
    itemsString.push(tempString.join(", "))
  })

  catTitles = urls.map((tit : string) => {
    return tit.split("-").join(" ");
  })

  urls = urls.map((tit : string) => {
    return "category/" + tit;
  })

  return (
    <div className="flex flex-col items-center justify-evenly font-main w-full">
      <h1 className="text-heading text-theme font-bold my-10 underline uppercase font-main">Available Catergories</h1>
      <div className="grid grid-cols-4 gap-6 place-content-center xl:grid-cols-3 sm:grid-cols-2">
        {
          catTitles.map((cat, ind) => {
            return <CardCategory key={cat} category={cat} url={urls[ind]} description={itemsString[ind]} />
          })
        }
      </div>
      <CouldNotFind />
    </div>
  );
}

const CouldNotFind = () =>
{
  return (
    <div className="w-full bg-theme flex flex-col justify-around items-center h-[15rem] pt-10 mt-[8rem] text-white">
      <h1><span className="text-sub-tit inline-block">Is Something Missing ? </span> Got any other resources you want to <a href={"/contact"} className="p-2 bg-white hover:font-bold text-theme rounded-md">recommend</a></h1>
      <hr className="w-[20%] border-white border-1 rounded-xl"/>
      <Link href={"/"} className="text-sub-tit font-bold hover:scale-105 bg-white p-2 px-4 text-theme rounded-md">Landing Page</Link>
      <hr className="w-[60%] border-white border-1 rounded-xl"/>
    </div>
  )
}