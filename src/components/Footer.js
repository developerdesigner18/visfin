// Bootstrap
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="border__visfin border__visfin--top">
      <footer className="bg-secondary">
        <Container>
          <Row>
            <Col className="py-3 d-flex">
              Copyright &copy;
              <div className="footer__logo">
                <img src="/images/logo.png" alt="VisualFin Logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
