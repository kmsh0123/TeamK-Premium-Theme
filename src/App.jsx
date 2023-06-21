import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paths from "./routes/Paths";

const App = () => {
  return (
    <>
      <Navbar />
      <Paths />
    </>
  );
};

export default App;
