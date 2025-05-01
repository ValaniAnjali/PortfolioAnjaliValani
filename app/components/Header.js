import { assets, contactTools } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8,type:'spring',stiffness:100}}
        >
            <Image src={assets.profile_img}  alt=' ' className='rounded-full w-32'/>
            
        </motion.div>
        <motion.h3
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6,delay:0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I&#39;m Anjali Valani <Image src={assets.hand_icon} alt='' className='rounded-full w-6'/></motion.h3>
        <motion.h1
        initial={{y:-30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8,delay:0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Web And App Developer </motion.h1>
        <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.7}}
        className='max-w-2xl mx-auto font-Ovo'
        >
        I am a passionate Web and App Developer.
        I love crafting beautiful websites and powerful mobile apps that solve real-world problems.  
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a href='#contact'
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6,delay:1}}
             className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                Contact ME <Image src={assets.right_arrow_white} alt='' className=' w-4'/></motion.a>
            <motion.a href='/ValaniAnjali.pdf' 
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6,delay:1.2}}
            download
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
            My resume <Image src={assets.download_icon} alt='' className=' w-4'/></motion.a>
        </div>

        {/* Social Media Icons Section */}
        <motion.div 
    className='flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 w-full' // Use flex-wrap and gap for spacing
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 1.2 }}
>
    {contactTools.map((tool, index) => (
        <a 
            key={index} 
            href={tool.link} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
        >
            <Image src={tool.icon} alt={`${tool.link} Icon`} className='w-6 h-6' />
        </a>
    ))}
</motion.div>




    </div>
  )
}

export default Header
