import { T_Person } from '@/lib/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";


type PersonCardProps = {
    person: T_Person,
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
    const {
        fullName,
        role,
        linkedInUrl,
        profilePictureUrl
    } = person;

    return (
        <div className='rounded-3xl shadow-2xl flex items-center gap-2 justify-center p-5 flex-col border border-gray-500 hover:shadow-none transition duration-300'>
            < Image
                src={profilePictureUrl}
                alt={`${fullName}'s Picture`
                }
                width={150}
                height={150}
                className='rounded-full'
            />
            <span className='font-semibold'>{fullName}</span>
            <span className='italic'>{role}</span>
            <Link href={linkedInUrl}>
                <FaLinkedin size={40} className='text-blue-800 hover:text-blue-700'/>
            </Link>
        </div>
    )
}

export default PersonCard;
