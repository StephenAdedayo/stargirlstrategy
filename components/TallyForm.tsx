import React from 'react'

const TallyForm = ({formId} : {formId : any}) => {

    console.log(formId);
    

  return (
    <div className="w-full  min-h-125">
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Stargirl Strategy Inquiry"
        className="rounded-xl"
      ></iframe>
    </div>
  )
}

export default TallyForm
