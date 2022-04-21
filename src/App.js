import { Routes, Route, BrowserRouter } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectSummary from "./pages/ProjectSummary";
import ProjectFinance from "./pages/ProjectFinance";
import BuildCashflows from "./pages/BuildCashflows";
import SummaryKpis from "./pages/SummaryKpis";
import Esg from "./pages/Esg";
import NotFound from "./pages/NotFound";
// Components
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-detail/:name" element={<ProjectDetail />} />
        <Route path="/project-summary" element={<ProjectSummary />} />
        <Route exact path="/project-finance" element={<ProjectFinance />} />
        <Route exact path="/build-cashflows" element={<BuildCashflows />} />
        <Route exact path="/summary-kpis" element={<SummaryKpis />} />
        <Route exact path="/esg-and-sustainability" element={<Esg />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
