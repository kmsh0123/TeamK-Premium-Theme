import React from "react";
import { Route, Routes } from "react-router";
import About from "../pages/About";
import Docs from "../pages/Docs";
import Contact from "../pages/Contact";

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
