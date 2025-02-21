const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for frontend communication
app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Example endpoint
app.post('/calculate-grade', (req, res) => {
  const { studentName, marks } = req.body;
  // Dummy grade calculation logic
  const grade = marks >= 50 ? 'Pass' : 'Fail';
  res.json({ studentName, grade });
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
