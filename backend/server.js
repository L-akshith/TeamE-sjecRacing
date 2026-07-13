const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// Security: Disable X-Powered-By header to prevent server fingerprinting
app.disable('x-powered-by');

// Security: Restrict CORS to allowed origins only
// Set ALLOWED_ORIGINS env variable to a comma-separated list of allowed domains
// Example: ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
  : ['http://localhost', 'http://localhost:80'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (server-to-server, same-origin, curl)
    if (!origin) return callback(null, true);
    if (ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

// Security: Limit request body size to 10KB to prevent oversized payloads
app.use(express.json({ limit: '10kb' }));

// Security: Rate limiting — max 10 contact submissions per IP per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many submissions from this IP. Please try again later.' },
});

// Helper: Sanitize input by stripping HTML tags
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// Helper: Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Data directory for persistent storage (mounted as Docker volume)
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Endpoint to handle contact form submissions
app.post('/api/contact', contactLimiter, (req, res) => {
  const name = sanitize(req.body.name);
  const email = sanitize(req.body.email);
  const message = sanitize(req.body.message);

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  // Enforce maximum field lengths
  if (name.length > 100) {
    return res.status(400).json({ error: 'Name must be 100 characters or less.' });
  }
  if (email.length > 254) {
    return res.status(400).json({ error: 'Email must be 254 characters or less.' });
  }
  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message must be 2000 characters or less.' });
  }

  const submission = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  const dataPath = path.join(DATA_DIR, 'submissions.json');
  let submissions = [];

  try {
    if (fs.existsSync(dataPath)) {
      const fileData = fs.readFileSync(dataPath, 'utf8');
      submissions = JSON.parse(fileData || '[]');
    }
  } catch (err) {
    console.error('Error reading submissions file:', err.message);
  }

  submissions.push(submission);

  try {
    fs.writeFileSync(dataPath, JSON.stringify(submissions, null, 2));
    console.log('[API] New contact submission saved.');
    return res.status(200).json({ message: 'Submission successful!' });
  } catch (err) {
    console.error('Error writing submission to file:', err.message);
    return res.status(500).json({ error: 'Failed to save submission.' });
  }
});

// SECURITY: The GET /api/contact/submissions endpoint has been REMOVED.
// It previously exposed all contact submissions (including PII) without authentication.
// To view submissions, access the data/submissions.json file directly on the server.

app.listen(PORT, () => {
  console.log(`Backend API server running on port ${PORT}`);
});
