// Bootstrap
import { Card } from "react-bootstrap";
// Components
import ShowInfo from "../ShowInfo/ShowInfo";
// Constants
import {
  IRR_INFO,
  NPV_INFO,
  PROFIT_ON_COST_INFO,
  TOTAL_COSTS_INFO,
  TOTAL_REVENUE_INFO,
} from "../../utils/constants";
// css
import "./Dashboard.css";

const FinancialDashboard = () => {
  return (
    <div className="dashboard">
      <h5 className="dashboard__heading">Financial Dashboard</h5>
      <div className="dashboard__container bg__visfin text-center p-4 my-3">
        <Card.Body>
          <ShowInfo info={TOTAL_COSTS_INFO}>
            <Card.Title className="dashboard__title">Total Costs</Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">$144.3M</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <ShowInfo info={TOTAL_REVENUE_INFO}>
            <Card.Title className="dashboard__title">Total Revenue</Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">$44.3M</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <ShowInfo info={PROFIT_ON_COST_INFO}>
            <Card.Title className="dashboard__title">Profit on cost</Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">
            60.9% <br />
            (excluding future cashflows)
          </Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <ShowInfo info={NPV_INFO}>
            <Card.Title className="dashboard__title">NPV</Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">$19.1M</Card.Subtitle>
        </Card.Body>

        <Card.Body>
          <ShowInfo info={IRR_INFO}>
            <Card.Title className="dashboard__title">IRR</Card.Title>
          </ShowInfo>
          <Card.Subtitle className="dashboard__subtitle">87.5%</Card.Subtitle>
        </Card.Body>
      </div>
    </div>
  );
};

export default FinancialDashboard;
