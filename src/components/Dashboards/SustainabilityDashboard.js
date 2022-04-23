// Bootstrap
import { Card } from "react-bootstrap";
// Components
import ShowInfo from "../ShowInfo/ShowInfo";
// Constants
import {
  CO2E_INFO,
  CO2E_SAVED_INFO,
  ESG_DISCLOSURE_SCORE_INFO,
  GROSS_OPERATIONAL_CARBON_INFO,
  TOTAL_ESTIMATED_EXPENDITURE_CARBON_INFO,
  TOTAL_EXPENDITURE_CARBON_INFO,
} from "../../utils/constants";
// css
import "./Dashboard.css";

const SustainabilityDashboard = () => {
  return (
    <div className="dashboard">
      <h5 className="dashboard__heading">Sustainability Dashboard</h5>
      <div className="dashboard__container bg__visfin text-center p-4 my-3">
        <Card.Body>
          <ShowInfo info={CO2E_INFO}>
            <Card.Title className="dashboard__title">
              Gross embodied carbon (est) (CO2E)
            </Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">$144.3M</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <ShowInfo info={GROSS_OPERATIONAL_CARBON_INFO}>
            <Card.Title className="dashboard__title">
              Gross operational carbon
            </Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">$44.3M</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <ShowInfo info={TOTAL_EXPENDITURE_CARBON_INFO}>
            <Card.Title className="dashboard__title">
              Total expenditure on Embodied Carbon reduction
            </Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">
            60.9% <br />
            (excluding future cashflows)
          </Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <ShowInfo info={TOTAL_ESTIMATED_EXPENDITURE_CARBON_INFO}>
            <Card.Title className="dashboard__title">
              Total Estimated expenditure Operational Carbon reduction
            </Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">$19.1M</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <ShowInfo info={CO2E_SAVED_INFO}>
            <Card.Title className="dashboard__title">CO2E Saved</Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">87.5%</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <ShowInfo info={ESG_DISCLOSURE_SCORE_INFO}>
            <Card.Title className="dashboard__title">
              ESG Disclosure score
            </Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">87.5%</Card.Subtitle>
        </Card.Body>
      </div>
    </div>
  );
};

export default SustainabilityDashboard;
