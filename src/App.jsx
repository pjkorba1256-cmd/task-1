import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<AuthPage />} />
        <Route path="/main" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;