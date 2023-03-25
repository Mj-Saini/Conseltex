import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Hiring from "./components/Hiring";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import Backtotop from "./components/Backtotop.jsx";
import Preloader from "./components/Preloader";
function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div>
        <Preloader />
        <Backtotop />
        <Routes>
          {" "}
          <Route path="/" element={<Home />}></Route>
          <Route path="/kunden" element={<Testimonial />}></Route>{" "}
          <Route path="/hiring" element={<Hiring />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
