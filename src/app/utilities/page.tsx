import { _navItems } from "@/_data/NavItems";
import { CardCategory } from "@/components/Card";

export default function DateConversion() 
{
  return (
    <div className="w-full text-2xl flex flex-col justify-evenly items-center h-[100vh]">
      <h1 className="text-3xl text-theme font-bold font-main my-10 underline uppercase">Utilites</h1>
      <div className="grid grid-cols-4 gap-6 place-content-center xl:grid-cols-3 sm:grid-cols-2 text-xl">
      {
        _navItems.map(({title, url, subItem} : any)=> {
          const link = url;
          if(title == "Utilities")
          {
            return subItem.map(({title, url} : any) => {
              return <CardCategory key={title} category={title} url={link + url} />
            })
          }
        })
      }
    </div>
    </div>
  );
}
