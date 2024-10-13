"use client"
import { siteConfig } from '@/lib/site-config';
import Link from 'next/link';
import React, { useState } from 'react';
import { navLinks } from '@/lib/constants';
import NavLink from './NavLink';
import { Button } from '@/components/ui/button';
import KblLogo from './KblLogo';
import { Menu,  X } from 'lucide-react';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header sticky top-0 z-30 bg-white">
            <nav className="flex justify-between items-center px-4 lg:px-44 ">
                <div>
                    <Link href={siteConfig.url} className="w-4/5">
                        <KblLogo />
                    </Link>
                </div>

                <div className="hidden lg:flex gap-20 font-medium">
                    {navLinks.map(({ name, link }) => (
                        <NavLink key={link} name={name} link={link} />
                    ))}
                </div>
                <Button asChild className="bg-orange-dark hidden lg:flex lg:items-center hover:bg-orange-primary">
                    <Link href={siteConfig.links.contact}>Contact us</Link>
                </Button>


                <div className="lg:hidden">
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="lg:hidden bg-white px-4 py-2 border-t">
                    <div className="flex flex-col gap-4 items-center">
                        {navLinks.map(({ name, link }) => (
                            <NavLink key={link} name={name} link={link} />
                        ))}
                        <Button asChild className="bg-orange-dark hover:bg-orange-primary">
                            <Link href={`${siteConfig.links.contact}`}>Contact us</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};


export default Header;
