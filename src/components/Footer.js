// Bootstrap
import { Col, Container, Row } from "react-bootstrap";
import { LOGO_DARK } from "../AppConfig";

const Footer = () => {
  return (
    <div className="border__visfin border__visfin--top">
      <footer className="bg-secondary">
        <Container>
          <Row>
            <Col className="py-3 d-flex">
              Copyright &copy;
              <div className="footer__logo">
                <img src={LOGO_DARK} alt="VisualFin Logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
