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
        <header className="bg_green_3f py-2">
          <Container>
            <div className="d-flex flex-column flex-md-row justify-content-md-between z_index1">
              <p className="mb-0 ff_montserrat fw-normal fs_xsm text_primary text-center">
                22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                <span className="position-relative verticle_line ps-3">
                  info@consaltex.de
                </span>
              </p>
            </div>
          </Container>
        </header>
        <Container className="py-3">
          <div className="d-flex justify-content-between align-items-center w-10 z_index1 ">
            <a
              className="ff_inter fw-semibold fs_18 text-white  z_index1"
              href="#"
            >
              <img src={logo} alt="logo-img" />
            </a>{" "}
            <ul className="d-flex gap-3 gap-xl-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
              <Link to="/">
                {" "}
                <li>
                  <a
                    class=" ff_poiret fw-normal fs_sm text_primary z_index text_stroke "
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Link>{" "}
              <Link to="/kunden">
                <li>
                  <a
                    class=" ff_poiret fw-normal fs_sm text_primary z_index text_stroke "
                    href="#"
                  >
                    Kundenrezensionen
                  </a>
                </li>
              </Link>
              <Link to="/hiring">
                <li>
                  <a
                    class=" ff_poiret fw-normal fs_sm text_primary z_index text_stroke "
                    href="#"
                  >
                    Karriere
                  </a>
                </li>
              </Link>
            </ul>
            <ul className="d-none d-lg-flex mb-0 ">
              <span
                className=" d-flex gap-2 align-items-center jetzt_btn py-2 px-3"
                href="#"
              >
                {" "}
                <a
                  className="ff_poiret fw-normal fs_sm text_primary z_index text_stroke"
                  href="#"
                >
                  Jetzt Erstgespräch vereinbaren
                </a>
                <img src={arrow} alt="arrow" />
              </span>
            </ul>
            <label
              className="menu_formatting d-flex justify-content-end d-lg-none"
              for="check"
            >
              <input
                onClick={() => setNavShow(!navShow)}
                className="menu bg-black "
                type="checkbox"
                id="check"
              />
              <span className="span_nav1"></span>
              <span className="span_nav2"></span>
              <span className="span_nav3"></span>
            </label>{" "}
          </div>
          <div className="d-lg-none d-flex z_index1">
            <div className={` ${navShow ? "nav-fix" : "fix-navbar"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3 gap-md-5 pt-3 transition">
                <li>
                  <a
                    class=" ff_poiret fw-normal fs_sm text_primary z_index text_stroke "
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class=" ff_poiret fw-normal fs_sm text_primary z_index text_stroke "
                    href="#"
                  >
                    Kundenrezensionen
                  </a>
                </li>
                <li>
                  <a
                    class=" ff_poiret fw-normal fs_sm text_primary z_index text_stroke "
                    href="#"
                  >
                    Karriere
                  </a>
                </li>
                <span
                  className=" d-flex gap-2 align-items-center jetzt_btn py-2 px-3"
                  href="#"
                >
                  {" "}
                  <a
                    className="ff_poiret fw-normal fs_sm text_primary z_index text_stroke"
                    href="#"
                  >
                    Jetzt Erstgespräch vereinbaren
                  </a>
                  <img src={arrow} alt="arrow" />
                </span>
              </ul>
            </div>
          </div>
        </Container>
        <Container className=" flex-grow-1 d-flex align-items-center">
          <article className="mt-lg-5 mt-4 z_index1 bg_green_16">
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
