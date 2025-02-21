import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables for form inputs
  const [studentName, setStudentName] = useState('');
  const [semester1Grade, setSemester1Grade] = useState('');
  const [semester2Grade, setSemester2Grade] = useState('');
  const [semester3Grade, setSemester3Grade] = useState('');
  const [finalGrade, setFinalGrade] = useState(null);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Parse grades and handle optional semester3
    const grades = [];
    if (semester1Grade) grades.push(parseFloat(semester1Grade));
    if (semester2Grade) grades.push(parseFloat(semester2Grade));
    if (semester3Grade) grades.push(parseFloat(semester3Grade));

    // Validate grades
    if (grades.length === 0) {
      setError('Please enter at least one semester grade.');
      return;
    }

    const averageGrade = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

    // Calculate final grade based on the average
    let letterGrade = '';
    if (averageGrade >= 90) letterGrade = 'A';
    else if (averageGrade >= 80) letterGrade = 'B';
    else if (averageGrade >= 70) letterGrade = 'C';
    else if (averageGrade >= 60) letterGrade = 'D';
    else letterGrade = 'F';

    setFinalGrade({ average: averageGrade, letterGrade });
    setError(''); // Clear error if everything is valid
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Semester Grade Average Calculator</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Student Name:
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Semester 1 Grade:
              <input
                type="number"
                value={semester1Grade}
                onChange={(e) => setSemester1Grade(e.target.value)}
                required
                min="0"
                max="100"
              />
            </label>
          </div>

          <div>
            <label>
              Semester 2 Grade:
              <input
                type="number"
                value={semester2Grade}
                onChange={(e) => setSemester2Grade(e.target.value)}
                required
                min="0"
                max="100"
              />
            </label>
          </div>

          <div>
            <label>
              Semester 3 Grade (Optional):
              <input
                type="number"
                value={semester3Grade}
                onChange={(e) => setSemester3Grade(e.target.value)}
                min="0"
                max="100"
              />
            </label>
          </div>

          <button type="submit">Calculate Average Grade</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error if any */}

        {finalGrade && (
          <div>
            <h3>{studentName}'s Average Grade: {finalGrade.average.toFixed(2)}</h3>
            <p>Yearly grade: {finalGrade.letterGrade}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
