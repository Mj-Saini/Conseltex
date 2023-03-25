import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import VideoData from "./VideoData";
import rightellips from "../assets/img/png/rightsh.png";
import arrow from "../assets/img/png/arrow.png";

function Team() {
  return (
    <>
      <section className="py-4 py-lg-5 position-relative">
        <img
          className="z_index0 position-absolute right_shadow"
          src={rightellips}
          alt="shodow"
        />{" "}
        <Container>
          <div className="d-flex justify-content-center z_index1 pt-lg-5 mt-lg-5">
            <p className="ps-5 ms-lg-0 position-relative before_line ff_montserrat fw-normal text_primary fs_sm mb-0 d-inline-block  ">
              Videos
            </p>
          </div>
          <h2 className="ms-lg-5 ff_poiret fw-normal fs_4xl text_primary text-center mb-0 z_index1">
            Aktuelle Themen
          </h2>
          <Row className="d-md-flex d-none mt-4">
            {VideoData.map((key) => {
              return (
                <div
                  className="col-md-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <article className="bg_green_16 icon_scale   h-100 d-flex flex-column justify-content-between z_index1 posi tion-relative">
                    <article className=" ">
                      <img className="w-100" src={key.img} alt="team" />

                      <p className="px-3 pt-4 mb-0 ff_montserrat fw-normal fs_sm text_primary opacity_08">
                        <em>{key.date}</em>
                      </p>
                      <h3 className="ff_montserrat fw-semibold fs_md text_primary mb-0 pt-2 px-3">
                        {key.name}
                      </h3>
                    </article>
                    <article className="">
                      <a
                        href="#"
                        className="d-inline-block ff_montserrat fw-semibold fs_sm my-4 px-3 text_secondary"
                      >
                        {key.about}
                      </a>
                    </article>
                  </article>
                </div>
              );
            })}
          </Row>
          <Carousel className="d-md-none mt-4 mt-md-0">
            {VideoData.map((key) => {
              return (
                <Carousel.Item>
                  <article className="bg_green_16 h_350 d-flex flex-column justify-content-between z_index1">
                    <article className="">
                      <img className="w-100" src={key.img} alt="team" />

                      <p className="px-3 pt-4 mb-0 ff_montserrat fw-normal fs_sm text_primary opacity_08">
                        <i>{key.date}</i>
                      </p>
                      <h3 className="ff_montserrat fw-semibold fs_md text_primary mb-0 pt-2 px-3">
                        {key.name}
                      </h3>
                    </article>
                    <article className="">
                      <a
                        href="#"
                        className="d-inline-block ff_montserrat fw-semibold fs_sm my-4 px-3 text_secondary"
                      >
                        {key.about}
                      </a>
                    </article>
                  </article>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <span className="d-flex justify-content-center mt-5 pt-2">
            <span className="jetzt_btn py-2 px-3" href="#">
              <a
                className="ff_poiret fw-normal fs_sm text_primary z_index text_stroke"
                href="#"
              >
                Mehr ansehen
              </a>
              <img className="ps-3" src={arrow} alt="arrow" />
            </span>
          </span>
        </Container>
      </section>
    </>
  );
}

export default Team;
