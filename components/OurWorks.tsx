import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const OurWorks = () => {
  const projects = [
    {
      category: "E-commerce • Fashion",
      title: "Luxury Fashion Rebrand",
      description: "Complete social media overhaul for a luxury fashion brand, resulting in explosive growth and unprecedented engagement.",
      image: assets.work2,
      stats: [
        { number: "400%", label: "Engagement Growth" },
        { number: "250K", label: "New Followers" }
      ]
    },
    {
      category: "Tech • SaaS",
      title: "SaaS Product Launch",
      description: "Strategic launch campaign that positioned a new SaaS product as an industry leader and drove massive early adoption.",
      image: assets.work1,
      stats: [
        { number: "10K", label: "Month 1 Signups" },
        { number: "$2M", label: "Revenue Generated" }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-20 bg-gray-50" id="work">
      <div className="w-full mx-auto ">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-5 py-2 bg-orange-500/8 rounded-full mb-6">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
              Case Studies
            </span>
          </div>
          
          <h2 className="font-ovo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Recent projects that delivered results
          </h2>
          
          <p className="md:text-xl text-sm text-gray-600 leading-relaxed">
            See how we've helped brands across industries achieve remarkable growth through strategic social media.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid max-w-6xl mx-auto lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-300 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_100px_rgba(0,0,0,0.15)] hover:border-orange-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full md:h-100 h-80 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="md:p-10 p-7">
                {/* Category Badge */}
                <div className="inline-block px-3.5 py-1.5 bg-orange-500/8 rounded-full mb-4">
                  <span className="text-orange-500 text-[13px] font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 tracking-tight">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Stats */}
                <div className="flex gap-8 pt-6 border-t border-gray-200">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex-1">
                      <div className="font-ovo text-3xl font-semibold text-orange-500 leading-none mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWorks