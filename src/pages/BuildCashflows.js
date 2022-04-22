// Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Components
import ProjectDetails from "../components/ProjectDetails";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import FinancialDashboard from "../components/Dashboards/FinancialDashboard";
import SustainabilityDashboard from "../components/Dashboards/SustainabilityDashboard";
import Divider from "../components/Divider";
import GoogleMap from "../components/GoogleMap/GoogleMap";

const BuildCashflows = () => {
  return (
    <Container>
      <div className="buildCashFlows py-4">
        <Row>
          <Col xs={12} md={4}>
            <h6>2. Build Cashflows</h6>
            <Divider />
          </Col>
          <Col xs={12} md={8}></Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={7}>
            {/* ---------------------------------------Bar Chart--------------------------------------- */}
            <BarChart />
            {/* ---------------------------------------Line Chart--------------------------------------- */}
            <LineChart />
          </Col>

          <Col xs={12} md={6} lg={5}>
            {/* ---------------------------------------Line Chart--------------------------------------- */}
            <ProjectDetails />
          </Col>

          {/* ---------------------------------------Dashboards--------------------------------------- */}
          <FinancialDashboard />
          <SustainabilityDashboard />

          {/* ---------------------------------------Google Map--------------------------------------- */}
          <GoogleMap />
        </Row>
      </div>
    </Container>
  );
};

export default BuildCashflows;
