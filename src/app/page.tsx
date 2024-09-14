import { _URLList } from "@/_data/URLItems";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />
    <div className="flex flex-row justify-evenly items-center min-h-[50vh] ">
      {
        _URLList.map(({title, name, url})=>{
          return <Card key={url} title={title} name={name} url={url} />
        })
      }
    </div>
    <Footer />
    </>
  );
}
