import Availability from '@/components/Availability'
import ContactForm from '@/components/ContactForm'
import ContactHero from '@/components/ContactHero'
import Cta from '@/components/Cta'
import Location from '@/components/Location'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <Availability />
      <Location />
      <Cta />
    </div>
  )
}

export default Contact
