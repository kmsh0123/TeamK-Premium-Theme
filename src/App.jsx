import React from 'react';
import './App.scss'
// import Navbar from './components/Navbar';
import Paths from './routes/Paths';
// import Shop from './components/Shop';
// import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';
import Paths from './routes/Paths';

import HomePage from './components/HomePage';


import Shop from './components/Shop';
import "./index.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";



const App = () => {
  return (
    <div className='tw-font-jost'>
     {/* <Shop/> */}
    <Paths/>
    </div>
    <>

    {/* <Navbar/> */}
    

    <Navbar/>
     <HomePage/>
    {/* <SecNavbar/> */}
    <Paths/>
    <Shop/>

    </>
   
  )
}

export default App