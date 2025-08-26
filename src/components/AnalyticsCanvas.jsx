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
            <label className='text-xl'>URL</label>
            <input type="text" onChange={(e) => setShortURL(e.target.value)} placeholder='Paste short URL for analytics' className='border border-black py-1 pl-2 pr-40 ml-2 rounded'/>
            <button onClick={fetchAnaytics} className='border shadow-md bg-blue-400 text-white font-bold rounded py-1 px-2 ml-2 active:scale-95 transition'>Fetch Analytics</button>
        </div>
        <Line 
        className='mt-10'
        data = {{
          labels: clicksHistory.map(data => data.label),
          datasets: [
            {
              label: "-----No of Clicks Monthwise-----",
              data: clicksHistory.map(data => data.clicks),
              backgroundColor: '#3B82F6',
              borderColor: '#3B82F6'
            }
          ]
        }}
        />

        <div>
  {clicksHistory?.[currentMonth] ? (
    <h1 className='text-xl font-bold mt-10 ml-[90px]'>
      Your link was clicked {clicksHistory[currentMonth].clicks} times in {clicksHistory[currentMonth].label}!
    </h1>
  ) : (
    null
  )}
</div>
    </div>
  )
}

export default AnalyticsCanvas