import { assets } from '@/assets/assets'
import Cta from '@/components/Cta'
import Faq from '@/components/Faq'
import OurServices from '@/components/OurServices'
import Pricing from '@/components/Pricing'
import Process from '@/components/Process'
import ServiceHero from '@/components/ServiceHero'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className=''>
        
        <ServiceHero />
        <OurServices />
        <Process />
        <Pricing />
        <Faq />
        <Cta />

    </div>
  )
}

export default Services
