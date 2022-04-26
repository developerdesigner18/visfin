import { Routes, Route, BrowserRouter } from "react-router-dom";
// Pages
// import Home from "./pages/Home";
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
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* <Route path="/" element={<Projects />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Projects />} />

        <Route
          path="/project-detail/:name"
          element={
            <ProtectedRoute>
              <ProjectDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project-summary"
          element={
            <ProtectedRoute>
              <ProjectSummary />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/project-finance"
          element={
            <ProtectedRoute>
              <ProjectFinance />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/build-cashflows"
          element={
            <ProtectedRoute>
              <BuildCashflows />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/summary-kpis"
          element={
            <ProtectedRoute>
              <SummaryKpis />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/esg-and-sustainability"
          element={
            <ProtectedRoute>
              <Esg />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
