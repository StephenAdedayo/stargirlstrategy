import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const QuoteHero = () => {
  return (
    <div className='w-full h-screen relative'>
                
                <div className='absolute inset-0'>
                    <Image src={assets.quote_hero} fill priority alt='contact_hero  object-center object-cover'/>
                </div>
        
                <div className='absolute inset-0 bg-black/80'/>
        
                <div className="sm:space-y-8 space-y-6 max-xs:space-y-4 px-6 lg:px-20 md:px-16 absolute inset-0 flex flex-col justify-center ">
                    {/* Badge */}
                    <div className="inline-flex w-fit items-center gap-3 bg-orange-500/10 backdrop-blur-md border border-orange-500/30 px-5 py-2.5 rounded-full">
                      <span className="text-orange-400 text-sm">✦</span>
                      <span className="text-white text-sm font-semibold">Custom Pricing</span>
                    </div>
        
                    <h1 className="font-ovo text-4xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05]  max-xs:text-lg tracking-tight">
                      Get Your Personalized Quote
  <br />
                      <span className="bg-linear-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
     </span>
                    </h1>
        
                     <p className="sm:text-xl max-xs:text-xs text-base text-white/85 leading-relaxed max-w-2xl">
        Tell us about your business and we'll create a tailored strategy with transparent pricing that fits your goals and budget.


                    </p>

                    <ul className="space-y-4">
              {[
                'Free consultation included',
                'Custom package recommendations',
                'Transparent pricing breakdown',
                'Response within 24 hours'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90 text-lg">
                  <span className="shrink-0 w-6 h-6 bg-linear-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
        
      </div>
    </div>
  )
}

export default QuoteHero
