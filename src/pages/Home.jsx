import React from 'react'
import Form from '../components/Form'
import Alert from '../components/Alert'
import Navbar from '../components/Navbar'



const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <div className="mt-28 flex flex-col justify-center items-center">
        <div>
        <h1 className='text-6xl mb-3 font-inter font-semibold'>Shorten <span className='text-[#570BE4]'>URLs</span>, Track clicks Easily.</h1>
        </div>
        <Form />
        <Alert />
    </div>
    </div>
  )
}

export default Home