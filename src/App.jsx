import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Analytics from './pages/Analytics';

const App = () => {
  return (
    <div className="bg-[url('/public/background.png')] h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  )
}

export default App