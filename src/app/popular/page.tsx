import { _PopularURLItem } from "@/_data/PopularURLItem";
import { Card } from "@/components/Card";

export default function Popular() {
  return (
    <>
    <h1 className="text-4xl text-theme font-bold font-main my-10 uppercase underline">Popular and Hot Picks</h1>
    <div className="grid grid-cols-4 gap-6 place-content-center xl:grid-cols-3 sm:grid-cols-2">
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
        <h1>Search on Category : <a href={"/home"} className="p-2 px-6 bg-theme hover:scale-x-[105%] text-white rounded-xl">Category</a></h1>
        <h1 className="text-theme text-2xl">Didnt find the resources ! <span className="inline-block text-xl text-black underline">here</span></h1>
      </div>
    )
  }
