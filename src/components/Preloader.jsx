import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Preloader() {
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      {" "}
      <section className="preloader">
        {" "}
        {loading ? (
          <div id="root">
            {" "}
            <div class="loader-wrapper">
              <div class="loader">
                <span></span>
              </div>
              <div class="loader">
                <span></span>
              </div>

              <div class="loader">
                <i></i>
              </div>
              <div class="loader">
                <i></i>
              </div>
            </div>{" "}
          </div>
        ) : (
          <></>
        )}{" "}
      </section>{" "}
    </>
  );
}
export default Preloader;
