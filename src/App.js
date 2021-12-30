import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Footer from "./components/Footer";
import HomeNavbar from "./components/HomeNavbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Propose from "./pages/Propose";
import Proposals from "./pages/Proposals";
import Governance from "./pages/Governance";
import GovernanceProposal from "./pages/GovernanceProposal";
import './styles/output.css'

function App() {
  const location = useLocation()

  return (
    <>
      {
        location.pathname === "/propose" || location.pathname === "/proposals" ||
          location.pathname === "/governance-proposals" || location.pathname === "/governance-proposal" ? (
          <Navbar />
        ) : <HomeNavbar />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propose" element={<Propose />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/governance-proposals" element={<Governance />} />
        <Route path="/governance-proposal" element={<GovernanceProposal />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
