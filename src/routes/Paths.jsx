import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Shipping from '../pages/Shipping'
import Home from '../Home'
import Faq from '../pages/Faq'

const Paths = () => {
  return (
  <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/shipping'} element={<Shipping/>}/>
    <Route path={'/faq'} element={<Faq/>}/>

  </Routes>
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