import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#184354] h-96'>
            <div className='py-10 px-20'>
                <Image
                    src="/logo-no-backg.png"
                    alt='KBL Logo'
                    width={100}
                    height={100}
                    className=''
                />
            </div>
        </div>
    )
}

export default Footer;
