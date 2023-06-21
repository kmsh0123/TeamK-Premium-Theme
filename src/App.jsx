import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SecNavbar from "./components/SecNavbar";
import Paths from "./routes/Paths";

import front3 from './img/front3.jpg'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div className="">      
      <Paths/>
    </div>
  );
};

export default App;
