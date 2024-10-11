import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#000000] h-96 sticky bottom-0 -z-10'>
            <div className='py-10 px-20 flex '>
                <Image
                    src="/logo-icon.png"
                    alt='KBL Logo'
                    width={100}
                    height={50}
                    className=''
                />
                <Image
                    src="/logo-name.png"
                    alt='KBL Logo'
                    width={300}
                    height={50}
                    className=''
                />
            </div>
        </div>
    )
}

export default Footer;
