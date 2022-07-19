import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { setMarkdownText } from '../../redux/previewerSlice';

function TextArea() {
  const dispatch = useDispatch();
  const markdownText = useSelector(state => state.previewer.markdownText);

  return (
    <textarea placeholder='Please write anything here...' className='border-2 basis-1/2 p-3 border-none rounded-lg' value={markdownText} onChange={(e) => dispatch(setMarkdownText(e.target.value))}/>  
  )
}

export default TextArea;