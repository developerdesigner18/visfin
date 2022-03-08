// Bootstrap
import { Col, Row } from "react-bootstrap";
// Components
import Divider from "../components/Divider";

const BuildCashflows = () => {
  return (
    <div className="buildCashFlows py-4">
      <Row>
        <Col xs={12} md={4}>
          <h6>2. Build Cashflows</h6>
          <Divider />
        </Col>
        <Col xs={12} md={8}></Col>
      </Row>
    </div>
  );
};

export default BuildCashflows;
