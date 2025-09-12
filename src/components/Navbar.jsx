import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white text-black rounded-xl w-[1100px] px-20 text-xl font-bold h-16 flex justify-between items-center shadow-xl mt-10'>

        <div className='text-3xl  font-bold'>Linkly</div>

        <div className='flex gap-10 mr-[370px]'>
            <NavLink to="/">
            <div className={`cursor-pointer font-semibold`}>Home</div>
            <hr className='border-b-2 w-6 rounded-2xl ml-4 mt-1 hidden' />
            </NavLink>
            <NavLink to="/analytics">
            <div className='cursor-pointer font-semibold'>Analytics</div>
            <hr className='border-b-2 w-8 rounded-2xl ml-6 mt-1 hidden' />
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar