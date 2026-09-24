const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  const submission = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
    ip: req.ip || req.headers['x-forwarded-for'] || 'unknown'
  };

  // Save to a local JSON file in the container
  const dataPath = path.join(__dirname, 'submissions.json');
  let submissions = [];

  try {
    if (fs.existsSync(dataPath)) {
      const fileData = fs.readFileSync(dataPath, 'utf8');
      submissions = JSON.parse(fileData || '[]');
    }
  } catch (err) {
    console.error('Error reading submissions file:', err);
  }

  submissions.push(submission);

  try {
    fs.writeFileSync(dataPath, JSON.stringify(submissions, null, 2));
    console.log(`[API] New contact submission from ${name} (${email}) saved.`);
    return res.status(200).json({ message: 'Submission successful!' });
  } catch (err) {
    console.error('Error writing submission to file:', err);
    return res.status(500).json({ error: 'Failed to save submission.' });
  }
});

// Endpoint to list submissions (useful for verification)
app.get('/api/contact/submissions', (req, res) => {
  const dataPath = path.join(__dirname, 'submissions.json');
  try {
    if (fs.existsSync(dataPath)) {
      const fileData = fs.readFileSync(dataPath, 'utf8');
      return res.status(200).json(JSON.parse(fileData || '[]'));
    }
  } catch (err) {
    console.error('Error reading submissions:', err);
  }
  return res.status(200).json([]);
});

app.listen(PORT, () => {
  console.log(`Backend API server running on port ${PORT}`);
});
