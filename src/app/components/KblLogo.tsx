import { siteConfig } from '@/lib/site-config'
import Image from 'next/image'
import React from 'react'

const KblLogo = () => {
    return (
        <Image
            src={siteConfig.logoUrl}
            alt={`${siteConfig.name}'s Logo`}
            width={150}
            height={150}
        />
    )
}

export default KblLogo;
