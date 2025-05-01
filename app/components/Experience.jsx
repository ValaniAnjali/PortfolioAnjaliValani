import React from 'react';
import { experienceData } from '../components/experienceData'; // path where you save it
// import { assets } from '@/assets/assets'; // optional if you want to use icons later
import Link from 'next/link'; // to open certificate links easily
import { motion } from "motion/react"

const Experience = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };
  return (
    <div id="experience" className="w-full px-[5%] py-16 min-h-screen flex flex-col justify-center items-center scroll-mt-20">
      
      {/* Animated Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
       
        className='text-center text-5xl font-Ovo mb-12'
      >
       Experience
      </motion.h2>
      <div className="flex flex-col gap-6">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="border rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            {item.certificateLink && (
              <motion.div whileHover={{ scale: 1.03 }}>
                <Link href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                    View Certificate
                  </button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
