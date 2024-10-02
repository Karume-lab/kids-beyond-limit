import { T_Partner } from '@/lib/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type PartnerProps = {
    partner: T_Partner,
}

const Partner: React.FC<PartnerProps> = ({ partner }) => {
    const {
        name,
        externalLink,
        logoUrl,
    } = partner;

    return (
        <Link href={externalLink}>
            <h2>{name}</h2>
            <Image
                src={logoUrl}
                alt={`${name}'s Logo`}
                width={150}
                height={150}
            />
        </Link>
    )
}

export default Partner;
