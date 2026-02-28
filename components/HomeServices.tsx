import React from 'react';

type Services = {
    icon  : string,
    description : string,
    title : string,
    link : string
}

const HomeServices = () =>  {
  const services  = [
    {
      icon: "📱",
      title: "Social Media Management",
      description: "Full-service management across all major platforms. We handle content, engagement, and growth so you can focus on your business.",
      link: "#"
    },
    {
      icon: "✨",
      title: "Content Creation",
      description: "Stunning visuals, compelling copy, and engaging videos that stop the scroll and drive action.",
      link: "#"
    },
    {
      icon: "🎯",
      title: "Strategy & Consulting",
      description: "Data-driven strategies tailored to your goals. We analyze, plan, and execute for maximum ROI.",
      link: "#"
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description: "Detailed insights and transparent reporting. Track your growth and understand what's working.",
      link: "#"
    },
    {
      icon: "💬",
      title: "Community Management",
      description: "Build loyal communities around your brand. We engage, respond, and nurture your audience.",
      link: "#"
    },
    {
      icon: "🚀",
      title: "Growth Campaigns",
      description: "Targeted campaigns that drive followers, engagement, and conversions. Results you can measure.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-20 md:px-16 bg-white relative" id="services">
      <div className="w-full mx-auto ">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-5 py-2 bg-orange-500/8 rounded-full mb-6">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
              Our Services
            </span>
          </div>
          
          <h2 className="font-ovo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Everything you need to dominate social media
          </h2>
          
          <p className="md:text-xl text-sm text-gray-600 leading-relaxed">
            From strategy to execution, we provide end-to-end solutions that drive real results for your brand.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index)  => (
            <div 
              key={index}
              className="group relative bg-white border border-gray-300 rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] hover:border-orange-500 overflow-hidden"
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Icon */}
              <div className="w-16 h-16 bg-linear-to-br from-orange-500/10 to-orange-400/10 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-linear-to-br group-hover:from-orange-500 group-hover:to-orange-400">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="sm:text-2xl text-xl font-bold mb-4 tracking-tight">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 sm:text-base text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Link */}
              <a 
                href={service.link}
                className="inline-flex items-center gap-2 text-orange-500 font-semibold text-[15px] group-hover:gap-3 transition-all duration-300"
              >
                Learn More
                <span className="transition-transform duration-300">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default HomeServices