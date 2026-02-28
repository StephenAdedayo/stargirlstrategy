import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen max-xs:min-h-screen'>
      
       <div>
        <video autoPlay muted playsInline loop  src="/media.mp4" className='w-full object-cover object-center h-screen max-xs:min-h-screen'></video>
       </div>

       <div className='absolute inset-0 bg-black/50 h-screen max-xs:min-h-screen'>
       </div>


<div>

          <div className="sm:space-y-8 space-y-6 max-xs:space-y-4 px-6 lg:px-20 md:px-16 absolute inset-0 flex flex-col justify-center ">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-3 bg-orange-500/10 backdrop-blur-md border border-orange-500/30 px-5 py-2.5 rounded-full">
              <span className="text-orange-400 text-sm">✦</span>
              <span className="text-white text-sm font-semibold">Award-Winning Agency</span>
            </div>
            
            {/* Heading */}
            <h1 className="font-ovo text-4xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05]  max-xs:text-lg tracking-tight">
              Transform Your<br />
              <span className="bg-linear-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                Social Presence
              </span>
            </h1>
            
            {/* Description */}
            <p className="sm:text-xl max-xs:text-xs text-base text-white/85 leading-relaxed max-w-2xl">
              We craft data-driven social media strategies that amplify your brand, 
              engage your audience, and deliver measurable ROI. From content creation 
              to community management, we handle it all.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-orange-500  max-xs:px-4 max-xs:py-2 to-orange-400 text-white md:px-10 px-6 md:py-4 py-3 rounded-full font-semibold shadow-[0_8px_30px_rgba(240,140,0,0.3)] hover:shadow-primary-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-1">Get Started Free</span>
                <span className="relative z-1 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a 
                href="#work" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white max-xs:px-4 max-xs:py-2 md:px-10 px-6 md:py-4 py-3 rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
              >
                View Our Work
              </a>
            </div>



</div>
</div>

 {/* <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:hello@stargirlstrategy.com" 
                className="flex items-center gap-3 bg-white/8 backdrop-blur-md border border-white/15 text-white px-6 py-3.5 rounded-full hover:bg-white/15 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-lg">✉</span>
                <span className="text-sm font-medium">Send Email</span>
              </a>
              
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/8 backdrop-blur-md border border-white/15 text-white px-6 py-3.5 rounded-full hover:bg-white/15 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-lg">💬</span>
                <span className="text-sm font-medium">WhatsApp Us</span>
              </a>
              
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-3 bg-white/8 backdrop-blur-md border border-white/15 text-white px-6 py-3.5 rounded-full hover:bg-white/15 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-lg">📞</span>
                <span className="text-sm font-medium">Call Now</span>
              </a>
            </div>
        */}
        <div className="absolute bottom-0 lg:right-[30%] right-[10%] max-xs:hidden bg-white/95 backdrop-blur-xl lg:px-8 lg:py-6 px-6 py-4  rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-bounce">
              <div className="font-ovo lg:text-5xl text-2xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent leading-none mb-2">
                250%
              </div>
              <div className="text-gray-600 text-sm font-medium">Avg Growth</div>
            </div>
            
            <div className="absolute bottom-0 lg:left-[75%] max-xs:hidden  left-[10%] bg-white/95 backdrop-blur-xl lg:px-8 lg:py-6 px-6 py-4 w-fit rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-bounce">
              <div className="font-ovo lg:text-5xl text-2xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent leading-none mb-2">
                98%
              </div>
              <div className="text-gray-600 text-sm font-medium">Retention</div>
            </div>

    </div>
  )
}

export default Hero
