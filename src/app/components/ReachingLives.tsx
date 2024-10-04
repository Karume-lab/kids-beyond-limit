import { Button } from '@/components/ui/button';
import { statistics } from '@/lib/constants';
import { MoveRight } from 'lucide-react';
import React from 'react'


const ReachingLives = () => {
    return (
        <div className='bg-gradient-orange text-white text-6xl'>
            <div className='py-20 px-10 w-3/5 flex gap-4 flex-col'>
                <p>
                    We use sports to inspire young people to reach their full potential and access education opportunities through sports scholarships.
                </p>
                <Button className='bg-transparent hover:bg-transparent border-2 hover:border-white border-transparent transition flex gap-2 w-fit'>
                    Read more
                    <MoveRight />
                </Button>
            </div>
            <div className='bg-white shadow-xl rounded-xl w-2/3'>
                <h2 className='font-bold italic text-xl text-black'>Reaching Lives</h2>
                <ul className='text-orange-primary'>
                    {statistics.map(({ name, value }) => {
                        return (
                            <li key={name}>
                                <span>{value}</span>
                                <span>{name}+</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ReachingLives;
