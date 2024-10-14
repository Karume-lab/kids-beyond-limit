import React from 'react'
import RoundedImageCard from './RoundedImageCard';
import LearnMore from './LearnMore';
import { siteConfig } from '@/lib/site-config';



const WhoWeAre = () => {
    return (
        <div id='who-we-are' className='mt-56 md:mt-80 xl:mt-40 p-10 md:px-20 lg:px-60 flex flex-wrap gap-5 justify-evenly'>
            {/* Left Section: Text Content */}
            <div className='space-y-2 max-w-lg'>
                <h2 className='text-sm font-bold '>WHO WE ARE</h2>
                <p className='text-base md:text-xl pb-5'>
                    Kids Beyond Limit is a non-profit, Sports for Development Organization that inspires the unlimited possibilities a child can achieve in life if given a good nurturing environment. Since 2008, we’ve impacted over 300 young lives through scholarships, mentorship, and leadership programs. We believe every child deserves the chance to thrive in a safe, healthy, and inspiring environment.
                </p>
                <LearnMore url={siteConfig.links.about} />
            </div>

            {/* Right Section: Image */}
            <RoundedImageCard
                alt='The team in an indoor court'
                imageUrl='/who-we-are-bg-img.png'
                size={500} 
            />
        </div>

    )
}


export default WhoWeAre;
