import { partners } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';


const Partners = () => {
    return (
        <div className="p-8 bg-[#F9F9F9]">
            <h2 className='text-blue-600 text-center text-3xl font-bold'>Our Valuable Patners</h2>
            <Marquee autoFill pauseOnHover speed={70}>
                {partners.map(({ name, logoSize, externalLink, logoUrl }) => {
                    return (
                        <Link key={externalLink} href={externalLink} className='md:grayscale md:hover:grayscale-0'>
                            <Image
                                src={logoUrl}
                                alt={`${name}'s logo`}
                                width={logoSize}
                                height={logoSize}
                                className='mx-4'
                            />
                        </Link>
                    );
                })}
            </Marquee>
        </div>
    );
};


export default Partners;
