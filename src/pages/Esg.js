// Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Components
import Divider from "../components/Divider";
import FinancialDashboard from "../components/Dashboards/FinancialDashboard";
import SustainabilityDashboard from "../components/Dashboards/SustainabilityDashboard";

const Esg = () => {
  return (
    <Container>
      <div className="esg py-4">
        <Row>
          <Col xs={12} md={4}>
            <h6>4. ESG & Sustainability Score</h6>
            <Divider />
          </Col>
          <Col xs={12} md={8}></Col>

          {/* ---------------------------------------Dashboards--------------------------------------- */}
          <FinancialDashboard />
          <SustainabilityDashboard />
        </Row>
      </div>
    </Container>
  );
};

export default Esg;
