import React from 'react'

const Location = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-16 lg:px-20">
      <div className="w-full mx-auto ">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-5 py-2 bg-orange-500/8 rounded-full mb-6">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
              Location
            </span>
          </div>
          
          <h2 className="font-ovo text-5xl lg:text-6xl font-semibold tracking-tight">
            Visit our office
          </h2>
        </div>
      
   {/* google maps */}
    <div className="max-w-6xl mx-auto">
          <div className="w-full h-112.5 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Google Maps Embed */}
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.01254231359!2d3.281126809493276!3d6.529528755506534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1772323810885!5m2!1sen!2sng" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </div>


    </div>

    </section>
  )
}

export default Location
