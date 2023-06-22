import React from 'react';
import './App.scss'
// import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';
import Paths from './routes/Paths';

import HomePage from './components/HomePage';


import Shop from './components/Shop';
import "./index.css";



const App = () => {
  return (
    <>

    {/* <Navbar/> */}
    

    <Navbar/>
     {/* <HomePage/> */}
    {/* <SecNavbar/> */}
    <Shop/>
    <Paths/>
    

    </>
   
  )
}

export default App