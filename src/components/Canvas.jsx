import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Canvas = ({longURL, shortURL}) => {

  const [copytext, setCopytext] = useState("Copy")

  const copyShortURL = () => {
    navigator.clipboard.writeText(shortURL)
    setCopytext("Copied!")
    toast.success("Copied to clipboard");
  }

  return (
    <div className='bg-gray-200 rounded-lg border mt-5 min-h-32 max-h-full min-w-lg max-w-lg break-words '>
      <ToastContainer />
        <div className='m-6'>{longURL}</div>
        <div className='flex gap-5'>
          <div className='m-6'>{shortURL}</div>
          {
            shortURL && (
           <button onClick={copyShortURL} className="bg-white font-bold border border-4 shadow border-gray-500 hover:bg-blue-300 hover:text-white  active:scale-95 transition rounded-xl mt-4 h-11 px-10">{copytext}</button>         
            )
          }
        </div>
    </div>
  )
}

export default Canvas