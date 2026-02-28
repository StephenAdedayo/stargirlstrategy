import React from 'react'

const BelowHero = () => {
  return (
    <div className='bg-nav px-6 md:px-16 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20'>

        <div className='flex flex-col gap-5 items-center justify-center'>
            <h4 className='text-5xl text-navtext'>60+</h4>
            <p className='text-sm md:text-base text-white/80'>Brands Transformed</p>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center'>
            <h4 className='text-5xl text-navtext'>3M+</h4>
            <p className='text-sm md:text-base text-white/80'>Audience Reach</p>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center'>
            <h4 className='text-5xl text-navtext'>500+</h4>
            <p className='text-sm md:text-base text-white/80'>Campaigns Launched</p>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center'>
            <h4 className='text-5xl text-navtext'>15+</h4>
            <p className='text-sm md:text-base text-white/80'>Industry Awards
</p>
        </div>
         
    </div>
  )
}

export default BelowHero
