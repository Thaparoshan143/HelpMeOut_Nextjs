import "./globals.css";
import Image from 'next/image'
import Bg from '../images/bg.png'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Help me out",
  description: "One Stop for resources",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased` + " bg-[#ddd] h-[100vh] min-h-[100vh] flex flex-col justify-around items-center w-full"}
      >
        <Image 
          src={Bg}
          alt="bg"
          className="z-[-5] opacity-50 absolute w-full h-full object-cover"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
