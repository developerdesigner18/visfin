import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <div className="header__logo">
              <img src="/images/logo.png" alt="VisFin Logo" />
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
