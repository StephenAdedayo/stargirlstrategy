import BelowHero from '@/components/BelowHero'
import Hero from '@/components/Hero'
import HomeContact from '@/components/HomeContact'
import HomeServices from '@/components/HomeServices'
import JoinTeam from '@/components/JoinTeam'
import OurWorks from '@/components/OurWorks'
import WhatOurClientsSays from '@/components/WhatOurClientsSays'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <BelowHero />
      <HomeServices />
      <OurWorks />
      <WhatOurClientsSays />
      <HomeContact />
      <JoinTeam />
    </div>
  )
}

export default Home
