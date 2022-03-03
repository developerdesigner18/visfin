import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">VisualFin</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
