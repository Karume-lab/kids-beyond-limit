import React from 'react'
import RoundedImageCard from './RoundedImageCard';
import LearnMore from './LearnMore';



const WhoWeAre = () => {
    return (
        <div className='mt-40 px-60 flex justify-between'>
            <div className='flex gap-5 flex-col'>
                <h2 className='text-sm font-bold'>WHO WE ARE</h2>
                <p className='w-2/3 text-xl'>
                    We are a non-profit, Sport for Development organization based in Kenya.
                    ur journey began in 2008 in Korogocho slums, inspired by the unlimited
                    ossibilities a child can achieve in life if given a good environment anchored on UN SDGs.
                </p>
                <LearnMore />
            </div>
            <RoundedImageCard
                alt='The team in an indoor court'
                imageUrl='/who-we-are-bg-img.png'
                size={500}
            />
        </div>
    )
}


export default WhoWeAre;
