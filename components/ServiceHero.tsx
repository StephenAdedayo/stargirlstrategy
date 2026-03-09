import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const ServiceHero = () => {
  return (
<div className='w-full h-screen relative'>
        
        <div className='absolute inset-0 h-screen'>
            <Image src={assets.service_hero} fill  priority alt='service_hero ' className='object-cover object-center'/>
        </div>

        <div className='absolute inset-0 bg-black/50'/>

        <div className="sm:space-y-8 space-y-6 max-xs:space-y-4 px-6 lg:px-20 md:px-16 absolute inset-0 flex flex-col justify-center ">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-3 bg-orange-500/10 backdrop-blur-md border border-orange-500/30 px-5 py-2.5 rounded-full">
              <span className="text-orange-400 text-sm">✦</span>
              <span className="text-white text-sm font-semibold">What We Do</span>
            </div>

            <h1 className="font-ovo text-4xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05]  max-xs:text-lg tracking-tight">
              Comprehensive Social <br />
              <span className="bg-linear-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
               Media Solutions
              </span>
            </h1>

             <p className="sm:text-xl max-xs:text-xs text-base text-white/85 leading-relaxed max-w-2xl">
From strategy to execution, we provide end-to-end services that transform your social media presence and drive real business results.
            </p>


            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-orange-500  max-xs:px-4 max-xs:py-2 to-orange-400 text-white md:px-10 px-6 md:py-4 py-3 rounded-full font-semibold shadow-[0_8px_30px_rgba(240,140,0,0.3)] hover:shadow-primary-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-1">Get Started Free</span>
                <span className="relative z-1 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a 
                href="#pricing" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white max-xs:px-4 max-xs:py-2 md:px-10 px-6 md:py-4 py-3 rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
              >
                View Pricing
              </a>
            </div>



        </div>

    </div>
  )
}

export default ServiceHero
