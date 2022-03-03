import Chart from "../components/Chart";
import { Col, ListGroup, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col xs={12} md={8}>
        <h1>Welcome to VisualFin</h1>
        <Chart />
        <ListGroup style={{ width: "100%" }} horizontal={"sm"}>
          <ListGroup.Item>
            <span className="text-secondary">Total revenue</span> <br />
            <span className="text-primary">$44.3M</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="text-secondary">Profit on cost</span> <br />
            <span className="text-primary">100.8%</span> <br />
            <span className="text-secondary">(excluding future cashflows)</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="text-secondary">NPV</span> <br />
            <span className="text-primary">$24.0M</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="text-secondary">IRR</span> <br />
            <span className="text-primary">113.0%</span>!
          </ListGroup.Item>
        </ListGroup>

        {/* Temporary image. Later it will be replaced by map */}
        <div
          className="my-3"
          style={{
            height: "20rem",
            overflow: "hidden",
          }}
        >
          <img src="https://cdn.hswstatic.com/gif/maps.jpg" alt="Map" />
        </div>
      </Col>
      <Col xs={12} md={4}>
        Project Calculator
      </Col>
    </Row>
  );
};

export default Home;
