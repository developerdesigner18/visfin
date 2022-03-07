// Bootstrap
import { Container, Navbar } from "react-bootstrap";
import { LOGO_DARK } from "../AppConfig";

const Header = () => {
  return (
    <header className="border__visfin border__visfin--bottom">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <div className="header__logo">
              <img src={LOGO_DARK} alt="VisFin Logo" />
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
