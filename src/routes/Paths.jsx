import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Shop from '../components/Shop'

const Paths = () => {
  return (
    <div>
        <Routes>
           {/* <Route path='/' element={<HomePage/>}/> */}
           <Route path='/shop' element={<Shop/>}/>
        </Routes>
    </div>
  )
}

export default Paths