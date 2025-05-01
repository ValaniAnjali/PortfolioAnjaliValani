import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScroll,setIsScroll]=useState(false);
    const sideMenuref=useRef();
    const openMenu=()=>{
        sideMenuref.current.style.transform='translateX(-16rem)'
    }
    const closeMenu=()=>{
        sideMenuref.current.style.transform='translateX(16rem)'
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt=' ' className='w-full'/>
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
        <a href='#top'>
            <Image src={assets.Anjalilogo} alt=' ' className='w-28 cursor-pointer mr-14'/>
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a className='font-Ovo' href='#top'>Home</a></li>
            <li><a className='font-Ovo' href='#about'>About</a></li>
            <li><a className='font-Ovo' href='#skils'>Skils</a></li> 
            <li><a className='font-Ovo' href='#experience'>Experience</a></li>
            <li><a className='font-Ovo' href='#project'>Projects</a></li>
            <li><a className='font-Ovo' href='#contact'>Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            
        <a
  href="mailto:anjalivalani728@gmail.com"
  className='contact-button hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo relative'
>
  Contact
  <Image src={assets.arrow_icon} alt=' ' className='w-3' />
</a>

        </div>
        {/* mobile menu */}
        <ul ref={sideMenuref} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ${isScroll ? "":"bg-white shadow-sm bg-opacity-50"}`}>
            <div className='absolute right-6 top-6' onClick={closeMenu}><Image src={assets.close_black} alt=' ' className='w-5 cursor-pointer'/></div>
        <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#skils'>Skils</a></li> 
            <li><a className='font-Ovo' onClick={closeMenu} href='#experience'>Experience</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#project'>My Work</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact me</a></li> 
        </ul>
    </nav>
    </>
  )
}

export default Navbar