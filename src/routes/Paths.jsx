import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'

const Paths = () => {
  return (
    <div>
        <Routes>
            {/* <Route path='/' element={}/> */}
           <Route path='/' element={<HomePage/>}/>
        </Routes>
    </div>
  )
}

export default Paths