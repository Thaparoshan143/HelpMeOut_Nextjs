import "./globals.css";
import Image from 'next/image'
import Bg from '../images/bg.png'
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased` + " bg-[#ddd] min-h-[100vh] flex flex-col justify-around items-center"}
      >
      <Image 
        src={Bg}
        alt="bg"
        width={500}
        height={500}
        className="z-[-5] opacity-50 absolute w-full h-full"
      />
        {children}
      <Link href={"/home"} className="text-2xl text-white bg-theme inline-block p-2 px-6 rounded-xl hover:px-[5rem] hover:scale-[105%] transition-all duration-200 hover:rounded-[3rem]">Explore</Link>
      </body>
    </html>
  );
}
