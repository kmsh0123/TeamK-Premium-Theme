import React from 'react';
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Paths from './routes/Paths';
import Footer from './components/footer';


const App = () => {
  return (
    <>
    <Navbar/>
    <div className=' tw-h-[1000px]'></div>
    <Paths/>
    <Footer/>
    </>
   
  )
}

export default App