import { partners } from '@/lib/constants';
import { T_Partner } from '@/lib/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'




const Partners = () => {
    return (
        <section>
            {partners.map(partner => {
                return <Partner key={partner.externalLink} partner={partner} />
            })}
        </section>
    );
}


export default Partners;


type PartnerProps = {
    partner: T_Partner,
}


const Partner: React.FC<PartnerProps> = ({ partner }) => {
    const {
        name,
        externalLink,
        logoUrl,
        logoSize,
    } = partner;

    return (
        <Link href={externalLink}>
            <h2>{name}</h2>
            <Image
                src={logoUrl}
                alt={`${name}'s Logo`}
                width={logoSize}
                height={logoSize}
            />
        </Link>
    )
}
