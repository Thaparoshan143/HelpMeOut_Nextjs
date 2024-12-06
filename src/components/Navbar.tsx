'use client'

import React, { useState, useEffect } from 'react';
import { _navItems } from '@/_data/NavItems';
import Link from 'next/link';
import { MdClose, MdMenu } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';

const Navbar = () => {

    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const handleResize = () => {
        if(window.innerWidth < 640){
            setIsSmallScreen(true);
        }
        else if(window.innerWidth > 640)
        {
            setIsSmallScreen(false);
        }
    }

    useEffect(() => {   
        handleResize();
        window.addEventListener("resize", handleResize);
    },[])

  return (
    <>
    {
        !isSmallScreen ? 
        <>
        <nav className="z-10 w-full sticky top-5 left-0">
        <div className="py-2 flex flex-row justify-evenly items-center bg-background shadow-md text-theme rounded-[2rem] w-[60%] m-auto">
        {
            _navItems.map(({title, url, subItem})=>
                {
                    return <NavItem key={url} title={title} link={url} subItem={subItem} />
                })
        }
        </div> 
        </nav> 
        </> : 
        <nav className="z-10 relative" >
            {
                !mobileMenu ? 
                <MdMenu className="fixed z-50 bg-background shadow-md rounded-[2rem] p-2 top-5 right-5 h-10 w-10 hover:text-theme-alt cursor-pointer" onClick={()=>setMobileMenu(!mobileMenu)}/> : 
                <MdClose className="fixed z-50 bg-background shadow-md rounded-[2rem] p-2 top-5 right-5 h-10 w-10 hover:text-theme-alt cursor-pointer" onClick={()=>setMobileMenu(!mobileMenu)}/>
            }
            {
                mobileMenu ? 
                <div className={"fixed top-0 right-0 h-[100vh] z-0 w-[100vw] overflow-hidden " }>
                    <div className="flex flex-col justify-evenly items-center bg-background py-[50%] shadow-md text-theme h-full">
                    {
                        _navItems.map(({title, url, subItem})=>
                            {
                                return <NavItem key={url} title={title} link={url} subItem={subItem} toggleMenu={(val : boolean) =>setMobileMenu(val)} />
                            })
                    }
                    </div> 
                </div> : 
                <></>
            }
        </nav>
    }
    </>
  )
}

const NavItem = ({title, link, subItem, toggleMenu} : any) =>
{
    const [isHover, setIsHover] = useState(false);

    return (
       <div className="relative flex flex-row justify-evenly items-center" >
        <Link href={link} onClick={!subItem ? ()=> toggleMenu(false) : ()=> toggleMenu(true)} className="px-2 text-title font-bold hover:text-theme-alt transition-all duration-200" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>{title}</Link>
       {
        subItem ? <RiArrowDownSLine className="h-5 w-5 cursor-pointer" onMouseDownCapture={()=>setIsHover(!isHover)}/> : <></>
       }
       {
        subItem && isHover ? <div className="z-10 absolute top-[100%] left-0 flex flex-col" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
                {
                    subItem.map(({title, url} : any)=>
                    {
                        return <Link key={url} href={link + url} onClick={() => toggleMenu(false)} className="p-2 m-small bg-white font-bold rounded-sm w-[10rem] text-sub-tit hover:text-theme-alt transition-all duration-200 ">{title}</Link>
                    })
                }
                </div> :
                <></>
       }
       </div>
       
    )
}

export default Navbar