import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import location from "../assets/img/svg/location.svg";
import mail from "../assets/img/svg/mail.svg";
import nav_arrow from "../assets/img/png/arrow.png";
import tube from "../assets/img/png/tube.png";
import rightellips from "../assets/img/png/rightsh.png";
import arrow from "../assets/img/png/arrow.png";

function Fragen() {
  return (
    <>
      <section className="py-4 py-lg-5 overflow-hidden position-relative">
        <img
          className=" position-absolute tube_posi_left"
          src={tube}
          alt="shodow"
        />{" "}
        <img
          className="z_index0 position-absolute right_shadow_bottom"
          src={rightellips}
          alt="shodow"
        />{" "}
        <Container>
          <Row>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <article className="h-100 z_index1 d-flex align-items-center align-items-lg-start flex-column pb-3 mt-5">
                <div className="d-flex justify-content-center justify-content-lg-start ">
                  <p className="ps-5 ms-lg-0 position-relative before_line ff_montserrat fw-normal text_primary fs_sm mb-0 d-inline-block me-lg-5 ">
                    Noch Fragen?
                  </p>
                </div>
                <h2 className="text-center text-lg-start ff_poiret fw-normal fs_2xl text_primary z_index3 text_border">
                  Jetzt Erstgespräch vereinbaren
                </h2>
                <p className="text-center text-lg-start ff_montserrat fw-normal fs_sm text_primary opacity_08">
                  Fülle das Formular aus und ein Experte aus{" "}
                  <span className=" d-lg-block">
                    unserem Team wird sich zum ausgewählten{" "}
                  </span>{" "}
                  Zeitfenster bei dir melden.
                </p>
                <div className="d-flex justify-content-center w-100 pe-5 mt-5">
                  {" "}
                  <div className="border_line me-5"></div>
                </div>

                <article className="d-flex flex-column gap-3 ps-4 mt-2 pt-4">
                  <a className="d-flex" href="#">
                    <img src={location} alt="Address" />
                    <a
                      className="ps-3 d-inline-block ff_montserrat fw-normal fs_sm text_primary"
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
                </article>
              </article>
            </div>
            <div
              className="col-lg-6 px-sm-4 py-4"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="calculetor_formating z_index1 px-sm-5 px-3 py-4">
                <article
                  className="d-flex justify-content-between align-items-center"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <span>
                    <a href="#">
                      {" "}
                      <img className="rotation" src={arrow} alt="imggggg" />
                    </a>
                  </span>
                  <span className=" ff_montserrat fw-semibold fs_sm text_primary mb-0">
                    October
                  </span>
                  <span>
                    {" "}
                    <a href="#">
                      {" "}
                      <img src={arrow} alt="imggggg" />
                    </a>
                  </span>
                </article>
                <article
                  className="d-flex justify-content-between align-items-center mt-4 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <span className=" ff_montserrat fw-semibold fs_sm text_primary mb-0">
                    Sun
                  </span>
                  <span className=" ff_montserrat fw-semibold fs_sm text_primary mb-0 ">
                    Mon
                  </span>
                  <span className=" ff_montserrat fw-semibold fs_sm text_primary mb-0 pe-2">
                    Tue
                  </span>
                  <span className=" ff_montserrat fw-semibold fs_sm text_primary mb-0 pe-2">
                    Wed
                  </span>
                  <span className=" ff_montserrat fw-semibold fs_sm text_primary mb-0 pe-3">
                    Thu
                  </span>
                  <span className=" ff_montserrat fw-semibold fs_sm text_primary mb-0 pe-2">
                    Fri
                  </span>
                  <span className=" ff_montserrat fw-semibold fs_sm text_primary mb-0">
                    Sat
                  </span>
                </article>
                <article
                  className="d-flex justify-content-between align-items-center mt-3 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date opacity_03"
                      href="#"
                    >
                      {" "}
                      25
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date opacity_03"
                      href="#"
                    >
                      26
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date opacity_03"
                      href="#"
                    >
                      27
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date opacity_03"
                      href="#"
                    >
                      28
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date opacity_03"
                      href="#"
                    >
                      29
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date opacity_03"
                      href="#"
                    >
                      30
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date calender_date"
                      href="#"
                    >
                      {" "}
                      01
                    </a>
                  </span>
                </article>
                <article
                  className="d-flex justify-content-between align-items-center mt-3 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      {" "}
                      02
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      {" "}
                      03
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      04
                    </a>{" "}
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      05
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      06
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      07
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      08
                    </a>
                  </span>
                </article>
                <article
                  className="d-flex justify-content-between align-items-center mt-3 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      09
                    </a>
                  </span>
                  <span className="">
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      10
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      11
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      12
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      13
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      14
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      15
                    </a>
                  </span>
                </article>
                <article
                  className="d-flex justify-content-between align-items-center mt-3 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      16
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      17
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      18
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      19
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      20
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      21
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      22
                    </a>
                  </span>
                </article>
                <article
                  className="d-flex justify-content-between align-items-center mt-3 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      23
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      24
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      25
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      26
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      27{" "}
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      28
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      29
                    </a>
                  </span>
                </article>
                <article
                  className="d-flex justify-content-between align-items-center mt-3 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      30
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary calender_date"
                      href="#"
                    >
                      31
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary opacity_03 calender_date"
                      href="#"
                    >
                      01
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary opacity_03 calender_date"
                      href="#"
                    >
                      02
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary opacity_03 calender_date"
                      href="#"
                    >
                      03
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary opacity_03 calender_date"
                      href="#"
                    >
                      04
                    </a>
                  </span>
                  <span>
                    <a
                      className="text-center ff_montserrat fw-semibold fs_sm text_primary opacity_03 calender_date"
                      href="#"
                    >
                      05
                    </a>
                  </span>
                </article>
                <article className="mt-5">
                  <h2 className=" ff_montserrat fw-normal fs_sm text_primary text-center mb-0">
                    {" "}
                    Timings
                  </h2>
                </article>
                <article className="d-flex justify-content-between mt-2 pt-1">
                  <span className="ff_montserrat fw-normal fs_sm text_primary text-center timing_btn  py-3 cursor_pointer">
                    01.00 PM-02.00 PM
                  </span>
                  <span className=" ff_montserrat fw-normal fs_sm text_primary text-center timing_btn  py-3 cursor_pointer">
                    03.00 PM-04.00 PM
                  </span>
                </article>
                <article className="d-flex justify-content-between mt-3">
                  <span className="ff_montserrat fw-normal fs_sm text_primary text-center timing_btn cursor_pointer py-3">
                    06.00 PM-08.00 PM
                  </span>
                </article>
                <span className="d-flex justify-content-center mt-4 pt-2">
                  {" "}
                  <span className="jetzt_btn py-2 px-3" href="#">
                    {" "}
                    <a
                      className="ff_poiret fw-normal fs_sm text_primary z_index text_stroke"
                      href="#"
                    >
                      Submit
                    </a>
                    <img className="ps-5 ms-5" src={nav_arrow} alt="arrow" />
                  </span>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Fragen;
