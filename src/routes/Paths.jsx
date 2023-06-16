import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Docs from '../pages/Docs'

const Paths = () => {
  return (
    <div>
        <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/docs' element={<Docs/>}/>
        </Routes>
    </div>
  )
}

export default Paths