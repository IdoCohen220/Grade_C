import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.css";

function GradeCalculator() {
  const [name, setName] = useState("");
  const [grade1, setGrade1] = useState("");
  const [grade2, setGrade2] = useState("");
  const [grade3, setGrade3] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const calculateGrade = () => {
    const grades = [grade1, grade2, grade3].filter((g) => g !== "").map(Number);
    if (grades.length === 0) {
      setError("⚠️ Please enter at least one grade.");
      return;
    }

    const average = (grades.reduce((sum, g) => sum + g, 0) / grades.length).toFixed(2);
    let letterGrade = "F";
    if (average >= 90) letterGrade = "A";
    else if (average >= 80) letterGrade = "B";
    else if (average >= 70) letterGrade = "C";
    else if (average >= 60) letterGrade = "D";

    // ✅ Retrieve previous results from localStorage
    const previousResults = JSON.parse(localStorage.getItem("gradeHistory")) || [];
    
    // ✅ Add the new result to the history
    const newResult = { name, average, letterGrade, date: new Date().toLocaleString() };
    const updatedResults = [newResult, ...previousResults]; // Keep latest at top

    // ✅ Save updated results
    localStorage.setItem("gradeHistory", JSON.stringify(updatedResults));

    // ✅ Navigate to results page
    navigate("/results");
  };

  return (
    <div className="calculator-container">
      <h1>📊 Grade Calculator</h1>

      {error && <p className="error-message">{error}</p>}

      <input type="text" placeholder="Enter Student Name" value={name} onChange={(e) => setName(e.target.value)} />

      <input type="number" placeholder="Semester 1 Grade" value={grade1} onChange={(e) => setGrade1(e.target.value)} />
      <input type="number" placeholder="Semester 2 Grade" value={grade2} onChange={(e) => setGrade2(e.target.value)} />
      <input type="number" placeholder="Semester 3 Grade (Optional)" value={grade3} onChange={(e) => setGrade3(e.target.value)} />

      <button className="calculate-button" onClick={calculateGrade}>📊 Calculate</button>
      <button className="back-button" onClick={() => navigate("/")}>🏠 Home</button>
    </div>
  );
}

export default GradeCalculator;
