import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LandingPage from "./pages/LandingPage";
import LastPage from "./pages/LastPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/last" element={<LastPage />} />
      </Routes>
    </Router>
  );
}

export default App;