import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const App = () => {

  const slides = {
    
  }

  return (
    <>
      {/* <Navbar/> */}
      <About />
      <Routes>{/* <Route path='' element={}/> */}</Routes>
    </>
  );
};

export default App;
