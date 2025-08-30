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
        setShortURL(res.data.shortURL.slice(12, 28));
    }

  return (
    <div>
        <div>
            <label className='text-xl'>URL</label>
            <input type="text" onChange={(e) => setLongURL(e.target.value)} placeholder='Paste URL to shorten' className='border border-black py-1 pl-2 pr-40 ml-2 rounded'/>
            <button className='border shadow-md bg-blue-400 text-white font-bold rounded py-1 px-2 ml-2 active:scale-95 transition' onClick={shortenURL}>Shorten</button>
        </div>

        <Canvas longURL={longURL} shortURL={shortURL}/>
        
    </div>
  )
}

export default Form