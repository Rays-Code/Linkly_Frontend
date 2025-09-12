import React, { useState } from 'react'
import getAnalytics from '../data/clicksData'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsCanvas = () => {

  const [shortURL, setShortURL] = useState("")
  const [clicksHistory, setclicksHistory] = useState([])

  const fetchAnaytics = async () => {
    const res = await getAnalytics(shortURL);
    setclicksHistory(res);
  }

  const currentMonth = new Date().getMonth();

  return (
    <div className=''>
        <div>
            <h1 className='text-5xl mb-5 font-inter font-semibold ml-14'>Track total <span className='text-[#570BE4]'>clicks</span> Instantly</h1>
            <p className='text-sm text-gray-600 mb-2 ml-24'>
             *enter your generated short link to know how many times it was clicked!
            </p>
            <input type="text" onChange={(e) => setShortURL(e.target.value)} placeholder='Paste short URL for analytics' className='border border-black py-2 pl-10 pr-60 ml-8 rounded-lg'/>
            <button onClick={fetchAnaytics} className='bg-black text-white text-md font-medium rounded-lg py-2 px-6 ml-2 active:scale-95 transition'>Fetch Analytics</button>
        </div>
        <Line 
        className='bg-white p-4 rounded-lg shadow-lg ml-4 mt-5'
        data = {{
          labels: clicksHistory.map(data => data.label),
          datasets: [
            {
              label: "No of Clicks Monthwise",
              data: clicksHistory.map(data => data.clicks),
              backgroundColor: '#570BE4',
              borderColor: '#570BE4'
            }
          ]
        }}
        />

        <div>
  {clicksHistory?.[currentMonth] ? (
    <h1 className='text-xl font-inter font-bold text-black mt-5 ml-[154px]'>
      Your link was clicked <span className='text-white bg-[#570BE4] rounded opacity-75 px-2'>{clicksHistory[currentMonth].clicks} times</span> in {clicksHistory[currentMonth].label}!
    </h1>
  ) : (
    null
  )}
</div>
    </div>
  )
}

export default AnalyticsCanvas