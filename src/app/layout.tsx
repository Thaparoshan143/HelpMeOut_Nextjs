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
        className={`antialiased` + " bg-background text-theme"}
      >
        <Image 
          src={Bg}
          alt="bg"
          className="z-[-5] opacity-[15%] absolute w-full h-full object-cover"
        />
        <Navbar />
        <main className="min-h-[100vh] pt-10 flex flex-col justify-around items-center w-full">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
