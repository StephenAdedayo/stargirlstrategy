"use client"

import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaTimes, FaWhatsapp } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'

const Navbar = () => {

  const links = [
    {name : "Home", href : "/"},
    {name : "Quote", href : "/quote"},
    {name : "Services", href : "/services"},
    {name : "Contact", href : "/contact"}
  ]

  const pathname = usePathname()

  const [isScrolled, setIscrolled] = useState<Boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)

  const handleWheel = () => {

    if(window.scrollY > 50){
      setIscrolled(true)
    }else{
      setIscrolled(false)
    }

  }

  useEffect(() => {
      window.addEventListener("scroll", handleWheel)

      return () => window.removeEventListener("scroll", handleWheel)
  }, [])

  return (
    <div>
      
      <nav className={`flex z-10 transition-all duration-300 fixed w-full justify-between items-center py-6 max-xs:py-3 max-xs:px-3 px-6 md:px-16 lg:px-20 ${isScrolled ? "bg-nav/95 backdrop-blur-3xl" : "" }`}>

         <a href='/'>
          <Image src={assets.stargirl}  className='w-20  aspect-auto'  alt='logo'/>
         </a>


    {/* navlinks */}
         <div className='lg:flex gap-8  hidden items-center'>
           {links.map((link, index) => (
            <Link key={index} href={link.href} className={`group ${isScrolled ? "text-white" : "text-white"}`}>
              {link.name}
              <div className='h-0.5 bg-orange-500 w-0 group-hover:w-full transition-all duration-300'></div>
            </Link>
           ))}

         </div>


         <div className='flex items-center gap-5 max-xs:gap-1'>
          <a href="https://wa.me/2348068395142" target="_blank" rel="noopener noreferrer" className="bg-[#fa7a1e] border-[#fa7a1e] border-2 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 active:scale-110 hover:scale-105 size-10">
          <FaWhatsapp className={`text-white text-xl ${isScrolled ? "text-white" : ""}`}/>
         
          </a>

          <a href="tel:+2348068395142" className="bg-[#fa7a1e] border-[#fa7a1e] border-2 flex items-center justify-center rounded-full size-10 transition-all duration-300 active:scale-110 hover:scale-105 cursor-pointer">
          <BsTelephone className={`text-white text-xl ${isScrolled ? "text-white" : ""}`}/>
         
          </a>

            <RiMenu3Fill onClick={() => setIsMenuOpen(true)} className={`lg:hidden block text-2xl cursor-pointer text-white`}/>

         </div>

      </nav>

      {/* smaller screens */}
      <nav className={`fixed z-50 lg:hidden block h-full top-0 bottom-0 right-0 left-0 ${isMenuOpen ? "w-full" : "w-0 overflow-hidden"} flex flex-col items-center justify-center transition-all duration-300 delay-75 bg-nav `}>
            
            <div className='absolute cursor-pointer top-6 right-6'>
              <FaTimes onClick={() => setIsMenuOpen(false)} className='text-3xl text-orange-400'/>
            </div>
          
          <a href='/' className='flex justify-center items-center '>
            {/* <Image /> */}
          <Image src={assets.stargirl}  className='w-20  aspect-auto'  alt='logo'/>
          </a>

            <div className='flex flex-col gap-6 mt-10  w-full'>
           {links.map((link, index) => {
             const isActive = link.href === pathname
            return (
            <Link onClick={() => setIsMenuOpen(false)} key={index} href={link.href} className={`group rounded-2xl px-6 py-2 ${isActive ? "bg-orange-500/10 border backdrop-blur-3xl border-orange-500/30" : "hover:text-white/70"}  text-white`}>
              {link.name}
              {/* <div className='h-0.5 bg-orange-500 w-0 group-hover:w-full transition-all duration-300'></div> */}
            </Link>
           )})}

         </div>

         <div className='text-center mt-10 group bg-orange-500/10 border px-6 rounded-2xl py-2 border-orange-500/30 flex items-center   gap-3'>
         <BsTelephone className='text-white text-xl transition-colors duration-300 group-hover:text-orange-400'/>
            <a href="tel: +2348068395142" className='text-white transition-colors duration-300 group-hover:text-orange-400 '>
              +234 234567890
            </a>
         </div>

      </nav>

    </div>
  )
}

export default Navbar
