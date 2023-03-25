import React from "react";
import { Container, Row } from "react-bootstrap";
import daimand from "../assets/img/png/green daimand.png";
import rightellips from "../assets/img/png/rightsh.png";
import leftellips from "../assets/img/png/elliosleft.png";
import TeamData from "./TeamData";
import Carousel from "react-bootstrap/Carousel";

function Team() {
  return (
    <>
      <section className=" py-lg-5 mt-lg-5 position-relative">
        <img
          className="z_index0 d-none d-sm-flex position-absolute daimand_gray_left"
          src={daimand}
          alt="shodow"
        />
        <img
          className="z_index0 position-absolute right_shadow"
          src={rightellips}
          alt="shodow"
        />{" "}
        <img
          className="z_index0 position-absolute left_shadow1"
          src={leftellips}
          alt="shodow"
        />
        <Container>
          <div className="d-flex justify-content-center pt-lg-5">
            <p className="ps-5 ms-lg-0 position-relative before_line ff_montserrat fw-normal text_primary fs_sm mb-0 d-inline-block  ">
              Consaltex
            </p>
          </div>
          <h2 className="ms-5 ff_poiret text_border fw-normal fs_2xl text_primary text-center">
            Unser Team
          </h2>
          <Row className="mt-5 d-none d-md-flex">
            {TeamData.map((key) => {
              return (
                <div
                  className="col-md-4 px-2"
                  div
                  data-aos="flip-up"
                  data-aos-duration="3000"
                >
                  <article className="team_scale bg_green_16 h-100 z_index1">
                    <img className="w-100" src={key.img} alt="team" />
                    <article className="d-flex justify-content-between align-items-center pb-3 mt-4">
                      <h2 className=" ff_montserrat fw-semibold fs_lg text_primary ps-3 mb-0">
                        {key.name}
                        <span className="d-block ff_montserrat fw-semibold fs_sm mt-2">
                          {key.profession}
                        </span>
                      </h2>
                      <img
                        className="pe-4 cursor_pointer"
                        src={key.img2}
                        alt="in"
                      />
                    </article>
                  </article>
                </div>
              );
            })}
          </Row>{" "}
          <Carousel className="d-md-none mt-4 mt-md-0">
            {TeamData.map((key) => {
              return (
                <Carousel.Item>
                  <article className=" bg_green_16 h-100 z_index1">
                    <img className="w-100" src={key.img} alt="team" />
                    <article className="d-flex justify-content-between align-items-center pb-3 mt-4">
                      <h2 className=" ff_montserrat fw-semibold fs_lg text_primary ps-3 mb-0">
                        {key.name}
                        <span className="d-block ff_montserrat fw-semibold fs_sm mt-2">
                          {key.profession}
                        </span>
                      </h2>
                      <img className="pe-4" src={key.img2} alt="in" />
                    </article>
                  </article>
                </Carousel.Item>
              );
            })}{" "}
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Team;
