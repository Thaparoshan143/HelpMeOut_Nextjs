import React from 'react'
import { _navItems } from '@/_data/NavItems'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="z-10 w-full bg-[#eee8] shadow-md shadow-[#aaa] backdrop-filter backdrop-blur-3xl sticky top-0 left-0">
    <div className="flex flex-row justify-evenly items-center p-2 m-x-auto w-[60%] m-auto ">
        {
            _navItems.map(({title, url})=>
            {
                return <NavItem key={url} title={title} link={url} />
            })
        }
    </div>
    </nav>
  )
}

const NavItem = ({title, link} : any) =>
{
    return (
        <Link href={link} className="p-2 m-2 text-xl font-bold text-theme hover:text-theme-alt transition-all duration-200">{title}</Link>
    )
}

export default Navbar