import { Link } from "react-router-dom";
// Components
import FormContainer from "../components/FormContainer";
// Bootstrap
import { Button, Col, Form, Row } from "react-bootstrap";
import { LOGO_LIGHT } from "../utils/constants";

const Register = () => {
  return (
    <div className="home">
      {/* ---------------------------------------Hero Section--------------------------------------- */}
      <div className="home__left">
        <div className="home__img">
          <img src="/images/calculator.svg" alt="Calculator vector" />
        </div>
        <img className="home__logo" src={LOGO_LIGHT} alt="VisFin Logo" />
      </div>

      {/* ---------------------------------------Register Section--------------------------------------- */}
      <div className="home__right">
        <h1 className="hero__title font-bold mb-5">Register</h1>
        <FormContainer>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="company">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter company name"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="role"
                placeholder="Enter your role"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
              ></Form.Control>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Register
            </Button>
          </Form>
        </FormContainer>
        <Row className="py-3">
          <Col>
            Already have an account?{" "}
            <Link
              to="/login"
              // to={redirect ? `/login?redirect=${redirect}` : "/login"}
            >
              Login
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
