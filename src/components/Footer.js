import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo4.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/brian-balderrama/">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/niceflamingo">
                <img src={navIcon2} alt="GitHub Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Instagram Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved. Lou Dog Inc. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
