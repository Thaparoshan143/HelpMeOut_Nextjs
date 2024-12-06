import { _PopularURLItem } from "@/_data/PopularURLItem";
import { Card } from "@/components/Card";

export default function Popular() 
{
  return (
    <>
    <h1 className="text-sub-head md:text-heading text-theme text-center font-bold font-main my-10 uppercase underline">Popular and Hot Picks</h1>
    <div className="grid grid-cols-1 md:gap-6 place-content-center lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 mx-auto">
      {_PopularURLItem.map(({title, name, description, url})=>
      {
        return <Card key={title} title={title} name={name} description={description} url={url}/>
      })}
    </div>
    <SeekOtherCategory />
    </>
  );
}

const SeekOtherCategory = () =>
{
  return (
    <div className="w-full flex flex-col justify-around items-center min-h-[10rem] my-10">
      <hr className="w-[50%] border-theme border-2 rounded-xl"/>
      <h1 className="text-theme text-title">{"Didn't"} find? <span className="text-black text-sm">Search by: <a href={"/home"} className="p-1 px-3 text-xl bg-theme hover:bg-theme-alt text-white rounded-xl">Category</a></span></h1>
    </div>
  )
}
