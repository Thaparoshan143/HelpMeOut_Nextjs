import { _categoriesItems } from "@/_data/CategoriesItems";
import { CardCategory } from "@/components/Card";
import Link from "next/link";

export default function Home() 
{
  return (
    <div className="flex flex-col items-center justify-evenly ">
      <h1 className="text-3xl text-theme font-bold font-main my-10 underline uppercase">Available Catergories</h1>
      <div className="grid grid-cols-4 gap-6 place-content-center xl:grid-cols-3 sm:grid-cols-2">
        {
          _categoriesItems.map(({category, url}) => {
            return <CardCategory key={category} category={category} url={url} />
          })
        }

      </div>
      <CouldNotFind />
      <Link href={"/"} className="text-2xl text-white bg-theme inline-block p-2 px-6 rounded-xl hover:px-[5rem] hover:scale-[105%] transition-all duration-200 hover:rounded-[3rem]">Landing Page</Link>
    </div>
  );
}

const CouldNotFind = () =>
{
  return (
    <div className="w-full flex flex-col justify-around items-center h-[8rem] my-4">
      <hr className="w-[80%] border-theme border-2 rounded-xl"/>
      <h1><span className="text-theme text-2xl inline-block">Is Something Missing ? </span> Got any other resources you want to <a href={"/contact"} className="p-3 bg-theme hover:bg-theme-alt text-white rounded-xl">recommend</a></h1>
      <span className="inline-block text-theme text-2xl font-bold">Visit Soon</span>
    </div>
  )
}