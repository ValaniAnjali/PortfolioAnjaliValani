import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.Anjalilogo} alt=' ' className='w-36 mx-auto mb-2'/>
            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt=' ' className='w-6'/> anjalivalani728@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t-2 border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Anjali Valani. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href='https://www.instagram.com/anjali_valani4?igsh=MWw4YjZmdWpqZ3FpaQ==' target='_blank'>Instagram</a></li>
                {/* <li><a href='https://x.com/anjalii1608' target='_blank'>Twitter</a></li> */}
                <li><a href='https://www.linkedin.com/in/anjali-valani-831663257/' target='_blank'>Linkedin</a></li>
                {/* <li><a href='https://github.com/ValaniAnjali' target='_blank'>Github</a></li> */}
            </ul>
        </div>

    </div>
  )
}

export default Footer