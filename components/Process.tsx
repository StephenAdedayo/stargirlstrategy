import React from 'react'

const Process = () => {

    const processList = [
        {
            number : "1",
            title : "Discovery",
            description : "We dive deep into your brand, goals, and audience to understand what makes you unique."

        },

        {
            number : "2",
            title : "Strategy",
            description : "We develop a customized roadmap with clear objectives and measurable success metrics."

        },

        {
            number : "3",
            title : "Creation",
            description : "Our team produces high-quality content that aligns perfectly with your strategy."

        },

        {
            number : "4",
            title : "Optimize",
            description : "We continuously monitor, analyze, and refine to maximize your results."

        }
    ]

  return (
    <section className="py-24 px-6 lg:px-20 md:px-16 bg-nav relative" id="services">
      <div className="w-full mx-auto ">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-5 py-2 bg-orange-500/8 rounded-full mb-6">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
              Our Process
            </span>
          </div>
          
          <h2 className="font-ovo text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            How we work with you
          </h2>
    </div>


{/* process lists */}
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {processList.map((process, index) => (
               
               <div key={index} className='flex flex-col gap-3 justify-center items-center text-center bg-white/5 rounded-3xl p-10 border border-white/10 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-primary hover:bg-white/10'>
                     
                     <div className='h-14 w-14 text-3xl flex justify-center items-center rounded-full text-white bg-linear-to-br from-orange-500 to-orange-400 font-ovo'>
                        {process.number}
                     </div>


                   <h4 className='font-semibold text-lg text-white'>{process.title}</h4>
                   <p className='md:text-[15px] text-sm text-white/70'>{process.description}</p>


               </div>

            ))}
        </div>



    </div>
    </section>
  )
}

export default Process
