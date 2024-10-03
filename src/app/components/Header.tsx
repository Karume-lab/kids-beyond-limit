import { siteConfig } from '@/lib/site-config';
import Link from 'next/link';
import React from 'react'
import { navLinks } from '@/lib/constants';
import NavLink from './NavLink';
import { Button } from '@/components/ui/button';
import KblLogo from './KblLogo';


const Header = () => {
    return (
        <nav>
            <ul className='flex justify-between text-xl items-center px-20 font-bold'>
                <li>
                    <Link href={siteConfig.url} className="w-4/5">
                        <KblLogo />
                    </Link>
                </li>

                <div className='flex gap-10'>
                    {navLinks.map(({ name, link }) => {
                        return (
                            <NavLink key={link} name={name} link={link} />
                        )
                    })}
                </div>
                <Button asChild className='bg-[#D8521B] hover:bg-[#E75D246B]'>
                    <Link href={`${siteConfig.url}/contact-us`}>
                        Contact us
                    </Link>
                </Button>
            </ul>
        </nav>
    )
}

export default Header;
