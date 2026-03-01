"use client"

import React, { useState } from 'react';

// Define the interface for form data
type QuoteFormData = {
  businessName: string;
  yourName: string;
  email: string;
  whatsapp: string;
  location: string;
  businessType: string;
  services: string[]; // Change from never[] to string[]
  timeline: string;
  adsSupport: string;
  budget: string;
  additionalInfo: string;
}



const QuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    businessName: '',
    yourName: '',
    email: '',
    whatsapp: '',
    location: '',
    businessType: '',
    services: [],
    timeline: '',
    adsSupport: '',
    budget: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value, type } = e.target;
  
  if (type === 'checkbox') {
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, value]
        : prev.services.filter(s => s !== value)
    }));
  } else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }
};


  

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const services = [
    { id: 'fb-starter', name: 'Facebook & Instagram – Starter', desc: '12 posts/month (3 posts/week)' },
    { id: 'fb-growth', name: 'Facebook & Instagram – Growth', desc: '24 posts/month (6 posts/week)' },
    { id: 'fb-scale', name: 'Facebook & Instagram – Scale', desc: '48 posts/month (2 posts/day)' },
    { id: 'threads-starter', name: 'Threads – Starter', desc: '24 posts/month (1 post + 5 comments/daily)' },
    { id: 'tiktok-starter', name: 'TikTok – Starter', desc: '12 videos/month (3 videos/week)' },
    { id: 'linkedin-starter', name: 'LinkedIn – Starter', desc: '12 posts/month (3 posts/week)' },
    { id: 'twitter-starter', name: 'X (Twitter) – Starter', desc: '20 tweets/month (5 tweets/week)' },
    { id: 'gmb-starter', name: 'Google My Business – Starter', desc: '8 posts/month (2 posts/week)' },
    { id: 'blog-starter', name: 'Blog Writing – Starter', desc: '4 articles/month (1 article/week)' },
    { id: 'email-starter', name: 'Email Marketing – Starter', desc: '4 campaigns/month (1 campaign/week)' }
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 md:px-16 lg:px-20 scroll-mt-20" id='quoteform'>
      <div className="max-w-4xl mx-auto ">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-orange-500/8 rounded-full mb-6">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
              Request Quote
            </span>
          </div>
          
          <h2 className="font-ovo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Let's build your strategy
          </h2>
          
          <p className="md:text-xl text-sm text-gray-600">
            Complete the form below and we'll prepare a custom proposal for your business
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}  className="bg-white border border-gray-200 rounded-3xl md:p-12 p-8 space-y-12">
          
          {/* Section 1: Basic Information */}
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold mb-6 pb-4 border-b-2 border-gray-200">
              <span className="w-8 h-8 bg-linear-to-br from-orange-500 to-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              Basic Information
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your Business Name"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Business Location (State/City) *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Lagos, Nigeria"
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Business Type *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {['Product-based', 'Service-based', 'NGO/Non-profit', 'Other'].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:bg-orange-500/5 hover:border-orange-500 has-checked:bg-orange-500/5 has-checked:border-orange-500"
                    >
                      <input
                        type="radio"
                        name="businessType"
                        value={type}
                        onChange={handleChange}
                        className="w-5 h-5 accent-orange-500"
                      />
                      <span className="font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Services Needed */}
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold mb-6 pb-4 border-b-2 border-gray-200">
              <span className="w-8 h-8 bg-linear-to-br from-orange-500 to-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              Services You Need
            </div>

            <div className="bg-orange-500/8 border-l-4 border-orange-500 p-4 rounded-lg mb-6">
              <p className="text-gray-600 text-sm">
                💡 You can select multiple options. We'll provide pricing for each in your personalized quote.
              </p>
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <label
                  key={service.id}
                  className="flex items-start gap-4 p-5 bg-gray-50 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:bg-orange-500/5 hover:border-orange-500 has-checked:bg-orange-500/5 has-checked:border-orange-500"
                >
                  <input
                    type="checkbox"
                    value={service.id}
                    onChange={handleChange}
                    className="w-5 h-5 accent-orange-500 mt-1"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">{service.name}</div>
                    <div className="text-gray-600 text-sm">{service.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Section 3: Timeline & Budget */}
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold mb-6 pb-4 border-b-2 border-gray-200">
              <span className="w-8 h-8 bg-linear-to-br from-orange-500 to-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              Timeline & Budget
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  When do you want to start? *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { value: 'immediately', label: 'Immediately' },
                    { value: '1-2weeks', label: 'Within 1–2 weeks' },
                    { value: 'thismonth', label: 'This month' },
                    { value: 'nextmonth', label: 'Next month' },
                    { value: 'researching', label: 'Just researching' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:bg-orange-500/5 hover:border-orange-500 has-checked:bg-orange-500/5 has-checked:border-orange-500"
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={option.value}
                        onChange={handleChange}
                        className="w-5 h-5 accent-orange-500"
                      />
                      <span className="font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Would you like sponsored ads support? *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:bg-orange-500/5 hover:border-orange-500 has-checked:bg-orange-500/5 has-checked:border-orange-500">
                    <input
                      type="radio"
                      name="adsSupport"
                      value="yes"
                      onChange={handleChange}
                      className="w-5 h-5 accent-orange-500"
                    />
                    <span className="font-medium">Yes, include ads management</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:bg-orange-500/5 hover:border-orange-500 has-checked:bg-orange-500/5 has-checked:border-orange-500">
                    <input
                      type="radio"
                      name="adsSupport"
                      value="no"
                      onChange={handleChange}
                      className="w-5 h-5 accent-orange-500"
                    />
                    <span className="font-medium">No, organic only</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Estimated Monthly Budget *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                >
                  <option value="">Select your budget range</option>
                  <option value="under-100k">Under ₦100,000</option>
                  <option value="100k-300k">₦100,000 - ₦300,000</option>
                  <option value="300k-500k">₦300,000 - ₦500,000</option>
                  <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                  <option value="over-1m">Over ₦1,000,000</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Additional Information */}
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold mb-6 pb-4 border-b-2 border-gray-200">
              <span className="w-8 h-8 bg-linear-to-br from-orange-500 to-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              Additional Information
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">
                Tell us more about your business and goals
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={6}
                placeholder="What does your business do? What are your main goals? Any specific challenges you're facing? What success looks like to you?"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-orange-500 to-orange-400 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-primary-lg"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default QuoteForm