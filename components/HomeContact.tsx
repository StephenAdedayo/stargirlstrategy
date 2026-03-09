
import React from 'react';
import Form from './Form';
import { HiMail, HiPhone } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { HiMapPin } from 'react-icons/hi2';

const HomeContact = () =>  {
  
const contactMethods = [
  {
    icon: <HiMail />,
    title: "Email Us",
    subtitle: "info@stargirlstrategy.com",
    link: "mailto:info@stargirlstrategy.com"
  },
  {
    icon: <IoLogoWhatsapp  />,
    title: "WhatsApp",
    subtitle: "Chat with us instantly",
    link: "https://wa.me/2348068395142"
  },
  {
    icon: <HiPhone  />,
    title: "Call Us",
    subtitle: "+2348068395142",
    link: "tel:+2348068395142"
  },
  {
    icon: <HiMapPin  />,
    title: "Visit Us",
    subtitle: "Ikeja, Lagos",
    link: "/contact/#location"
  }
];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-20 bg-gray-900 text-white" id="contact">
      <div className="w-full mx-auto ">
        <div>
             <h2 className="font-ovo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight">
              Let's start your{' '}
              <span className="bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                success story
              </span>
            </h2>
            
            <p className="md:text-xl max-w-2xl text-sm text-white/80 leading-relaxed mb-12">
              Ready to transform your social media presence? Get in touch and let's discuss how we can help you achieve your goals.
            </p>
          </div>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          
          {/* Left Side - Info */}
          <div className='flex-[40%] w-full'>
           
            
            {/* Contact Methods */}
            <div className="space-y-4 w-full">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl w-full transition-all duration-300 hover:bg-white/8 text-wrap hover:border-orange-500 hover:translate-x-2 group"
                >
                  <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-orange-400 rounded-xl flex text-wrap items-center justify-center text-2xl shrink-0 ">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="md:text-lg text-base font-semibold mb-1">
                      {method.title}
                    </h4>
                    <span className="text-white/70 text-[15px]">
                      {method.subtitle}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl lg:p-12 px-6 py-10 flex-[60%] w-full">
              <Form input1={"w-full px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"}
              input2={"w-full   px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"}
              input3={"w-full px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"}
              input4={"w-full px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"}
              input5={"w-full px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"}
              textarea={"w-full px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"}
              />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HomeContact