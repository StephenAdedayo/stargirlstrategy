import { pricingPlans } from '@/assets/assets'
import Link from 'next/link'
import React from 'react'

const Pricing = () => {
  return (
    <section className="py-24 px-6 lg:px-20 md:px-16 bg-white relative scroll-mt-20" id="pricing">
      <div className="w-full mx-auto ">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-5 py-2 bg-orange-500/8 rounded-full mb-6">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
              Pricing
            </span>
          </div>
          
          <h2 className="font-ovo  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
           Choose your plan
          </h2>
    </div>
    </div>


{/* Pricing list */}

      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
        {pricingPlans.map((plan, index) => (
            <div key={index} className={`${plan.popular ? "bg-linear-to-br from-orange-400 to-orange-300 border-none" : "border-gray-300"} transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-2 w-full border rounded-3xl px-10 xl:py-14 py-10 relative`}>
                   
                   <div className={`${plan.popular ? "text-white/80" : "text-black/80"} space-y-3 mb-10`}>
                       <h4 className='uppercase  font-medium text-sm'>{plan.name}</h4>
                       <p className={`${plan.popular ? "text-white" : "text-black"} text-6xl font-semibold font-ovo`}>{`${plan.currency}${plan.price}`}</p>
                       <p className='font-medium text-sm'>{plan.duration}</p>
                   </div>

                   {plan.popular && (
                    <div className='absolute -top-2 right-5 bg-white py-3 px-6 rounded-full'>
                              <p className='text-navtext font-bold uppercase leading-0.5 text-xs'>Most popular</p>
                    </div>
                   )}

                   <ul className="space-y-3 w-full mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`${plan.popular ? "text-white" : "text-gray-600"} flex items-center gap-3  text-[15px]`}
                  >
                    <span className="shrink-0 w-5 h-5 bg-linear-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="/quote/#quoteform" className=''>
                <button className={`mt-10 rounded-full py-5 text-center w-full border border-gray-300 ${plan.popular ? "bg-white text-navtext border-none" : "bg-linear-to-br active:hover:scale-105 transition-all delay-75 duration-300 from-orange-500 to-orange-400 text-white"} font-semibold `}>Get Started</button>
                </Link>

            </div>
        ))}
      </div>



    </section>
  )
}

export default Pricing
