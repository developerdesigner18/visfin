import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Components
import FormContainer from "../components/FormContainer";
import Message from "../components/Message/Message";
import Loader from "../components/Loader/Loader";
// Bootstrap
import { Button, Col, Form, Row } from "react-bootstrap";
// Hooks
import useLocalStorage from "../hooks/useLocalStorage";
// Constants
import { LOGO_LIGHT, USER_INFO } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useLocalStorage("userInfo");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    if (email !== USER_INFO.email || password !== USER_INFO.password) {
      setError("Wrong Email or password");
    } else {
      setUserInfo({
        email,
      });
      navigate("/");
    }
    setLoading(false);
  };

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

        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}

        <FormContainer>
          <Form onSubmit={handleSignIn}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              className="mt-3"
              type="submit"
              variant="primary"
              disabled={loading}
            >
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
