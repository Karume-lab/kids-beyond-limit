import { Button } from '@/components/ui/button';
import { statistics } from '@/lib/constants';
import { MoveRight } from 'lucide-react';
import React from 'react'


const ReachingLives = () => {
    return (
        <div className='bg-orange-gradient text-white  relative'>
            <div className='py-32 px-20  flex gap-4 flex-col'>
                <p className='font-medium  w-[75%] text-7xl'>
                    We use sports to inspire young people to reach their full potential and access education opportunities through sports scholarships.
                </p>
                <Button className='bg-transparent rounded-xl hover:bg-transparent border-2 hover:border-white border-transparent transition flex gap-2 w-fit'>
                    Read more
                    <MoveRight />
                </Button>
            </div>
            <div className="relative">
                <div className="bg-white shadow-lg rounded-xl w-4/5 px-32 py-5 md:py-10 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="font-bold italic text-xl text-black">Reaching Lives</h2>
                    <ul className="text-orange-primary flex justify-between items-center">
                        {statistics.map(({ name, value }) => {
                            return (
                                <li key={name} className="flex flex-col ">
                                    <span className='md:text-7xl font-bold'>{value}+</span>
                                    <span className="text-xl font-semibold">{name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReachingLives;
