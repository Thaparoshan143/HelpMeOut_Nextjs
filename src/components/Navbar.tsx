import React from 'react'
import { _navItems } from '@/_data/NavItems'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-evenly items-center p-2 m-x-auto w-[60%]">
        {
            _navItems.map(({title, url})=>
            {
                return <NavItem key={url} title={title} link={url} />
            })
        }
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