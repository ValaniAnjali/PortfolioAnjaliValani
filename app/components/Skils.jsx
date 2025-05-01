'use client'
import React from 'react'
import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const Skils = () => {
  return (
    <div 
      id='skils' 
      className='w-full min-h-screen px-[5%] py-10 scroll-mt-20 flex flex-col justify-center items-center'>
      
      {/* Animated Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center text-5xl font-Ovo mb-12'
      >
        Skills
      </motion.h2>

      {/* Grid Layout */}
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {infoList.map(({ icon, title, description }, index) => (
          <motion.li
            key={index}
            className='border border-gray-200 rounded-xl p-6 bg-white cursor-pointer hover:bg-gray-100 duration-300'
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.06,
              boxShadow: '0px 15px 30px rgba(0,0,0,0.15)',
              transition: { duration: 1.3,delay:1.2 },
            }}
          >
            <div className='w-10 h-10 mb-4'>
              <Image src={icon} alt={title} className='w-7' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-600 text-sm'>{description}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Skils;
