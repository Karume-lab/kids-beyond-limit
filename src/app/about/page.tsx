import React from 'react'
import { ActionCard, PersonCard, PillarCard, RoundedImageCard } from '../components';
import { actions, pillars, team } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { ArrowRight } from 'lucide-react';


const WhoWeArePage = () => {
    return (
        <>
            <div className='relative w-full bg-[url("/who-we-are-hero-bg.png")] bg-no-repeat bg-cover bg-[25%_15%] py-24 sm:py-36'>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative py-12 px-6 sm:pl-16 lg:pl-32 flex flex-col gap-6 sm:gap-10'>
                    <div className='w-full sm:w-4/5 lg:w-2/3'>
                        <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-bold'>
                            Unlocking Potential and Creating Opportunity: Our Story
                        </h1>
                    </div>
                </div>
            </div>


            <div className='md:w-2/3 px-10 py-8 sm:px-12 md:px-14 lg:px-20 mx-auto my-5 flex flex-col gap-10'>
                <section className='flex flex-col gap-2 md:gap-5'>
                    <span className='font-semibold'>WHO WE ARE</span>
                    <h2 className='italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-11/12'>We are more than a non-profit organization, we are a <span className='text-orange-primary font-bold'>movement for change</span></h2>
                    <p className='text-base md:text-lg w-3/4'>
                        Founded in the heart of Korogocho in 2008 and officially registered in 2024,
                        we believe in the limitless potential of every child. By providing scholarships
                        to high schools and universities, we&apos;ve impacted over 300 young lives, giving
                        them the opportunity to break the cycle of poverty and create brighter futures.
                    </p>
                </section>

                <section className='py-20  '>
                    <span className='font-semibold pb-4'>OUR TEAM</span>
                    <p className='text-base md:text-lg '>Together, we work tirelessly to create opportunities, foster growth, and empower children through education, mentorship, and sports.</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 py-8'>
                        {team.map(person => (
                            <PersonCard key={person.linkedInUrl} person={person} />
                        ))}
                    </div>
                </section>


                <section className=' space-y-4 '>
                    <span className='font-semibold text-lg sm:text-xl'>WHAT WE DO</span>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20'>
                        {actions.map(action => (
                            <ActionCard key={action.title} action={action} />
                        ))}
                    </div>
                </section>

            </div>

            <section className='bg-orange-gradient text-white py-20 flex gap-32 flex-col'>
                <div className='flex  w-2/3 mx-auto gap-5'>
                    <div className='flex flex-col'>
                        <span>OUR MISSION IS SIMPLE</span>
                        <p className='font-medium text-6xl'>Every child deserves the chance to live, learn, play, and grow in a safe, healthy, and inspiring environment.</p>
                    </div>
                    <RoundedImageCard
                        imageUrl='/simple-mission.png'
                        alt='Child'
                        size={300}
                    />
                </div>
                <div className='flex w-2/3 mx-auto gap-5'>
                    <RoundedImageCard
                        imageUrl='/simple-mission.png'
                        alt='Child'
                        size={300}
                    />
                    <div className='flex flex-col justify-items-center mx-auto'>
                        <p className='font-medium text-6xl'>We&apos;re committed to the UN Sustainable Development Goals</p>
                        <ul>
                            <li>Good Health and Well-being (SDG 3)</li>
                            <li>Gender Equality (SDG 5)</li>
                            <li>Quality Education (SDG 4)</li>
                            <li>Climate Action (SDG 13)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w-2/3 px-5 sm:px-10 mx-auto">
                <h2 className="text-3xl sm:text-4xl text-center font-bold underline decoration-orange-primary decoration-4 py-10 sm:py-14">
                    Our Pillars
                </h2>
                <ul className="grid grid-cols-1 gap-y-7 gap-x-7 md:grid-cols-2 ">
                    {pillars.map(pillar => {
                        return (
                            <PillarCard key={pillar.title} pillar={pillar} />
                        );
                    })}
                </ul>
            </section>


            <section className='bg-blue-gradient h-96 gap-2 flex flex-col items-center py-96 justify-center text-white  md:px-48 text-center mt-20'>
                <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold w-4/5 mx-auto'>We&apos;re creating a ripple effect that&apos;s changing families, communities, and futures.</p>
                <Button asChild className='bg-orange-dark hover:bg-orange-primary w-fit'>
                    <Link href={`${siteConfig.url}/contact-us`}>
                        <div className='flex gap-3 items-center text-base md:text-xl py-2 justify-center'>
                            <span>Let&apos;s create change together</span> <ArrowRight />
                        </div>
                    </Link>
                </Button>
            </section>
        </>
    )
}

export default WhoWeArePage;
