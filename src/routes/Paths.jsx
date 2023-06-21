import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Shop from '../components/Shop'
import Navbar from '../components/Navbar'

const Paths = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/shop' element={<Shop/>}/>
        </Routes>
    </div>
  )
}

export default Paths