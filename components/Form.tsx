"use client"

import React, { useState } from 'react'

type Input = {
    input1 :string,
    input2 :string,
    input3 :string,
    input4 :string,
    input5:string,
    textarea:string
}

const Form = ({input1, input2, input3, input4, input5, textarea} : Input) => {

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


  return (
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
                    className={input1}
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
                    className={input2}
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
                  className={input3}
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
                  placeholder="+234 234 567-890"
                  className={input4}
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
                  className={input5}
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
                  className={textarea}
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
  )
}

export default Form
