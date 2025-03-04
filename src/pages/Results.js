import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Results.css";

function Results() {
  const navigate = useNavigate();
  const [gradeHistory, setGradeHistory] = useState([]);

  // ✅ Load history
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("gradeHistory")) || [];
    setGradeHistory(savedData);
  }, []);

  // ✅ Career suggestions based on grades
  const getCareerSuggestions = (letterGrade) => {
    switch (letterGrade) {
      case "A":
        return ["Software Engineer", "Doctor", "Data Scientist", "Pilot"];
      case "B":
        return ["Business Analyst", "Marketing Manager", "Mechanical Engineer"];
      case "C":
        return ["Graphic Designer", "Technician", "Sales Representative"];
      case "D":
        return ["Security Officer", "Delivery Driver", "Retail Associate"];
      case "F":
        return ["Entry-Level Assistant", "Warehouse Worker", "Freelancer"];
      default:
        return [];
    }
  };

  return (
    <div className="results-container">
      <h1>🎓 Final Grade Results</h1>

      {gradeHistory.length > 0 ? (
        <>
          <div className="results-card">
            <h2>{gradeHistory[0].name}</h2>
            <p>Your latest average grade:</p>
            <h3 className="grade">{gradeHistory[0].average}</h3>
            <h4 className="letter-grade">Final Grade: {gradeHistory[0].letterGrade}</h4>
          </div>

          {/* ✅ Show Career Suggestions */}
          <div className="career-suggestions">
            <h3>💼 Career Suggestions</h3>
            <ul>
              {getCareerSuggestions(gradeHistory[0].letterGrade).map((job, index) => (
                <li key={index}>🔹 {job}</li>
              ))}
            </ul>
          </div>

          {/* ✅ Show Past Results */}
          <div className="history">
            <h3>📜 Previous Results</h3>
            <ul>
              {gradeHistory.slice(1).map((result, index) => (
                <li key={index}>
                  <strong>{result.name}</strong> - {result.average} ({result.letterGrade}) on {result.date}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>No data available. Please enter your grades first.</p>
      )}

      <button className="recalculate-button" onClick={() => navigate("/calculator")}>🔄 Recalculate</button>
      <button className="home-button" onClick={() => navigate("/")}>🏠 Home</button>
    </div>
  );
}

export default Results;
