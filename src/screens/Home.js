// Bootstrap
import { Col, Row } from "react-bootstrap";

// Components
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import ProjectDetails from "../components/ProjectDetails";
import Statistics from "../components/Statistics";

const Home = () => {
  return (
    <Row className="py-3">
      <Col xs={12} md={6} lg={7}>
        {/* ---------------------------------------Bar Chart--------------------------------------- */}
        <BarChart />
        {/* ---------------------------------------Line Chart--------------------------------------- */}
        <LineChart />
      </Col>

      <Col xs={12} md={6} lg={5}>
        <ProjectDetails />
      </Col>

      {/* ---------------------------------------Statistics--------------------------------------- */}
      <Statistics />

      {/* ---------------------------------------Google Map--------------------------------------- */}
      <iframe
        className="my-3"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1528393404!2d72.68186492252839!3d21.15914221757627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1646369466554!5m2!1sen!2sin"
        width="100%"
        height="250"
        allowFullScreen=""
        loading="lazy"
        title="google map"
      ></iframe>
    </Row>
  );
};

export default Home;
