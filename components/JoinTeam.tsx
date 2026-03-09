import { benefits } from '@/assets/assets';
import React from 'react';



const JoinTeam = () => {
  
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-20 bg-gray-100 overflow-hidden" id="careers">
      {/* Animated Background Blob */}
      <div className="absolute top-[-50%] right-[-20%] w-200 h-20 bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto text-center relative z-1">
        
        {/* Main Content */}
        <h2 className="font-ovo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold  mb-6 tracking-tight">
          Join Our Creative Team
        </h2>
        
        <p className="md:text-xl text-sm leading-relaxed mb-12 max-w-3xl mx-auto">
          We're always looking for talented, passionate individuals who want to make a real impact in the world of social media. Join us and help brands tell their stories.
        </p>
        
        {/* CTA Button */}
        <a 
          href="https://tally.so/r/MeOYKl"
          className="inline-block bg-white text-orange-500 md:px-12 md:py-5 px-8 py-3 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        >
          Join Team
        </a>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-linear-to-br from-orange-500 via-orange-400 to-orange-300 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="md:text-4xl text-4xl mb-4 flex items-center justify-center text-white">
                <benefit.icon />
              </div>
              <h4 className="md:text-xl text-lg font-bold text-white mb-3">
                {benefit.title}
              </h4>
              <p className="text-white/90 max-sm:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default  JoinTeam