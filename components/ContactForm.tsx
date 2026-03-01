import React from 'react'
import Form from './Form';

const ContactForm = () => {
  
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
    <section className="py-24 px-6 md:px-16 lg:px-20 bg-gray-50" id="contact">
      <div className="w-full mx-auto ">
        <div className=''>
            <h2 className="font-ovo  text-5xl lg:text-6xl font-semibold mb-8 leading-tight">
              Start your{' '}
              <span className="bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                success story
              </span>
            </h2>
            
            <p className="md:text-xl max-w-2xl text-sm text-gray-600 leading-relaxed mb-12">
              Ready to transform your brand? Fill out the form and our team will get back to you within 24 hours with a personalized strategy.
            </p>
            </div>
<div className='flex flex-col lg:flex-row gap-16 items-start'>
 <div className="space-y-6 w-full flex-[40%]">
              {contactMethods.map((method, index) => (
                
                  <a key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-6 p-7 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:border-orange-500 hover:translate-x-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] group"
                >
                  <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      {method.title}
                    </h4>
                    <span className="text-gray-600">
                      {method.subtitle}
                    </span>
                  </div>
                </a>
              ))}
            </div>
   {/* Right Side - Form */}
          <div className="bg-white border border-gray-200 rounded-3xl lg:p-12 px-6 py-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex-[60%] w-full">
            {/* Form Header */}

            <div className="mb-10 sm:text-start text-center">
              <h3 className="text-3xl font-bold mb-2">
                Send us a message
              </h3>
              <p className="text-gray-600">
                We'll respond within 24 hours
              </p>
            </div>

            <Form 
            input1={"w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"}
            input2={"w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
}
            input3={"w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
}
            input4={"w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
}
            input5={"w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
}
            textarea={"w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"
}
            />
</div>

</div>

          </div>
          </section>
  )
}

export default ContactForm
