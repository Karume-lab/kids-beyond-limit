import { T_NavLink as NavLinkProps } from '@/lib/types'
import Link from 'next/link'
import React from 'react'



const NavLink: React.FC<NavLinkProps> = ({ name, link }) => {
    return (
        <Link href={link} className='hover:text-orange-primary'>
            <span>{name}</span>
        </Link>
    )
}

export default NavLink
