import { partners } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';


const Partners = () => {
    return (
        <div className="p-8 bg-[#F9F9F9]">
            <h2 className='text-blue-600 text-center text-3xl font-bold my-5'>Our Valuable Patners</h2>
            <div className='hidden md:block'>
                <Marquee autoFill pauseOnHover speed={70} >
                        {
                            partners.map(({ name, logoSize, externalLink, logoUrl }) => {
                                return (
                                    <Link key={externalLink} href={externalLink} className='grayscale-0 md:grayscale md:hover:grayscale-0'>
                                        <Image
                                            src={logoUrl}
                                            alt={`${name}'s logo`}
                                            width={logoSize}
                                            height={logoSize}
                                            className='mx-0 md:mx-4 w-auto h-20'
                                        />
                                    </Link>
                                );
                            })
                        }
                </Marquee>
            </div>

            <div className='flex justify-evenly flex-wrap gap-5 md:hidden'>
                <PartnersContainer />
            </div>
        </div>
    );
};


const PartnersContainer = () => {
    return (
        <>
            {
                partners.map(({ name, logoSize, externalLink, logoUrl }) => {
                    return (
                        <Link key={externalLink} href={externalLink} className='grayscale-0 md:grayscale md:hover:grayscale-0'>
                            <Image
                                src={logoUrl}
                                alt={`${name}'s logo`}
                                width={logoSize}
                                height={logoSize}
                                className='mx-0 md:mx-4 w-auto h-20'
                            />
                        </Link>
                    );
                })
            }
        </>
    );
}

export default Partners;
