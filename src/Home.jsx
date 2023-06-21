import React from 'react'
import SecNavbar from './components/SecNavbar'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
   <div>
     <Navbar/>
    <SecNavbar/>
   </div>  
  )
}

export default Home