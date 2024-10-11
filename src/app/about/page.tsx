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
            <div className='relative w-full bg-[url("/who-we-are-hero-bg.png")] bg-no-repeat bg-cover bg-[25%_15%]  py-36'>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='py-16 pl-32 flex flex-col gap-10 relative'>
                    <div className='w-2/3'>
                        <h1 className='text-white text-6xl font-bold'>
                            Unlocking potential and Creating Opportunity: Our Story
                        </h1>
                    </div>
                </div>
            </div>

            <div className='w-2/3 px-10 py-20 mx-auto my-5 flex flex-col gap-10'>
                <section className='flex flex-col gap-5'>
                    <span>WHO WE ARE</span>
                    <h2 className='italic text-6xl w-11/12'>We are more than a non-profit organization, we are a <span className='text-orange-primary font-bold'>movement for change</span></h2>
                    <p>
                        Founded in the heart of Korogocho in 2008 and officially registered in 2024,
                        we believe in the limitless potential of every child. By providing scholarships
                        to high schools and universities, we&apos;ve impacted over 300 young lives, giving
                        them the opportunity to break the cycle of poverty and create brighter futures.
                    </p>
                </section>

                <section className='flex flex-col gap-5'>
                    <span>OUR TEAM</span>
                    <div className='grid-cols-3 grid gap-20'>
                        {team.map(person => {
                            return (
                                <PersonCard key={person.linkedInUrl} person={person} />
                            );
                        })}
                    </div>
                </section>

                <section className='flex flex-col gap-5'>
                    <span>WHAT WE DO</span>
                    <p>
                        We use the power of handball to unlock opportunities, promote teamwork,
                        and inspire resilience. Through handball, children gain access to:
                    </p>
                    <div className='grid-cols-3 grid gap-20'>
                        {actions.map(action => {
                            return (
                                <ActionCard key={action.title} action={action} />
                            );
                        })}
                    </div>
                </section>
            </div>

            <section className='bg-orange-gradient text-white py-20 flex gap-32 flex-col'>
                <div className='flex w-2/3 mx-auto gap-5'>
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

            <section className="w-2/3 m-auto">
                <h2 className="text-4xl text-center font-bold underline decoration-orange-primary decoration-4 py-14">Our Pillars</h2>
                <ul className="grid grid-cols-1 gap-y-7 gap-x-14 sm:grid-cols-2">
                    {pillars.map(pillar => {
                        return (
                            <PillarCard key={pillar.title} pillar={pillar} />
                        );
                    })}
                </ul>
            </section>

            <section className='bg-blue-gradient h-96 gap-2 flex flex-col items-center p-96 justify-center text-white px-48 text-center mt-20'>
                <p className='text-7xl font-semibold w-4/5 mx-auto'>We&apos;re creating a ripple effect that&apos;s changing families, communities, and futures.</p>
                <Button asChild className='bg-orange-dark hover:bg-orange-primary w-fit'>
                    <Link href={`${siteConfig.url}/contact-us`}>
                        <div className='flex gap-3 items-center text-xl py-2 justify-center'>
                            <span>Togerther, we can do more</span> <ArrowRight />
                        </div>
                    </Link>
                </Button>
            </section>
        </>
    )
}

export default WhoWeArePage;
