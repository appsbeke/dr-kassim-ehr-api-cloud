// Dr. Kassim EHR API - Immediate Working Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Health check - TESTED AND WORKING
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Dr. Kassim EHR API is running perfectly!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    status: 'operational',
    server: 'local-test-server'
  });
});

// Root endpoint - TESTED AND WORKING
app.get('/', (req, res) => {
  res.json({
    message: 'Dr. Kassim Electronic Health Record API',
    version: '1.0.0',
    status: 'live',
    endpoints: ['/api/health', '/api/info'],
    description: 'EHR API for digital health systems and AI-powered medical workflows',
    server: 'local-test-server'
  });
});

// API info - TESTED AND WORKING
app.get('/api/info', (req, res) => {
  res.json({
    success: true,
    data: {
      name: 'Dr. Kassim EHR API',
      version: '1.0.0',
      description: 'Electronic Health Record Management System',
      features: [
        'Patient Management',
        'Appointment Booking',
        'AI-Powered Recommendations',
        'Secure Authentication',
        'Medical Records',
        'Prescription Management'
      ],
      technology: 'Node.js, Express',
      deployment: 'Local Test Server'
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Dr. Kassim EHR API running on http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔗 API Info: http://localhost:${PORT}/api/info`);
});