import React from 'react';

const Availability = () => {

  const businessHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const supportHours = [
    { day: "Email Support", time: "24/7" },
    { day: "Live Chat", time: "Mon-Fri, 9AM-6PM" },
    { day: "Phone Support", time: "Mon-Fri, 9AM-6PM" }
  ];

  return (
    <section className="py-24 bg-white px-6 md:px-16 lg:px-20">
      <div className="w-full mx-auto ">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-5 py-2 bg-orange-500/8 rounded-full mb-6">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
              Availability
            </span>
          </div>
          
          <h2 className="font-ovo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            When we're here for you
          </h2>
        </div>
        
        {/* Office Hours Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Business Hours Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl lg:p-12 p-9">
            <h3 className="text-2xl font-bold mb-8 text-orange-500">
              Business Hours
            </h3>
            <ul className="space-y-0">
              {businessHours.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0"
                >
                  <span className="text-gray-600">{item.day}</span>
                  <span className="font-semibold text-black">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Hours Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl lg:p-12 p-9">
            <h3 className="text-2xl font-bold mb-8 text-orange-500">
              Support Hours
            </h3>
            <ul className="space-y-0">
              {supportHours.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0"
                >
                  <span className="text-gray-600">{item.day}</span>
                  <span className="font-semibold text-black">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default  Availability