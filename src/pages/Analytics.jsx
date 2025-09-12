import React from 'react'
import AnalyticsCanvas from '../components/AnalyticsCanvas'
import Navbar from '../components/Navbar'

const Analytics = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />

      <div className=' mt-20 flex flex-col justify-center items-center'>
        <div>
            {/* <div>
                <p className='text-sm text-gray-400 mb-3 ml-6'>*enter your generated short link to know how many times it was clicked!</p>
            </div> */}
            <AnalyticsCanvas />
        </div>   
    </div>
    </div>
  )
}

export default Analytics