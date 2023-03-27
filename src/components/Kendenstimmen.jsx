import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import KendenData from "./KendenData";

function Kendenstimmen() {
  return (
    <>
      <section className="py-4 py-md-5 mb-lg-5">
        <Container>
          <h2 className="z_index1 ff_poiret fw-normal text_border text_primary fs_2xl mt-md-5 mb-md-4 mb-0">
            Kundenstimmen
          </h2>
          <Row className="d-none d-md-flex justify-content-center pb-lg-5">
            {KendenData.map((data) => {
              return (
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="3000"
                  data-aos-delay="500"
                  className="col-lg-4 col-sm-6 px-2  mt-2 z_index1"
                >
                  <article className=" bg_green_16">
                    <img className="w-100" src={data.Image} alt="video" />
                    <p className=" ff_montserrat fw-normal fs_sm text_primary opacity_08 px-3 py-3">
                      {data.text}
                    </p>
                  </article>
                </div>
              );
            })}
          </Row>
          <Carousel className="d-md-none justify-content-center pb-lg-5">
            {KendenData.map((data) => {
              return (
                <Carousel.Item>
                  {" "}
                  <article
                    data-aos="zoom-in-up"
                    data-aos-duration="3000"
                    data-aos-delay="500"
                    className=" bg_green_16"
                  >
                    <img className="w-100" src={data.Image} alt="video" />
                    <p className=" ff_montserrat fw-normal fs_sm text_primary opacity_08 px-3 py-3">
                      {data.text}
                    </p>
                  </article>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Kendenstimmen;
