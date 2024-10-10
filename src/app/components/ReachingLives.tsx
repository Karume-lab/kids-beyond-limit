"use client"
import { Button } from '@/components/ui/button';
import { statistics } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import React from 'react'
// import CountUp from 'react-countup/build/CountUp';
import CountUp from 'react-countup'


const ReachingLives = () => {
    return (
    <div className='bg-orange-gradient text-white relative h-[600px] md:h-1/2'>
            <div className='py-32 md:py-32  px-10 md:px-20  flex gap-4 flex-col'>
                <p className='font-medium md:w-4/5 text-2xl md:text-7xl'>
                    We use sports to inspire young people to reach their full potential and access education opportunities through sports scholarships.
                </p>
                <Button className='bg-transparent rounded-xl hover:bg-white hover:text-orange-primary border-2 border-white hover:border-transparent duration-300 drop-shadow-lg  transition flex gap-2 w-fit'>
                    Read more
                    <ArrowRight />
                </Button>
            </div>
            <div className="relative">
                <div className="bg-white shadow-lg text-center md:text-left rounded-xl w-3/4 px-10 md:px-28 py-5 md:py-10 z-10 absolute top-20 left-1/2 md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="font-bold italic text-xl text-black">Reaching Lives</h2>
                    <ul className="text-orange-primary flex flex-wrap space-y-5 justify-between items-center">
                        {statistics.map(({ name, value }) => {
                            return (
                                <li key={name} className="flex flex-col h-fit w-40">
                                    <span className='text-3xl md:text-7xl font-bold'>
                                        <CountUp
                                            end={value}
                                            duration={5}
                                            enableScrollSpy={true}
                                            // scrollSpyOnce={true}
                                        />+
                                    </span>
                                    {/* <span className='md:text-7xl font-bold'>{value}+</span> */}
                                    <span className="text-sm md:text-xl font-semibold ">{name}</span>
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
