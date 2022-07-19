import React from 'react';
import { useDispatch } from 'react-redux';
import { setButtonText } from '../../redux/previewerSlice';

function Header() {
  const dispatch = useDispatch();
  return (
    <div>
        <button className='bg-indigo-300 absolute top-2 right-2 h-10 w-10 rounded-full mb-10 
        hover:scale-75 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300'
        onClick={() => dispatch(setButtonText())}
        >?</button>
        <br />
        <h1 className='p-3 text-4xl'>Markdown Previewer</h1>
    </div>
  )
}

export default Header;