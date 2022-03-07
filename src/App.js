import { Routes, Route, BrowserRouter } from "react-router-dom";
// Bootstrap
import { Container } from "react-bootstrap";
// Components
import Header from "./components/Header";
import Home from "./screens/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
