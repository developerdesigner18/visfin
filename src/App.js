import Header from "./components/Header";
import Home from "./screens/Home";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
