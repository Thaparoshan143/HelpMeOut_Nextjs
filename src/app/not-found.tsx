import Link from 'next/link'
import { TbError404 } from 'react-icons/tb'
 
export default function NotFound() {
  return (
    <div className="flex flex-col justify-evenly items-center">
        <TbError404 className="text-theme text-[28rem] m-6 " />
        <h1 className="text-5xl text-theme font-bold font-main uppercase">OOPS! <span className="text-black text-xl">cant resolve it.</span></h1>
        <span className="inline-block text-md text-black my-10 font-light">Page doesnt exist</span>
        <Link href={"/home"} className="text-2xl text-white bg-theme inline-block p-2 px-4 rounded-lg hover:scale-[105%] transition-all duration-200 ">Home</Link>
    </div>
  )
}