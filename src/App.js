import Header from "./components/Header";
import Home from "./screens/Home";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default App;
