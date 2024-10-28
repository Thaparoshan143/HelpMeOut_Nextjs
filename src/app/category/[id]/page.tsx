'use client'

import { _subCategoriesItems } from "@/_data/CategoriesItems";
import { CardSubCategory } from "@/components/Card";
import { usePathname } from "next/navigation";
import { BiErrorCircle } from "react-icons/bi";
import Link from "next/link";

export default function CategoryPage()
{
    const pathName = usePathname();
    const category = pathName.split("/").pop();

    return (
       <>
        <h1 className="text-heading bg-theme w-full text-center text-white font-bold font-main py-[2.5rem] mb-md uppercase">{category}</h1>
        <div className="flex flex-col justify-evenly items-center w-full">
        {
            _subCategoriesItems.map(({title, note, items} : any)=>
            {
                if (title === category)
                {

                    return (
                        <>
                        {note ? <h1 className="bg-white w-[80%] text-center rounded-md p-2 shadow-inner mb-6 shadow-gray-400">{note}</h1> : <></>}
                        {
                            items.map(({title, description, links} : any)=>
                            {
                                return <CardSubCategory key={title} title={title} description={description} links={links} />
                            })
                        }
                        </>
                        )
                }
            })
        }
        {
            _subCategoriesItems.find(item => item.title === category) == undefined ? 
            <>
                <h1 className="text-5xl text-theme font-bold font-main uppercase my-8">Under Construction</h1>
                <BiErrorCircle className="text-theme-cont text-[12rem] m-6" />
                <h1 className="text-5xl text-theme font-bold font-main uppercase">OOPS! <span className="text-black text-xl">cant resolve it.</span></h1>
                <hr className="w-[30%] border-theme rounded-xl my-[2rem]"/>
                <Link href={"/home"} className="text-2xl text-white bg-theme inline-block p-2 px-4 rounded-lg hover:scale-[105%] transition-all duration-200 ">Home</Link>
            </>
            :
            <></>
        }
        </div>
       </>
    )
}