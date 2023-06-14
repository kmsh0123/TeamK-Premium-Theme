import React from 'react';
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        {/* <Route path='' element={}/> */}
    </Routes> 
    </>
   
  )
}

export default App