import React from 'react';
import './App.scss'
import Navbar from './components/Navbar';
// import Shop from './components/Shop';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import SecNavbar from './components/SecNavbar';
import Paths from './routes/Paths';


const App = () => {
  return (
    <div className='tw-font-jost'>
      
     {/* <Shop/> */}
    <Paths/>
    </div>

  )
}

export default App;