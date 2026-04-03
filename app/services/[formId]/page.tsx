"use client"

import TallyForm from '@/components/TallyForm'
import { useParams } from 'next/navigation'
import React from 'react'

const SingleServiceForm = () => {

    const {formId} = useParams()

  return (
    <div className='mb-20'>
      <TallyForm formId={formId}/>
    </div>
  )
}

export default SingleServiceForm
