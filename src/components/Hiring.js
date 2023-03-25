import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import JoinForm from "./JoinForm";

function Hiring() {
  return (
    <>
      <div className="ovevrflow-hidden">
        {" "}
        <div>
          <Header HIdeIcon={"d-none"} />
          <JoinForm />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Hiring;
