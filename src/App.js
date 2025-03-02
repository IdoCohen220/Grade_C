import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import GradeCalculator from "./pages/GradeCalculator";
import Results from "./pages/Results";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="navbar">
        <h2>📊 Grade Calculator</h2>
        <div>
          <Link to="/">🏠 Home</Link>
          <Link to="/calculator">📝 Calculator</Link>
          <Link to="/results">📊 Results</Link>
        </div>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<GradeCalculator />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
