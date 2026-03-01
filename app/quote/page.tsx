import Cta from '@/components/Cta'
import Pricing from '@/components/Pricing'
import QuoteForm from '@/components/QuoteForm'
import QuoteHero from '@/components/QuoteHero'
import { Metadata } from 'next'
import React from 'react'


export const metadata:Metadata = {
    title : "Qoute",
    description : "Get your quote"
}

const Qoute = () => {
  return (
    <div>
      <QuoteHero/>
      <QuoteForm />
      <Pricing />
      <Cta href="#quoteform" text="Request a Quote" />
    </div>
  )
}

export default Qoute
