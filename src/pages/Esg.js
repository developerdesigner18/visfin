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
          <div className="dashboards">
            <h5>Financial Dashboard</h5>
            <FinancialDashboard />
            <h5>Sustainability Dashboard</h5>
            <SustainabilityDashboard />
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default Esg;
