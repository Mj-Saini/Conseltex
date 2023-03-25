import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from "react-bootstrap";
import testVideo from "../assets/img/webp/test video.webp";
import arrow from "../assets/img/png/arrow.png";
import tube from "../assets/img/png/tube1.png";

function Testmonials() {
  const myBtn = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-4 py-md-5 mb-5 overflow-hidden position-relative">
        <img
          className=" position-absolute tube_posi_right"
          src={tube}
          alt="shodow"
        />{" "}
        <Container>
          <Row className=" flex-column-reverse  flex-lg-row justify-content-center z_index1">
            <div className="col-lg-8">
              <Row>
                <Slider ref={myBtn} {...settings}>
                  <div className="col-6 px-2">
                    <article
                      className=" bg_green_16 h_sm_408"
                      data-aos="zoom-in-up"
                      data-aos-duration="3000"
                    >
                      <a href="#">
                        <a href="#">
                          <img className="w-100" src={testVideo} alt="video" />
                        </a>
                      </a>
                      <p className=" ff_montserrat fw-normal fs_sm text_primary opacity_08 px-3 py-3">
                        Die Metarec GmbH unterstützt unter der Leitung des
                        Geschäftsführers Christian Schmitt kleine- und
                        Mittelständische Unternehmen beim Gewinnen von
                        qualifizierten Fachkräfte zur beseitigung des
                        Fachkräftemangels
                      </p>
                    </article>
                  </div>
                  <div className="col-6 px-2">
                    <article
                      className=" bg_green_16 h_sm_408"
                      data-aos="zoom-in-up"
                      data-aos-duration="3000"
                    >
                      <a href="#">
                        <img className="w-100" src={testVideo} alt="video" />
                      </a>
                      <p className=" ff_montserrat fw-normal fs_sm text_primary opacity_08 px-3 py-3">
                        B2B-Reels unterstützt unter der Leitung des
                        Geschäftsführers Simon Günther Unternehmen dabei,
                        effizient & einfach auf TikTok, Instagram und YouTube zu
                        wachsen.
                      </p>
                    </article>
                  </div>
                  <div className="col-6 px-2">
                    <article
                      className=" bg_green_16 h_sm_408"
                      data-aos="zoom-in-up"
                      data-aos-duration="3000"
                    >
                      <a href="#">
                        <img className="w-100" src={testVideo} alt="video" />
                      </a>
                      <p className=" ff_montserrat fw-normal fs_sm text_primary opacity_08 px-3 py-3">
                        Die Metarec GmbH unterstützt unter der Leitung des
                        Geschäftsführers Christian Schmitt kleine- und
                        Mittelständische Unternehmen beim Gewinnen von
                        qualifizierten Fachkräfte zur beseitigung des
                        Fachkräftemangels
                      </p>
                    </article>
                  </div>
                  <div className="col-6 px-2">
                    <article
                      className=" bg_green_16 h_sm_408"
                      data-aos="zoom-in-up"
                      data-aos-duration="3000"
                    >
                      <a href="#">
                        <img className="w-100" src={testVideo} alt="video" />
                      </a>
                      <p className=" ff_montserrat fw-normal fs_sm text_primary opacity_08 px-3 py-3">
                        B2B-Reels unterstützt unter der Leitung des
                        Geschäftsführers Simon Günther Unternehmen dabei,
                        effizient & einfach auf TikTok, Instagram und YouTube zu
                        wachsen.
                      </p>
                    </article>
                  </div>
                  <div className="col-6 px-2">
                    <article className=" bg_green_16 h_sm_408">
                      <a href="#">
                        <img className="w-100" src={testVideo} alt="video" />
                      </a>
                      <p className=" ff_montserrat fw-normal fs_sm text_primary opacity_08 px-3 py-3">
                        Die Metarec GmbH unterstützt unter der Leitung des
                        Geschäftsführers Christian Schmitt kleine- und
                        Mittelständische Unternehmen beim Gewinnen von
                        qualifizierten Fachkräfte zur beseitigung des
                        Fachkräftemangels
                      </p>
                    </article>
                  </div>
                  <div className="col-6 px-2">
                    <article
                      className=" bg_green_16 h_sm_408"
                      data-aos="zoom-in-up"
                      data-aos-duration="3000"
                    >
                      <a href="#">
                        <img className="w-100" src={testVideo} alt="video" />
                      </a>
                      <p className=" ff_montserrat fw-normal fs_sm text_primary opacity_08 px-3 py-3">
                        B2B-Reels unterstützt unter der Leitung des
                        Geschäftsführers Simon Günther Unternehmen dabei,
                        effizient & einfach auf TikTok, Instagram und YouTube zu
                        wachsen.
                      </p>
                    </article>
                  </div>
                </Slider>
              </Row>
            </div>

            <div className="col-lg-4 ps-lg-4">
              <article className="h-100 d-flex justify-content-between align-items-center align-items-lg-start flex-column pb-3">
                <div data-aos="zoom-in-up" data-aos-duration="3000">
                  <div className="d-flex ">
                    <p className="ps-5 ms-5 ms-lg-0 position-relative before_line ff_montserrat fw-normal text_primary fs_sm mb-0 d-inline-block me-lg-5 ">
                      Wir arbeiten mit den besten
                    </p>
                  </div>
                  <h2 className="text-center text-lg-start ff_poiret fw-normal fs_2xl text_primary z_index3 text_border">
                    Testimonials
                  </h2>
                  <p className="text-center text-lg-start ff_montserrat fw-normal fs_sm text_primary opacity_08">
                    Unsere Kunden berichten über die Zusammenarbeit
                  </p>
                  <span className="d-flex justify-content-center justify-content-lg-start mt-4 pt-2">
                    {" "}
                    <span className="jetzt_btn py-2 px-3" href="#">
                      {" "}
                      <a
                        className="ff_poiret fw-normal fs_sm text_primary z_index text_stroke"
                        href="#"
                      >
                        Mehr ansehen
                      </a>
                      <img className="ps-3" src={arrow} alt="arrow" />
                    </span>
                  </span>
                </div>
                <div className="d-flex gap-3 mb-3 my-4 my-lg-0">
                  <span
                    onClick={() => myBtn.current.slickPrev()}
                    className="arrow_bg cursor_pointer"
                  >
                    <img className="" src={arrow} alt="arrow" />
                  </span>
                  <span
                    onClick={() => myBtn.current.slickNext()}
                    className="arrow_bg cursor_pointer"
                  >
                    <img className="rotation" src={arrow} alt="arrow" />
                  </span>
                </div>
              </article>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Testmonials;
