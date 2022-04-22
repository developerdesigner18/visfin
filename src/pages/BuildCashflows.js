// Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Components
import ProjectDetails from "../components/ProjectDetails";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import FinancialDashboard from "../components/Dashboards/FinancialDashboard";
import SustainabilityDashboard from "../components/Dashboards/SustainabilityDashboard";
import Divider from "../components/Divider";

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
          <div className="border__visfin my-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1528393404!2d72.68186492252839!3d21.15914221757627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1646369466554!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              title="google map"
            ></iframe>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default BuildCashflows;
