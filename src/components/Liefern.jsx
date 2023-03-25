import React from "react";
import { Container, Row } from "react-bootstrap";
import statue from "../assets/img/webp/white statue.webp";
import arrow from "../assets/img/png/arrow.png";

function Liefern() {
  return (
    <>
      <section className="py-4 py-md-5 overflow-hidden">
        <Container>
          <Row className="px-2 align-items-center justify-content-center justify-content-md-start flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <article
                className="mb-lg-5 mt-5"
                data-aos="zoom-in-right"
                data-aos-duration="3000"
              >
                <h2 className="ff_poiret text_border fw-normal fs_2xl text_primary text-center text-md-start">
                  Wir liefern Ergebnisse
                </h2>
                <p className=" opacity_07 ff_montserrat fw-normal fs_sm text_primary mt-3  text-center text-md-start">
                  Wir sind vielleicht nicht der größte Player in der Branche,
                  aber auf{" "}
                  <span className="d-xl-block">
                    dem Weg dorthin. Aber vor allem sind wir hungrig darauf,
                  </span>{" "}
                  <span className="d-xl-block">
                    gemeinsam mit Unternehmern wie dir Erfxlsgeschichten zu
                  </span>
                  schreiben.
                  <span className="d-block my-2 py-1">
                    {" "}
                    Wenn andere aufgeben, werden wir erst richtig warm. Wir sind
                    der{" "}
                    <span className="d-xl-block ">
                      Ansprechpartner für umkämpfte Märkte, komplizierte Kunden,
                    </span>{" "}
                    <span className="d-xl-block">
                      {" "}
                      erklärungsbedürftige Services und scheinbar aussichtslose
                      Fälle. Wir
                    </span>{" "}
                    sind das Spezialeinsatzkommando für Agenturen.
                  </span>{" "}
                  Unser Herz schlägt für den Underdog: David gegen Goliath -
                  <span className="d-xl-block">
                    Marketing, Vertrieb, interne Prozesse: Unser Team gibt für
                    dich 110{" "}
                  </span>{" "}
                  Prozent - weil dein Erfolg unsere Motivation ist.
                </p>
                <span className="d-flex justify-content-center justify-content-md-start mt-4 pt-2">
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
            <div className="col-md-6">
              <article
                className="pt-lg-5"
                data-aos="zoom-in-left"
                data-aos-duration="3000"
              >
                <img className="w-100" src={statue} alt="img" />
              </article>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Liefern;
