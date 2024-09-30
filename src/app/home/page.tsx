import { _categoriesItems } from "@/_data/CategoriesItems";
import { CardCategory } from "@/components/Card";

export default function Home() 
{
  return (
    <div className="flex flex-col items-center justify-evenly ">
      <h1 className="text-3xl text-theme font-bold font-main my-10 underline">Available Catergories</h1>
      <div className="grid grid-cols-4 gap-6 place-content-center xl:grid-cols-3 sm:grid-cols-2">
        {
          _categoriesItems.map(({category, url}) => {
            return <CardCategory key={category} category={category} url={url} />
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
    <div className="w-full flex flex-col justify-around items-center h-[10rem] my-10">
      <h1 className="text-theme text-2xl">Couldnt find !! What you are looking for? <span className="inline-block text-xl text-black underline">Visit Soon</span></h1>
      <hr className="w-[80%] border-theme border-2 rounded-xl"/>
      <h1>Got any other resources you want to recommend <a href={"/contact"} className="m-2 p-3 px-6 bg-theme hover:scale-x-[105%] text-white rounded-xl">Contribute</a></h1>
    </div>
  )
}