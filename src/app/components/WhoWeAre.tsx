import React from 'react'
import RoundedImageCard from './RoundedImageCard';
import LearnMore from './LearnMore';



const WhoWeAre = () => {
    return (
        <div className='mt-40 px-60 flex  bg-blue-400'>
            <div className=' space-y-5 bg-green-300 w-fit'>
                <h2 className='text-sm font-bold bg-yellow-300 w-fit'>WHO WE ARE</h2>
                <p className='w-[60%] bg-red-400 text-xl'>
                    We are a non-profit, Sport for Development organization based in Kenya.
                    Our journey began in 2008 in Korogocho slums, inspired by the unlimited
                    possibilities a child can achieve in life if given a good environment anchored on UN SDGs.
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
