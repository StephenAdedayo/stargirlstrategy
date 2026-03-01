import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CtaProps {
  href: string;
  text: string;
}

const Cta = ({href, text}: CtaProps) => {
  return (
    <div className='relative h-[50vh] '>
        
        <div className='absolute inset-0 h-[50vh]'>
            <Image src={assets.cta_image} fill priority alt='cta_image' className='object-center object-cover'/>
        </div>

        <div className='absolute inset-0 bg-black/80' />

         
         <div className='absolute px-6 md:px-16 lg:px-20 inset-0 flex flex-col gap-5 justify-center items-center'>
               <h4 className='text-white text-center text-4xl'>Ready to get <span className='bg-linear-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent'>started?</span> </h4>

               <p className='text-base  text-center text-white/80'>Let's discuss which services are right for your business and create a custom plan that delivers results.</p>

                
                 
                <button className='mt-5 hover:-translate-y-2 active:scale-105 transition-all duration-300 '>
                    <a href={href} className='bg-linear-to-br from-orange-500 to-orange-400  cursor-pointer  text-white rounded-full px-6 py-3'>{text}</a>
                </button>
               
         </div>

    </div>
  )
}

export default Cta
