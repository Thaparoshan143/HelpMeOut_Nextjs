import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

export default function Contact() 
{
  const socialIconComStyle = "inline-block text-heading hover:bg-theme hover:text-white transition-all duration-200 p-[0.25rem] rounded-sm";

  return (
    <div className="w-full flex flex-col justify-evenly items-center">
      <h1 className="text-sup-head text-theme font-bold font-main uppercase flex flex-col items-center md:flex-row">Hi! there, <span className="text-black text-xl font-main-alt sm:block">Let get connected</span></h1>
      <hr className="w-[30%] border-theme rounded-xl my-[2rem]"/>
      <h1 className="text-heading underline mb-4">Find me </h1>
      <div className="text-black text-sup-tit flex flex-col justify-around items-center my-6 md:items-start">
          <span>Github: <a href="https://github.com/Thaparoshan143" ><FaGithub className={socialIconComStyle} /></a></span>
          <span>Youtube: <a href="https://www.youtube.com/@roshanthapa1297" ><FaYoutube className={socialIconComStyle} /></a></span>
          <span>Linkedin: <a href="https://www.linkedin.com/in/roshan-thapa-294498251/" ><FaLinkedinIn className={socialIconComStyle} /></a></span>
          <span className="text-sub-tit">Email: <a href="mailto:thaparoshan3722@gmail.com" >thaparoshan3722@gmail.com</a></span>
      </div>
      <hr className="w-[50%] border-theme border-1 rounded-xl my-[2rem]"/>
      <div className="text-theme font-bold text-sup-head m-6 flex flex-col justify-around items-center min-h-[20vh]"><span>Developed & Designed</span><span> by </span> <span className="font-main uppercase"> Roshan Thapa</span><span className="text-black text-sm m-0 font-light"> with <a className="font-bold underline" href={"https://nextjs.org/"}>Next.js</a> hosted on <a className="font-bold underline" href={"https://vercel.com/home"}>Vercel</a></span> </div>
    </div>
  );
}
