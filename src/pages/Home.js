import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // ✅ Importing the new CSS file

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <FaGraduationCap className="icon" />
      <h1>Welcome to the Grade Calculator</h1>
      <p>Calculate your final grades with ease!</p>
      <button className="start-button" onClick={() => navigate("/calculator")}>
        Start Now
      </button>
    </div>
  );
}

export default Home;
