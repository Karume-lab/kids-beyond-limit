 import React from 'react'
import RoundedImageCard from './RoundedImageCard';
import { benefits } from '@/lib/constants';
// import Image from 'next/image';
import { Trophy } from 'lucide-react';

const MoreThanASport = () => {
    return (
        <div className='bg-orange-gradient text-white flex flex-wrap-reverse py-20 px-8 md:px-64 justify-between'>
            <RoundedImageCard
                imageUrl='/more-than-a-sport-bg-img.png'
                alt='Girl throwing ball'
                size={500}
            />
            <div className=' md:w-1/2'>
                <h2 className=' text-2xl md:text-3xl font-bold'>More than a sport: Handball for hope.</h2>
                <p className='my-5'>
                    We believe that sports is a school  that allows learning
                    in a playful and fun manner, and gain fundamental skills.
                </p>
                <ul className='flex flex-col gap-3'>
                    {benefits.map(benefit => {
                        return (
                            <div key={benefit} className='flex items-center'>
                                <li className='h-1/2'>
                                    {/* <Image
                                        src='/footbal-icon.png'
                                        alt='Football icon'
                                        width={20}
                                        height={20}
                                    /> */}
                                    <Trophy />
                                </li>
                                <span className='h-2/3'>{benefit}</span>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}


export default MoreThanASport;
