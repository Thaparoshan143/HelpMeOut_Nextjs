import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bg from "../../images/bg.png"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased` + " bg-[#ddd] min-h-[100vh] flex flex-col justify-between"}
      >
      <Image 
        src={Bg}
        alt="bg"
        width={500}
        height={500}
        className="z-[-5] opacity-50 absolute w-full h-full"
      />
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
