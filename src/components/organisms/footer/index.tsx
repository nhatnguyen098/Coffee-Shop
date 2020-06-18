import React from "react";
import { Row, Col, Button, Media,Image } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import img_1 from '../../../assets/images/image_1.jpg'
import img_2 from '../../../assets/images/image_2.jpg'
import "./style.scss";
const index = () => {
  const owlClass = "o-footer";
  return (
    <Row className={owlClass}>
      <Col className={`${owlClass}-col`}>
        <Media>
          <Media.Body>
            <h4 className={`${owlClass}-col-title`}>ABOUT US</h4>
            <p className={`${owlClass}-col-p`}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </Media.Body>
        </Media>
        <div className={`${owlClass}-col-wrapBtn`}>
          <Button variant="dark" className={`${owlClass}-col-wrapBtn-btn`}>
            <FaFacebookF size="1.5em" />
          </Button>
          <Button variant="dark" className={`${owlClass}-col-wrapBtn-btn`}>
            <FaInstagram size="1.5em" />
          </Button>
          <Button variant="dark" className={`${owlClass}-col-wrapBtn-btn`}>
            <FiTwitter size="1.5em" />
          </Button>
        </div>
      </Col>
      <Col className={`${owlClass}-col`}>
        <Media>
          <Media.Body>
            <h4 className={`${owlClass}-col-title`}>RECENT BLOG</h4>
            <section className="d-flex">
              <Image
                width={64}
                height={64}
                className="mr-3"
                src={img_1}
              />
              <p className={`${owlClass}-col-p`}>
                Even the all-powerful Pointing has no control about
              </p>
            </section>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <section className="d-flex">
              <Image
                width={64}
                height={64}
                className="mr-3"
                src={img_2}
              />
              <p className={`${owlClass}-col-p`}>
                Even the all-powerful Pointing has no control about
              </p>
            </section>
          </Media.Body>
        </Media>
      </Col>
      <Col>
        <Media style = {{marginBottom: '15px'}}>
          <Media.Body>
            <h4 className={`${owlClass}-col-title`}>RECENT BLOG</h4>
            <a href="/" className={`${owlClass}-col-p`}>
              Cooked
            </a>
          </Media.Body>
        </Media>
        <Media style = {{marginBottom: '15px'}}>
          <Media.Body>
            <a href="/" className={`${owlClass}-col-p`}>
              Delivery
            </a>
          </Media.Body>
        </Media>
        <Media style = {{marginBottom: '15px'}}>
          <Media.Body>
            <a href="/" className={`${owlClass}-col-p`}>
              Quality foods
            </a>
          </Media.Body>
        </Media>
        <Media style = {{marginBottom: '15px'}}>
          <Media.Body>
            <a href="/" className={`${owlClass}-col-p`}>
              Mixed
            </a>
          </Media.Body>
        </Media>
      </Col>
      <Col>
        <Media>
          <Media.Body>
            <h4 className={`${owlClass}-col-title`}>HAVE A QUESTIONS?</h4>
            <section className="d-flex">
              <TiLocation
                color="white"
                size="2em"
                style={{ marginRight: "15px" }}
              />
              <p className={`${owlClass}-col-p`}>
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </section>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <section className="d-flex">
              <FaPhoneAlt
                color="white"
                size="1.3em"
                style={{ marginRight: "15px" }}
              />
              <p className={`${owlClass}-col-p`}>+2 392 3929 210</p>
            </section>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <section className="d-flex">
              <IoMdMail
                color="white"
                size="1.3em"
                style={{ marginRight: "15px" }}
              />
              <p className={`${owlClass}-col-p`}>info@yourdomain.com</p>
            </section>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  );
};

export default index;
