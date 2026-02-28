"use client"

import React, { useState } from 'react';

const HomeContact = () =>  {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: "✉",
      title: "Email Us",
      subtitle: "hello@stargirlstrategy.com",
      link: "mailto:hello@stargirlstrategy.com"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      subtitle: "Chat with us instantly",
      link: "https://wa.me/1234567890"
    },
    {
      icon: "📞",
      title: "Call Us",
      subtitle: "+1 (234) 567-890",
      link: "tel:+1234567890"
    },
    {
      icon: "📍",
      title: "Visit Us",
      subtitle: "123 Market St, San Francisco",
      link: "#"
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
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Fields */}
              <div className="flex sm:flex-row flex-col w-full gap-5">
                <div className='w-full'>
                  <label className="block text-sm font-semibold mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full  px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>
                <div className='w-full'>
                  <label className="block text-sm font-semibold mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="w-full   px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>
              </div>
              
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                />
              </div>
              
              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-890"
                  className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                />
              </div>
              
              {/* Company */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                />
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and goals..."
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/12 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-orange-500 to-orange-400 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-primary-lg mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HomeContact