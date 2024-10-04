import React from 'react'
import RoundedImageCard from './RoundedImageCard';
import { benefits } from '@/lib/constants';

const MoreThanASport = () => {
    return (
        <div className='bg-orange-gradient text-white flex py-20 px-64 justify-between'>
            <RoundedImageCard
                imageUrl='/more-than-a-sport-bg-img.png'
                alt='Girl throwing ball'
                size={500}
            />
            <div className='w-1/2'>
                <h2 className='text-3xl font-bold'>More than a sport: Handball for hope.</h2>
                <p className='my-5'>
                    We believe that sports is a school  that allows learning
                    in a playful and fun manner, and gain fundamental skills.
                </p>
                <ul className='flex flex-col gap-3'>
                    {benefits.map(benefit => {
                        return (
                            <li key={benefit} className='flex gap-2'>
                                <RoundedImageCard
                                    imageUrl='/footbal-icon.png'
                                    alt='Football icon'
                                    size={500}
                                />
                                <span>{benefit}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}


export default MoreThanASport;
