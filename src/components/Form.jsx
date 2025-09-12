import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Canvas from './Canvas';

const Form = () => {
    const [longURL, setLongURL] = useState("")
    const [shortURL, setShortURL] = useState("")

    const shortenURL = async () => {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/shorten`, {
            longURL: longURL
        })
        setShortURL(res.data.shortURL.slice(12, 29));
    }

  return (
    <div className='mt-6'>
        <div>
            <input type="text" onChange={(e) => setLongURL(e.target.value)} placeholder='Paste URL to shorten' className='border border-black py-2 pl-10 pr-80 ml-2 rounded-lg'/>
            <button className='bg-black text-white text-md font-medium rounded-lg py-2 px-6 ml-2 active:scale-95 transition' onClick={shortenURL}>Shorten</button>
        </div>

        <Canvas longURL={longURL} shortURL={shortURL}/>
        
    </div>
  )
}

export default Form