import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import arrow from "../assets/img/png/arrow.png";
import location from "../assets/img/svg/location.svg";
import mail from "../assets/img/svg/mail.svg";
import rightellips from "../assets/img/png/rightellips.png";
import tube from "../assets/img/png/tube1.png";
import cubered from "../assets/img/png/cube.png";
import leftellips from "../assets/img/png/elliosleft.png";
import { Link } from "react-router-dom";

function JoinForm() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <section className="min_vh_100 pb-md-5 hero_img_bg overflow-hidden position-relative">
      <img
        className="z_index0 position-absolute left_shadow_test"
        src={leftellips}
        alt="shodow"
      />
      <img
        className="z_index0 position-absolute right_shadow_test"
        src={rightellips}
        alt="shodow"
      />
      <img
        className=" position-absolute tube_posi_right_form"
        src={tube}
        alt="shodow"
      />{" "}
      <img
        className="z_index0 position-absolute cube_red_form"
        src={cubered}
        alt="shodow"
      />
      <Container className=" d-flex align-items-center flex-column justify-content-center pb-5 ">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          data-aos-delay="500"
          className="d-flex justify-content-center pt-5 mt-3 z_index1"
        >
          <p
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            data-aos-delay="500"
            className="ps-5 ms-lg-0 position-relative before_line ff_montserrat fw-normal text_primary fs_sm mb-0 d-inline-block  "
          >
            Initiativbewerbung | Consaltex
          </p>
        </div>
        <h2
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          data-aos-delay="500"
          className="ff_poiret text_border fw-normal fs_2xl text_primary text-center z_index3"
        >
          Werde ein Teil unserer{" "}
          <span className="d-block z_index1">Erfolgsgeschichte</span>
        </h2>
        <Row className="mt-5 z_index1 justify-content-around">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            data-aos-delay="500"
            className="col-md-5 "
          >
            <article className="d-flex flex-column justify-content-between h-100 py-4">
              <p className="px-md-3 ff_montserrat fw-normal fs_sm text_primary opacity_08s pt-md-3">
                Wir suchen nach Menschen, die wissen, was sie wollen, wohin sie
                wollen und die ein klares Warum haben.
              </p>
              <article className="d-flex flex-column mt-2 mb-md-5 mb-4 pb-md-5 px-md-3">
                <a
                  className="d-flex"
                  target="_blank"
                  href="https://www.google.com/maps/search/location+link+of+hisar/@29.1561181,75.6154536,11z/data=!3m1!4b1"
                >
                  <img src={location} alt="Address" />
                  <a
                    className="ps-3 d-inline-block ff_montserrat fw-normal fs_sm text_primary pb-3"
                    href="#"
                  >
                    22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                  </a>
                </a>
                <a href="#">
                  <img src={mail} alt="Address" />
                  <a
                    className="ps-3 ff_montserrat fw-normal fs_sm text_primary"
                    href="#"
                  >
                    info@consaltex.de
                  </a>
                </a>
              </article>{" "}
            </article>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            data-aos-delay="500"
            className="col-md-5"
          >
            <form className="form_bg" action="">
              <label
                className="w-100 bg-transparent ff_montserrat fw-semibold fs_sm text_primary"
                htmlFor=""
              >
                Vor- und Nachname
              </label>
              <input
                className="w-100 bg_dark_17 mt-2 border-0 ps-3 text_primary"
                required
                type="text"
              />
              <label
                className="w-100 bg-transparent ff_montserrat fw-semibold fs_sm text_primary mt-3 pt-1"
                htmlFor=""
              >
                Vor- und Nachname
              </label>
              <input
                required
                className="w-100 bg_dark_17 mt-2 border-0 ps-3 text_primary"
                type="text"
                placeholder="example@mail.com "
              />
              <label
                className="w-100 bg-transparent ff_montserrat fw-semibold fs_sm text_primary mt-3 pt-1 "
                htmlFor=""
              >
                Erzähl uns von dir
              </label>
              <textarea
                required
                className="w-100 bg_dark_17  ff_montserrat fw-semibold fs_sm text_primary mt-3 pt-1 "
                name=""
                id=""
                rows="6"
              ></textarea>
              <span className="d-flex justify-content-center mt-4 pt-2">
                {" "}
                <span className="jetzt_btn py-2 px-3" href="#">
                  {" "}
                  <a
                    className="ff_poiret fw-normal fs_sm text_primary z_index text_stroke"
                    href="#"
                  >
                    Absenden
                  </a>
                  <img className="ps-5 ms-5" src={arrow} alt="arrow" />
                </span>
              </span>
            </form>
          </div>
        </Row>{" "}
      </Container>
    </section>
  );
}

export default JoinForm;
