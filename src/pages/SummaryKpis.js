// Bootstrap
import { Col, Row } from "react-bootstrap";
// Components
import Divider from "../components/Divider";

const SummaryKpis = () => {
  return (
    <div className="buildCashFlows py-4">
      <Row>
        <Col xs={12} md={4}>
          <h6>3. Summary KPIs</h6>
          <Divider />
        </Col>
        <Col xs={12} md={8}></Col>
      </Row>
    </div>
  );
};

export default SummaryKpis;
