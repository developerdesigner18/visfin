import { useParams } from "react-router-dom";
// Bootstrap
import { Col, Container, Form, Row } from "react-bootstrap";
// Components
import Divider from "../components/Divider";
import Tiles from "../components/Tiles";
import FinancialDashboard from "../components/Dashboards/FinancialDashboard";
import SustainabilityDashboard from "../components/Dashboards/SustainabilityDashboard";
import GoogleMap from "../components/GoogleMap/GoogleMap";

const ProjectDetail = () => {
  const params = useParams();

  return (
    <Container>
      <div className="projectDetail py-4">
        <Row>
          <Col xs={12} md={4}>
            <h5>{params.name}</h5>
            <Divider />
            <div className="projectDetail__details">
              <h4>Location</h4>
              <p>location</p>
              <h4>User</h4>
              <p>Logged in user info goes here</p>
              <h4>Description</h4>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Please enter a short description of the project here. This may be useful for other users or viewers."
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Tiles />
          </Col>

          <GoogleMap />

          {/* ---------------------------------------Dashboards--------------------------------------- */}
          <FinancialDashboard />
          <SustainabilityDashboard />
        </Row>
      </div>
    </Container>
  );
};

export default ProjectDetail;
