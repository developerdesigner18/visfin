// Bootstrap
import { Card } from "react-bootstrap";
// Components
import ShowInfo from "../ShowInfo/ShowInfo";
// css
import "./Dashboard.css";

const FinancialDashboard = () => {
  return (
    <div className="statistics bg__visfin text-center p-4 my-3">
      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">Total Costs</Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">$144.3M</Card.Subtitle>
      </Card.Body>

      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">Total Revenue</Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">$44.3M</Card.Subtitle>
      </Card.Body>

      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">Profit on cost</Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">
          60.9% <br />
          (excluding future cashflows)
        </Card.Subtitle>
      </Card.Body>

      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">NPV</Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">$19.1M</Card.Subtitle>
      </Card.Body>

      <Card.Body>
        <ShowInfo info="formula here">
          <Card.Title className="statistics__title">IRR</Card.Title>
        </ShowInfo>
        <Card.Subtitle className="statistics__subtitle">87.5%</Card.Subtitle>
      </Card.Body>
    </div>
  );
};

export default FinancialDashboard;
