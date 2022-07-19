import React from 'react'
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function PreviewArea() {
  const markdownText = useSelector(state => state.previewer.markdownText);
  return (
    <div className='border-2 basis-1/2 bg-indigo-300 border-none rounded-lg overflow-y-auto'>
      <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]}/>
    </div>
  )
}

export default PreviewArea;