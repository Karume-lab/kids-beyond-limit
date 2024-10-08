import { T_Person } from '@/lib/types'
import Image from 'next/image';
import React from 'react'


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
        <div className='rounded-3xl shadow-2xl flex items-center gap-2 justify-center p-5 flex-col border-2 border-gray-500'>
            <Image
                src={profilePictureUrl}
                alt={`${fullName}'s Picture`}
                width={150}
                height={150}
                className='rounded-full'
            />
            <span className='font-semibold'>{fullName}</span>
            <span className='italic'>{role}</span>
            <span>{linkedInUrl}</span>
        </div>
    )
}

export default PersonCard;
