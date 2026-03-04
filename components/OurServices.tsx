import { services } from '@/assets/assets';
import React from 'react';

const OurServices = () => {
 

  return (
    <section id='services' className="py-24 scroll-mt-12 px-6 md:px-16 lg:px-20 bg-white">
      <div className="w-full mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-3xl p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] hover:border-orange-500 overflow-hidden"
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                {/* Number */}
                <div className="font-ovo text-sm font-bold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  {service.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-linear-to-br from-orange-500/10 to-orange-400/10 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-linear-to-br group-hover:from-orange-500 group-hover:to-orange-400">
                  <service.icon className='text-4xl' />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-gray-600 text-[15px]"
                  >
                    <span className="shrink-0 w-5 h-5 bg-linear-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Link */}
              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-orange-500 font-semibold text-[15px] group-hover:gap-3 transition-all duration-300"
              >
                Get Quote
                <span className="transition-transform duration-300">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices