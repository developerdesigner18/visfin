import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="py-3">Copyright &copy; VisualFin</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
