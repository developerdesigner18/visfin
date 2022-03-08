import { Routes, Route, BrowserRouter } from "react-router-dom";
// Bootstrap
import { Container } from "react-bootstrap";
// Pages
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectSummary from "./pages/ProjectSummary";
import ProjectFinance from "./pages/ProjectFinance";
import BuildCashflows from "./pages/BuildCashflows";
import SummaryKpis from "./pages/SummaryKpis";
import Esg from "./pages/Esg";
import NotFound from "./pages/NotFound";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-detail/:name" element={<ProjectDetail />} />
          <Route path="/project-summary" element={<ProjectSummary />} />
          <Route exact path="/project-finance" element={<ProjectFinance />} />
          <Route exact path="/build-cashflows" element={<BuildCashflows />} />
          <Route exact path="/summary-kpis" element={<SummaryKpis />} />
          <Route exact path="/esg-and-sustainability" element={<Esg />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
