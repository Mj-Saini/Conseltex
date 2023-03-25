import React from "react";
import { Container } from "react-bootstrap";
import hgk from "../assets/img/png/hgk.png";
import trust from "../assets/img/png/trust.png";
import labx from "../assets/img/png/labx.png";
import fibeka from "../assets/img/png/fibeka.png";
import kattan from "../assets/img/png/kattan.png";

function ConnectedWith() {
  return (
    <>
      <section className="py-md-5 py-4  mt-xl-5 overflow-hidden">
        <div className="d-flex justify-content-center pt-5">
          <p className="ms-sm-5 ps-sm-5 ps-5 ms-0 position-relative before_line ff_montserrat fw-normal text_primary fs_sm mb-0 d-inline-block me-5">
            Wir arbeiten mit den besten
          </p>
        </div>
        <div
          className="z_index3 overflow-auto"
          data-aos="zoom-in-left"
          data-aos-duration="3000"
        >
          {" "}
          <div className="d-flex justify-content-between mt-4 w_1370 ms-auto px-3 align-items-center">
            <span>
              <a href="#">
                <img src={hgk} alt="companies-connection" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src={trust} alt="companies-connection" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src={labx} alt="companies-connection" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src={fibeka} alt="companies-connection" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src={kattan} alt="companies-connection" />
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConnectedWith;
