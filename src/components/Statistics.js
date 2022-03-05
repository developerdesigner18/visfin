// Bootstrap
import { Card, Container } from "react-bootstrap";

const Statistics = () => {
  return (
    <Container>
      <div className="statistics bg__visfin text-center p-4 my-3">
        <Card.Body>
          <Card.Title className="statistics__title">Total Revenue</Card.Title>
          <Card.Subtitle className="statistics__subtitle">$44.3M</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <Card.Title className="statistics__title">Profit on cost</Card.Title>
          <Card.Subtitle className="statistics__subtitle">
            60.9% <br />
            (excluding future cashflows)
          </Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <Card.Title className="statistics__title">NPV</Card.Title>
          <Card.Subtitle className="statistics__subtitle">$19.1M</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <Card.Title className="statistics__title">IRR</Card.Title>
          <Card.Subtitle className="statistics__subtitle">87.5%</Card.Subtitle>
        </Card.Body>
      </div>
    </Container>
  );
};

export default Statistics;
