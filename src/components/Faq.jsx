import React from "react";
import { Container, Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import sdas from "../assets/img/webp/sdas.webp";
import tube from "../assets/img/png/tube1.png";
import daimand from "../assets/img/png/green daimand.png";
import greencube from "../assets/img/png/greencube.png";
import leftellips from "../assets/img/png/elliosleft.png";

function Faq() {
  return (
    <>
      <section className="overflow-hidden position-relative py-lg-5 py-4">
        <img
          className=" position-absolute tube_posi_right1"
          src={tube}
          alt="shodow"
        />
        <img
          className=" position-absolute green_cube_left"
          src={greencube}
          alt="shodow"
        />
        <img
          className="z_index0 d-none d-sm-flex position-absolute daimand_gray_right"
          src={daimand}
          alt="shodow"
        />{" "}
        <img
          className="z_index0 position-absolute left_shadow_mid"
          src={leftellips}
          alt="shodow"
        />
        <Container className="pt-lg-5 mt-lg-5">
          {" "}
          <div className="d-flex justify-content-center z_index1">
            <p className="ps-5 ms-lg-0 position-relative before_line ff_montserrat fw-normal text_primary fs_sm mb-0 d-inline-block  ">
              Du hast noch Fragen?
            </p>
          </div>
          <h2 className="text_border ff_poiret z_index1 fw-normal fs_2xl text_primary text-center">
            Häufig gestellte <span className="d-block">Fragen</span>
          </h2>
          <Row className="mt-5 z_index1">
            <div className="col-md-8 mx-auto">
              {" "}
              <Accordion defaultActiveKey={["0"]}>
                {" "}
                <Accordion.Item
                  eventKey="0"
                  className=" mb-4 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <Accordion.Header>
                    {" "}
                    <p className=" mb-0 fw-semibold fs_md ff_montserrat text_primary">
                      Was unterscheidet euch von anderen Agenturen?
                    </p>{" "}
                  </Accordion.Header>{" "}
                  <Accordion.Body className="pt-0">
                    {" "}
                    <p className=" mb-0 fs_sm fw-normal ff_montserrat opacity_08 text_primary">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Das
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!{" "}
                    </p>{" "}
                  </Accordion.Body>{" "}
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  className=" mb-4 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <Accordion.Header>
                    {" "}
                    <p className=" mb-0 fw-semibold fs_md ff_montserrat text_primary">
                      Brauche ich eure Hilfe?
                    </p>{" "}
                  </Accordion.Header>{" "}
                  <Accordion.Body className="pt-0">
                    {" "}
                    <p className=" mb-0 fs_sm fw-normal ff_montserrat opacity_08 text_primary">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Das
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!{" "}
                    </p>{" "}
                  </Accordion.Body>{" "}
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  className=" mb-4 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <Accordion.Header>
                    {" "}
                    <p className=" mb-0 fw-semibold fs_md ff_montserrat text_primary">
                      Wie könnt ihr mir helfen?{" "}
                    </p>{" "}
                  </Accordion.Header>{" "}
                  <Accordion.Body className="pt-0">
                    {" "}
                    <p className=" mb-0 fs_sm fw-normal ff_montserrat opacity_08 text_primary">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Das
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!{" "}
                    </p>{" "}
                  </Accordion.Body>{" "}
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  className=" mb-4 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <Accordion.Header className="bg-transparent">
                    {" "}
                    <p className=" mb-0 fw-semibold fs_md ff_montserrat text_primary">
                      Kann man im Internet noch neue Kunden gewinnen?{" "}
                    </p>{" "}
                  </Accordion.Header>{" "}
                  <Accordion.Body className="pt-0">
                    {" "}
                    <p className=" mb-0 fs_sm fw-normal ff_montserrat opacity_08 text_primary">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Das
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!{" "}
                    </p>{" "}
                  </Accordion.Body>{" "}
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  className=" mb-4 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <Accordion.Header>
                    {" "}
                    <p className=" mb-0 fw-semibold fs_md ff_montserrat text_primary">
                      Gibt es eine eins-zu-eins Betreuung?{" "}
                    </p>{" "}
                  </Accordion.Header>{" "}
                  <Accordion.Body className="pt-0">
                    {" "}
                    <p className=" mb-0 fs_sm fw-normal ff_montserrat opacity_08 text_primary">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Das
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!{" "}
                    </p>{" "}
                  </Accordion.Body>{" "}
                </Accordion.Item>
              </Accordion>
              <div
                className="px-sm-5 py-sm-5"
                data-aos="flip-up"
                data-aos-duration="3000"
              >
                <img className="w-100 p-4 z_index3" src={sdas} alt="people" />
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Faq;
