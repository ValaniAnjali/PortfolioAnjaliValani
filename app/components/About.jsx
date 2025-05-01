import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion, scale } from "motion/react"

const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
        <motion.h4 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
        <motion.h2 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
        className='text-center text-5xl font-Ovo'>About me</motion.h2>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
            <motion.div
            initial={{opacity:0,scale:0.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.profile_img} alt='user' className='w-full rounded-3xl'/>
            </motion.div>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:0.8}}
            className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
                I am a developer who loves building websites and mobile applications. I quickly adapt to new technologies and changes in the industry. I also have good knowledge of Google Cloud, AI, and Machine Learning. 
                I have built several websites and apps to make users' lives easier, and I am deeply passionate about coding, problem-solving, Data Structures, and DBMS. 
                In addition to my solo projects, I have successfully developed 2 websites and 1 mobile app as part of a teamwork collaboration.
            </p>

            {/* <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
               {infoList.map(({icon,iconDark,title,description},index)=>(
                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer'
                key={index}>
            <div className="w-10 h-10">
                <Image src={icon} alt="logos" className="w-7 mt-3" />
            </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
                </li>
               ))} 
            </ul> */}
            <motion.h4
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:1.5}}
            className='my-6 text-gray-700 font-Ovo'>Tools I use</motion.h4 >
            <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:0.8}}
            className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool,index)=>(
                    <motion.li
                    whileHover={{scale:1.1}}
                    key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </motion.li>
                ))}
            </motion.ul>

            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About