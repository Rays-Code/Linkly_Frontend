import React, { useState } from 'react'

const Canvas = ({longURL, shortURL}) => {

  const [copytext, setCopytext] = useState("Copy")

  const copyShortURL = () => {
    navigator.clipboard.writeText(shortURL)
    setCopytext("Copied!")
  }

  return (
    <div className='bg-white rounded-lg border mt-5 min-h-36 max-h-full min-w-3xl max-w-3xl break-words ml-2'>
        <div className='m-6'>{longURL}</div>
        <div className='flex gap-5'>
          <div className='m-6'>{shortURL}</div>
          {
            shortURL && (
           <button onClick={copyShortURL} className="bg-white font-bold border border-2 shadow border-gray-400 hover:bg-[#7639E9] hover:text-white  active:scale-95 transition rounded-lg mt-4 h-10 px-8">{copytext}</button>         
            )
          }
        </div>
    </div>
  )
}

export default Canvas