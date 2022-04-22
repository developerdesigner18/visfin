import { Link } from "react-router-dom";
// Components
import FormContainer from "../components/FormContainer";
// Bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { LOGO_LIGHT } from "../AppConfig";

const Login = () => {
  return (
    <div className="home">
      {/* ---------------------------------------Hero Section--------------------------------------- */}
      <div className="home__left">
        <div className="home__img">
          <img src="/images/calculator.svg" alt="Calculator vector" />
        </div>
        <img className="home__logo" src={LOGO_LIGHT} alt="VisFin Logo" />
      </div>

      {/* ---------------------------------------Login Section--------------------------------------- */}
      <div className="home__right">
        <h1 className="hero__title font-bold mb-5">Login to your account</h1>
        <FormContainer>
          <Form
          // onSubmit={submitHandler}
          >
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Sign In
            </Button>
          </Form>
        </FormContainer>
        <Row className="py-3">
          <Col>
            New to VisualFin?{" "}
            <Link
              to="/register"
              // to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
