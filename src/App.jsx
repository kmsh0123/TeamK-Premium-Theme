import React from 'react';
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';
import Paths from './routes/Paths';
import Shop from './components/Shop';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


const App = () => {
  return (
    <>
    <Navbar/>

    {/* <SecNavbar/> */}
    <Paths/>
    <Shop/>
    </>
   
  )
}

export default App