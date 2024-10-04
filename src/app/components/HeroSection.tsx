import { Button } from '@/components/ui/button';
import React from 'react'

const HeroSection = () => {
    return (
        <div className='bg-[url("/hero-bg.png")] bg-no-repeat bg-cover py-64'>
            <div className='py-24 pl-32 flex flex-col gap-10'>
                <div className='w-1/2'>
                    <h1 className='text-white text-6xl font-bold'>Empowering children through sports and education</h1>
                </div>
                <Button className='bg-blue-light hover:bg-blue-pale font-extrabold px-4 w-fit'>Learn More</Button>
            </div>
        </div>
    )
}

export default HeroSection;
