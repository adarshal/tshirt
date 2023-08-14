import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
      placeholder="Ask DallE to create img"
      rows={5}
      value={prompt}
      onChange={(e)=>{
        setPrompt(e.target.value)
      }}
      className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ?
        (<CustomButton
          type="outline"
          title="Travelling to painter"
          customStyle="text-xs"
          />
          ):
          <>
          <CustomButton
           type="outline"
           title="AI logo Image"
           handleClick={()=>handleSubmit('logo')}
           customStyle="text-xs"
           />
          <CustomButton
           type="filled"
           title="AI Full"
           handleClick={()=>handleSubmit('full')}
           customStyle="text-xs"
           />
          </>
  }
      </div>
    </div>

  )
}

export default AIPicker
