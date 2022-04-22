// Bootstrap
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
// Components
import Divider from "../components/Divider";
import FinancialDashboard from "../components/Dashboards/FinancialDashboard";
import SustainabilityDashboard from "../components/Dashboards/SustainabilityDashboard";
import ShowInfo from "../components/ShowInfo/ShowInfo";

const SummaryKpis = () => {
  return (
    <Container>
      <div className="summaryKpis py-4">
        {/* ---------------------------------------Title & Button Section--------------------------------------- */}
        <Row>
          <Col xs={12} md={4}>
            <h6>3. Summary KPIs</h6>
            <Divider />
          </Col>
          <Col xs={0} md={6}></Col>
          <Col xs={12} md={2}>
            <ShowInfo info="Info about prefill">
              <Button className="w-100 mb-3">Print Report</Button>
            </ShowInfo>
          </Col>
          <Col xs={12} md={8}></Col>
        </Row>

        {/* ---------------------------------------Details Section--------------------------------------- */}
        <Row>
          {/* ---------------------------------------Basic Finance Information Section--------------------------------------- */}
          <Col className="mb-3" sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>Project KPIs</Card.Title>
                <ListGroup className="w-full" horizontal>
                  <ListGroup.Item className="w-50">
                    Net Present Value
                  </ListGroup.Item>
                  <ListGroup.Item className="w-50">ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className="w-50">
                    Internal Rate of Return
                  </ListGroup.Item>
                  <ListGroup.Item className="w-50">ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className="w-50">
                    Profit on Cost
                  </ListGroup.Item>
                  <ListGroup.Item className="w-50">ListGroup</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* ---------------------------------------Cost & Revenue Details Section--------------------------------------- */}
          <Col className="mb-3" sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>Cost & Revenue Details</Card.Title>
                <ListGroup className="w-full" horizontal>
                  <ListGroup.Item className="w-50">Total Costs</ListGroup.Item>
                  <ListGroup.Item className="w-50">ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className="w-50">
                    Total Revenue
                  </ListGroup.Item>
                  <ListGroup.Item className="w-50">ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className="w-50">EBIT</ListGroup.Item>
                  <ListGroup.Item className="w-50">ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className="w-50">EBITDA</ListGroup.Item>
                  <ListGroup.Item className="w-50">ListGroup</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* ---------------------------------------Dashboards--------------------------------------- */}
          <FinancialDashboard />
          <SustainabilityDashboard />
        </Row>
      </div>
    </Container>
  );
};

export default SummaryKpis;
