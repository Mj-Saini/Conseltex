import React from "react";
import ConnectedWith from "./ConnectedWith";
import Header from "./Header";
import Hero from "./Hero";
import Liefern from "./Liefern";
import Team from "./Team";
import Testmonials from "./Testmonials";
import Weiter from "./Weiter";
import Video from "./Video";
import Faq from "./Faq";
import Fragen from "./Fragen";
import Footer from "./Footer";
import Conseltex from "./Conseltex";

function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="min_vh_100 hero_img_bg ">
          <Header />
          <Hero />
        </div>
        <ConnectedWith />
        <Conseltex />
        <Testmonials />
        <Team />
        <Liefern />
        <Weiter />
        <Video />
        <Faq />
        <Fragen />
        <Footer />
      </div>
    </>
  );
}

export default Home;
