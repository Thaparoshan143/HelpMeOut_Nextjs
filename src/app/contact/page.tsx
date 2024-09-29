import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

export default function Contact() {
  return (
    <div className="w-full text-2xl flex flex-col justify-evenly items-center">
      <h1 className="text-5xl text-theme font-bold font-main mt-[5rem] uppercase">Well! <span className="text-black text-xl">Let get connected</span></h1>
      <hr className="w-[30%] border-theme border-2 rounded-xl my-[2rem]"/>
      <div className="text-black text-xl flex flex-col justify-around items-start">
        <h1 className="text-3xl underline">Find me </h1>
          <span>Github : <a href="https://github.com/Thaparoshan143" ><FaGithub className="inline-block text-3xl hover:bg-theme hover:text-white transition-all duration-200 p-[0.25rem] rounded-sm" /></a></span>
          <span>Youtube : <a href="https://www.youtube.com/@roshanthapa1297" ><FaYoutube className="inline-block text-3xl hover:bg-theme hover:text-white transition-all duration-200 p-[0.25rem] rounded-sm" /></a></span>
          <span>Linkedin : <a href="https://www.linkedin.com/in/roshan-thapa-294498251/" ><FaLinkedinIn className="inline-block text-3xl hover:bg-theme hover:text-white transition-all duration-200 p-[0.25rem] rounded-sm" /></a></span>
          <span>Email : <a href="mailto:thaparoshan3722@gmail.com" >thaparoshan3722@gmail.com</a></span>
      </div>
      <hr className="w-[40%] border-theme border-2 rounded-xl my-[2rem]"/>
      <div className="text-theme font-bold text-4xl m-6 flex flex-col justify-around items-center min-h-[25vh]"><span>Designed</span><span> by </span> <span> Roshan Thapa</span> </div>
      <hr className="w-[20%] border-theme border-2 rounded-xl my-[2rem]"/>
    </div>
  );
}
