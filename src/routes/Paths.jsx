import React from "react";
import { Route, Routes } from "react-router";
import About from "../pages/About";
import Docs from "../pages/Docs";
import Contact from "../pages/Contact";
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
import Shop from '../components/Shop'

import Navbar from '../components/Navbar'


const Paths = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Paths;
      <Navbar/>
        <Routes>

           <Route path='/' element={<HomePage/>}/>

           <Route path='/shop' element={<Shop/>}/>
        </Routes>
    </div>
  )
}

export default Paths;
