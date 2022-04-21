import { useParams } from "react-router-dom";
// Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Components
import Divider from "../components/Divider";
import Tiles from "../components/Tiles";
import FinancialDashboard from "../components/Dashboards/FinancialDashboard";
import SustainabilityDashboard from "../components/Dashboards/SustainabilityDashboard";

const ProjectDetail = () => {
  const params = useParams();

  return (
    <Container>
      <div className="projectDetail py-4">
        <Row>
          <Col xs={12} md={4}>
            {/* // TODO: It's temporary. Please fetch it from db */}
            <h5>{params.name}</h5>
            <Divider />
            <div className="projectDetail__details">
              <h4>Location</h4>
              <p>location</p>
              <h4>User</h4>
              <p>user</p>
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores earum fugit illum porro. Sunt provident alias numquam
                quo perferendis molestiae!
              </p>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Tiles />
          </Col>

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

export default ProjectDetail;
