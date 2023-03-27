import React, { useState } from "react";
import { Container } from "react-bootstrap";
import facebook from "../assets/img/png/facebook.png";
import insta from "../assets/img/svg/insta.svg";
import linkdin from "../assets/img/svg/linkdin.svg";
import youtube from "../assets/img/svg/youtube.svg";
import tiktok from "../assets/img/svg/tiktok.svg";
import logo from "../assets/img/png/logo.png";
import arrow from "../assets/img/png/arrow.png";
import cubered from "../assets/img/png/cube.png";
import { Link } from "react-router-dom";

function Header(props) {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className="bg_green_3f py-2">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-md-between z_index1">
            <p className="mb-0 ff_montserrat fw-normal fs_xsm text_primary text-center">
              22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
              <span className="position-relative verticle_line ps-3">
                info@consaltex.de
              </span>
            </p>
            <span className="d-flex gap-2 justify-content-center mt-3 mt-md-0">
              <a
                className={props.HIdeIcon}
                target="_blank"
                href="https://www.facebook.com/"
              >
                <img className="icon_scale" src={facebook} alt="social-sites" />
              </a>
              <a
                className={props.HIdeIcon}
                target="_blank"
                href="https://www.tiktok.com/en/"
              >
                <img className="icon_scale" src={tiktok} alt="social-sites" />
              </a>
              <a
                className={props.HIdeIcon}
                target="_blank"
                href="https://www.linkedin.com/login"
              >
                <img className="icon_scale" src={linkdin} alt="social-sites" />
              </a>
              <a
                className={props.HIdeIcon}
                target="_blank"
                href="
https://www.instagram.com/"
              >
                <img className="icon_scale" src={insta} alt="social-sites" />
              </a>
              <a
                className={props.HIdeIcon}
                target="_blank"
                href="https://www.youtube.com/"
              >
                <img className="icon_scale" src={youtube} alt="social-sites" />
              </a>
            </span>
          </div>
        </Container>
      </section>
      <section className="py-3 bg_dark_12 position-relative">
        <img
          className="z_index0 position-absolute cube_red"
          src={cubered}
          alt="shodow"
        />
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100 ">
            <a
              className="ff_inter fw-semibold fs_18 text-white  z_index1"
              href="#"
            >
              <img src={logo} alt="logo-img" />
            </a>{" "}
            <ul className="d-flex gap-3 gap-xl-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
              <Link to="/">
                <li>
                  <a
                    class=" ff_poiret fw-normal fs_sm text_primary z_index text_stroke "
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Link>
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
          <div className="d-lg-none d-flex ">
            <div className={` ${navShow ? "nav-fix" : "fix-navbar"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3  pt-3 transition">
                <Link to="/">
                  <li>
                    <a
                      class=" ff_poiret fw-normal fs_sm text_primary z_index text_stroke "
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                </Link>
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
      </section>
    </>
  );
}

export default Header;
