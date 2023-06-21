import React from 'react';
import './App.scss'
// import Navbar from './components/Navbar';
import Paths from './routes/Paths';
// import Shop from './components/Shop';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


const App = () => {
  return (
    <div className='tw-font-jost'>
     {/* <Shop/> */}
    <Paths/>
    </div>
   
  )
}

export default App