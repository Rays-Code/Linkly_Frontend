import React from 'react'
import AnalyticsCanvas from '../components/AnalyticsCanvas'

const Analytics = () => {
  return (
    <div className='w-screen h-full mt-20 flex flex-col justify-center items-center'>
        <div>
            <div>
               <h1 className='text-2xl ml-32 font-bold mb-1'>URL Analytics Service :</h1>
            </div>
            <div>
                <p className='text-sm text-gray-400 mb-3 ml-6'>*enter your generated short link to know how many times it was clicked!</p>
            </div>
            <AnalyticsCanvas />
        </div>   
    </div>
  )
}

export default Analytics