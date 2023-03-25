import React from "react";
import { Container, Row } from "react-bootstrap";
import heroimg from "../assets/img/png/hero statue.png";
import arrow from "../assets/img/png/arrow.png";
import rightellips from "../assets/img/png/rightellips.png";
import leftellips from "../assets/img/png/elliosleft.png";
import cubesaleti from "../assets/img/png/cube2.png";
import tube from "../assets/img/png/tube.png";
import daimand from "../assets/img/png/diamand.png";

function Hero() {
  return (
    <>
      <section className=" text_primary position-relative">
        <img
          className="z_index0 position-absolute left_shadow"
          src={leftellips}
          alt="shodow"
        />
        <img
          className="z_index0 position-absolute right_shadow"
          src={rightellips}
          alt="shodow"
        />

        <img
          className="z_index0 position-absolute cube_gray"
          src={cubesaleti}
          alt="shodow"
        />
        <img
          className="z_index0 position-absolute daimand_gray"
          src={daimand}
          alt="shodow"
        />
        <img className=" position-absolute tube_posi" src={tube} alt="shodow" />
        <Container className="z_index3">
          <div className="row">
            <div
              className="col-md-11 mx-auto
            "
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <p className="ms-sm-5 ps-5 ms-0  position-relative before_line ff_montserrat fw-normal fs_sm mb-0 mt-md-5 mt-4">
                Wie Testosteron für deine Agentur
              </p>
              <h1 className="text_border ff_poiret fw-normal fs_4xl text-center text_primary">
                Wir verhelfen{" "}
                <span className="bg_red border_radius px-4 text_border">
                  {" "}
                  Agenturen
                </span>
              </h1>
              <h1 className="text_border ff_poiret fw-normal fs_4xl text-center text_primary translate-middle-y ps-sm-5 ms-3  pt-md-2 mt-4 mb-0">
                zu Rekordumsätzen
              </h1>
            </div>
          </div>

          <Row className="mt-5">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <article className="w-100 mt_150 z_index1 justify-content-end position-relative">
                {" "}
                <img
                  className="w-100 ms_40 z_index1 statue_img"
                  src={heroimg}
                  alt="statue-img"
                />
              </article>
            </div>
            <div className="col-md-6">
              <article
                className="ps-md-5 text-center text-md-start mt-4 mt-md-0"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <p>
                  Zünde die Wachstumsrakete und
                  <span className="d-lg-block">
                    katapultiere deinen Umsatz in eine neue
                  </span>
                  Dimension!
                </p>
                <span className="d-flex justify-content-center justify-content-md-start mb-4 mb-md-0">
                  {" "}
                  <span className="jetzt_btn py-2 px-3" href="#">
                    {" "}
                    <a
                      className="ff_poiret fw-normal fs_sm text_primary z_index text_stroke"
                      href="#"
                    >
                      Jetzt Erstgespräch vereinbaren
                    </a>
                    <img className="ps-3" src={arrow} alt="arrow" />
                  </span>
                </span>
              </article>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Hero;
