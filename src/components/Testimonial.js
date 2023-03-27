import React from "react";
import Header from "./Header";
import HeroTest from "./HeroTest";
import { Calendar } from "react-calendar";
import Kendenstimmen from "./Kendenstimmen";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Testimonial() {
  return (
    <>
      <div className="overflow-hidden">
        <Header HIdeIcon={"d-none"} />
        <HeroTest />
        <Kendenstimmen />
        <Footer />
      </div>
    </>
  );
}

export default Testimonial;
