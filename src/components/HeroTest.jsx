import React, { useState } from "react";
import { Container } from "react-bootstrap";
import live from "../assets/img/webp/video2.webp";
import logo from "../assets/img/png/logo.png";
import arrow from "../assets/img/png/arrow.png";
import rightellips from "../assets/img/png/rightellips.png";
import leftellips from "../assets/img/png/elliosleft.png";
import { Link } from "react-router-dom";

function HeroTest() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className="min_vh_100 d-flex flex-column position-relative ">
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

        <Container className=" flex-grow-1 d-flex align-items-center">
          <article className="mt-lg-5 mt-md-4 z_inde bg_green_16">
            <img
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              data-aos-delay="500"
              className="w-100 h-50"
              src={live}
              alt="video-img"
            />
            <p className=" ff_montserrat fw_medium fs_sm text_primary opacity_08 px-2 mb-0 mt-3 pt-1 pb-3">
              Sit nec cras varius leo sit consectetur eros. Odio egestas
              malesuada interdum scelerisque sed facilisis tincidunt arcu. Ut
              scelerisque sodales senectus feugiat sem nec consequat. Sed erat
              aliquet euismod sed pellentesque ut ornare integer risus. Nam
              varius et scelerisque amet a suscipit felis. Amet odio aliquam
              orci et et ac. Quam non neque condimentum consequat augue odio
              malesuada. Est sit faucibus egestas pretium ipsum elementum turpis
              ultrices lacus. Leo aliquam, orci, in facilisis venenatis enim.
              Feugiat dictumst eget amet eget. Molestie mollis risus porta a
              magna a. Pellentesque at enim ultricies tortor enim.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}

export default HeroTest;
