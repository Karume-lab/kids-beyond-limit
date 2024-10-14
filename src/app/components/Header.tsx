"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { navLinks } from '@/lib/constants';
import NavLink from './NavLink';
import { Button } from '@/components/ui/button';
import KblLogo from './KblLogo';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${isScrolling ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="px-4 lg:px-32 xl:px-40 py-4 flex justify-between items-center">
                <Link href={siteConfig.links.home} className="flex items-center space-x-2">
                    <KblLogo />
                </Link>
                <nav className="hidden lg:flex space-x-20 items-center">
                    {navLinks.map(({ name, link }) => (
                        <NavLink key={name} link={link} name={name} />
                    ))}
                </nav>
                <Button asChild className='hidden lg:block lg:text-lg'>
                    <Link href={siteConfig.links.contact}>Contact us</Link>
                </Button>
                <button className="lg:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden">
                    <nav className="px-4 py-4 flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out transform origin-top">
                        {navLinks.map(({ name, link }) => (
                            <NavLink key={name} link={link} name={name} />
                        ))}
                        <Button asChild>
                            <Link href={siteConfig.links.contact}>Contact us</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};


export default Header;
