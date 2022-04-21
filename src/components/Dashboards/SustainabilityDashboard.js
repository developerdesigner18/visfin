// Bootstrap
import { Card } from "react-bootstrap";
// Components
import ShowInfo from "../ShowInfo/ShowInfo";
// css
import "./Dashboard.css";

const SustainabilityDashboard = () => {
  return (
    <div className="statistics bg__visfin text-center p-4 my-3">
      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">
            Gross embodied carbon (est) (CO2E)
          </Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">$144.3M</Card.Subtitle>
      </Card.Body>

      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">
            Gross operational carbon
          </Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">$44.3M</Card.Subtitle>
      </Card.Body>

      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">
            Total expenditure on Embodied Carbon reduction
          </Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">
          60.9% <br />
          (excluding future cashflows)
        </Card.Subtitle>
      </Card.Body>

      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">
            Total Estimated expenditure Operational Carbon reduction
          </Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">$19.1M</Card.Subtitle>
      </Card.Body>

      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">CO2E Saved</Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">87.5%</Card.Subtitle>
      </Card.Body>

      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">
            ESG Disclosure score
          </Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">87.5%</Card.Subtitle>
      </Card.Body>
    </div>
  );
};

export default SustainabilityDashboard;