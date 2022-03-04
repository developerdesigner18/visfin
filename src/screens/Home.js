import BarChart from "../components/BarChart";
import { Col, ListGroup, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col xs={12} md={8}>
        <h1>Primary Feasibility</h1>

        {/* ---------------------------------------Bar Chart--------------------------------------- */}
        <BarChart />

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

        {/* ---------------------------------------Google Map--------------------------------------- */}
        <iframe
          className="my-3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1528393404!2d72.68186492252839!3d21.15914221757627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1646369466554!5m2!1sen!2sin"
          width="100%"
          height="250"
          allowfullscreen=""
          loading="lazy"
          title="google map"
        ></iframe>
      </Col>

      <Col xs={12} md={4}>
        Project Calculator
      </Col>
    </Row>
  );
};

export default Home;
