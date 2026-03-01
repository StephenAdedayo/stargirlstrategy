"use client"

import { faqData } from '@/assets/assets'
import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'

const Faq = () => {

    const [drop, setDrop] = useState<number[]>([])
    

  return (
    <section className="py-24 px-6 lg:px-20 md:px-16 bg-gray-100 relative" id="services">
      <div className="w-full mx-auto ">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-5 py-2 bg-orange-500/8 rounded-full mb-6">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
              faq
            </span>
          </div>
          
          <h2 className="font-ovo  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
           Common questions
          </h2>
    </div>
    </div>


    {/* faq */}

    <div className='flex items-start lg:flex-row flex-col gap-14'>

        <div className='flex-[50%] w-full flex flex-col gap-5'>
        {faqData.map((faq, i) => (
            <div key={i} onClick={() => setDrop(prev => prev.includes(i) ? prev.filter(p => p !== i): [...prev, i])} className='border border-gray-300 bg-white rounded-3xl py-8 px-6'>
                <div className='flex justify-between items-center '>
                    <h3 className='text-black/90 text-lg font-semibold'>{faq.question}</h3>
                    <FaPlus  className={`text-lg text-navtext ${drop.includes(i) ? "rotate-45" : "rotate-0"} transition-transform duration-300 delay-75`}/>
                </div>

                <div className={`${drop.includes(i) ? "max-h-screen pt-8" : "max-h-0  overflow-hidden"} text-[15px]  transition-all duration-300 delay-75`}>
                    {faq.answer}
                </div>
            </div>
        ))}
    </div>
          
          <div className='flex-[50%]'>
                <video playsInline loop controls src="/faq.mp4" className='rounded-3xl'></video>

          </div>
    </div>

    
      
    </section>
  )
}

export default Faq
