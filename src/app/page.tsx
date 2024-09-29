import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col flex-wrap justify-evenly items-center min-h-[50vh] h-full w-full">
      <h1 className="text-theme text-8xl font-bold uppercase font-mono">Help Me Out</h1>
      <span className="text-black text-xl">Your one stop to find available resources</span>
      <Link href={"/home"} className="text-2xl text-white bg-theme inline-block p-2 px-6 rounded-xl hover:px-[5rem] hover:scale-[105%] transition-all duration-200 hover:rounded-[3rem]">Explore</Link>
    </div>
    </>
  );
}
