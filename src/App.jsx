import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Analytics from './pages/Analytics';

const App = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  )
}

export default App