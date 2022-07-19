import React from 'react'
import PreviewArea from '../PreviewArea'
import TextArea from '../TextArea'

function index() {
  return (
    <div className='flex flex-row h-96 px-10 py-2 gap-4'> 
        <TextArea />
        <PreviewArea />
    </div>
  )
}

export default index;