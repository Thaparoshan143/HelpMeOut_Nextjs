'use client'

import React, { useState } from 'react';
import { _navItems } from '@/_data/NavItems';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="z-10 w-full sticky top-5 left-0">
    <div className="py-2 flex flex-row justify-evenly items-center bg-white shadow-md text-theme rounded-[2rem] w-[60%] m-auto">
        {
            _navItems.map(({title, url, subItem})=>
            {
                return <NavItem key={url} title={title} link={url} subItem={subItem} />
            })
        }
    </div>
    </nav>
  )
}

const NavItem = ({title, link, subItem} : any) =>
{
    const [isHover, setIsHover] = useState(false);

    return (
       <div className="relative">
        <Link href={link} className="p-2 mx-2 text-title font-bold hover:text-theme-alt transition-all duration-200" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>{title}</Link>
       {
        subItem && isHover ? <div className="z-10 absolute top-[120%] left-0 flex flex-col" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
                {
                    subItem.map(({title, url} : any)=>
                    {
                        return <Link href={link + url} className="p-2 m-small bg-white font-bold rounded-sm w-[10rem] text-sub-tit hover:text-theme-alt transition-all duration-200 ">{title}</Link>
                    })
                }
                </div> :
                <></>
       }
       </div>
       
    )
}

export default Navbar