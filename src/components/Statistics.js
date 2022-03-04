// Bootstrap
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const Statistics = () => {
  return (
    <Container>
      <div className="border text-center d-flex my-3 p-3">
        <Card.Body>
          <Card.Title>Total Revenue</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-primary">
            $44.3M
          </Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Card.Title>Profit on cost</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-primary">
            60.9% <br />
            (excluding future cashflows)
          </Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Card.Title>NPV</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-primary font-weight-bold">
            $19.1M
          </Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Card.Title>IRR</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-primary">
            87.5%
          </Card.Subtitle>
        </Card.Body>
      </div>
    </Container>
  );
};

export default Statistics;
