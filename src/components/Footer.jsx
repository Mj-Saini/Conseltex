import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import logo from "../assets/img/png/logo.png";

function Footer() {
  return (
    <>
      <section className=" bg_dark_0e position-relative  pt-md-5 pt-4">
        <Container>
          <Row className=" flex-column-reverse flex-sm-row">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <article className="d-flex flex-column gap-sm-3 mt-sm-3 align-items-center align-items-sm-start">
                <span>
                  <a
                    className=" ff_poiret fw-normal fs_sm text_primary opacity_07"
                    href="#"
                  >
                    Home
                  </a>
                </span>

                <span>
                  <a
                    className=" ff_poiret fw-normal fs_sm text_primary opacity_07"
                    href="#"
                  >
                    Kundenrezensionen
                  </a>
                </span>

                <span>
                  <a
                    className=" ff_poiret fw-normal fs_sm text_primary opacity_07"
                    href="#"
                  >
                    We´re hiring!
                  </a>
                </span>
              </article>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <article className="px-4">
                <a className=" d-inline d-flex justify-content-center">
                  <img src={logo} alt="logo-footer" />
                </a>
                <p className="pt-4 ff_montserrat fw-normal fs_sm text_primary opacity_08 text-center">
                  Der Sparringspartner für die Skalierung deines Unternehmens.
                </p>
              </article>
            </div>
          </Row>
        </Container>
        <div className="footer_line mt-md-5 mt-4"></div>
        <p className="pt-3 ff_montserrat fw-normal fs_sm text_primary opacity_08 text-center">
          Impressum | Datenschutz | AGBS
        </p>
      </section>
    </>
  );
}

export default Footer;
