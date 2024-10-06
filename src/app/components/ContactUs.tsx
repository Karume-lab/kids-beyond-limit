import { Button } from '@/components/ui/button';
import { socials } from '@/lib/constants';
import Image from 'next/image';
import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className='flex justify-between overflow-hidden w-full'>
                <form action="" className='px-64 py-20 flex flex-col justify-between w-2/3'>
                    <div className='my-2'>
                        <h2 className='text-3xl font-bold'>Contact Us</h2>
                        <span>Get in touch with us for any inquiries</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-xl'>Email</label>
                        <input type="email" className='border-2 border-gray-600 rounded-xl w-full h-16' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-xl'>Message</label>
                        <textarea name="" id="" className='border-2 border-gray-600 rounded-xl w-full h-56' />
                    </div>
                    <Button className='bg-orange-dark hover:bg-orange-primary my-5'>
                        Send
                    </Button>
                </form>
                <div className='bg-blue-pale p-16 relative'>
                    <div className='bg-orange-600 absolute top-20 right-0 p-10 rounded-s-2xl w-[600px] h-3/4 shadow-xl bg-opacity-100'>
                        <h2 className="text-white font-bold mb-4 text-5xl">Info</h2>
                        <ul className="space-y-4">
                            {socials.map(({ text, logoUrl }) => {
                                return (
                                    <li key={text} className="flex items-center gap-2">
                                        <Image
                                            src={logoUrl}
                                            alt={`${text}'s Logo`}
                                            width={50}
                                            height={50}
                                            className="w-12 h-12 object-contain"
                                        />
                                        <span className="text-white font-semibold">{text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
}


export default ContactUs;
