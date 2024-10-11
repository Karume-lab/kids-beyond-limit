import Image from 'next/image'
import React from 'react'


type RoundedImageCardProps = {
    imageUrl: string,
    size: number,
    alt: string,
}

const RoundedImageCard: React.FC<RoundedImageCardProps> = ({
    imageUrl,
    size,
    alt,
}) => {
    return (
        <Image
            src={imageUrl}
            alt={alt}
            width={size}
            height={size}
            className="w-full lg:w-auto max-w-sm lg:max-w-full rounded-xl"
        />
    );
}


export default RoundedImageCard;
