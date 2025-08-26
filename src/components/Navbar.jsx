import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-400 text-white text-xl font-bold w-full h-20 flex justify-evenly items-center gap-20 shadow'>

        <div className='text-3xl mr-[380px] font-bold'>Linkly</div>

        <div className='flex gap-10 mr-[615px]'>
            <NavLink to="/">
            <div className={`cursor-pointer font-semibold`}>Home</div>
            <hr className='border-b-2 w-8 rounded-lg ml-3 mt-1 hidden' />
            </NavLink>
            <NavLink to="/analytics">
            <div className='cursor-pointer font-semibold'>Analytics</div>
            <hr className='border-b-2 w-10 rounded-lg ml-6 mt-1 hidden' />
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar