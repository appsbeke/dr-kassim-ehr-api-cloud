// Dr. Kassim EHR API - Tested Working Version
const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Dr. Kassim EHR API is running perfectly!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    status: 'operational'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Dr. Kassim Electronic Health Record API',
    version: '1.0.0',
    status: 'live',
    endpoints: ['/api/health'],
    description: 'EHR API for digital health systems and AI-powered medical workflows'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    path: req.originalUrl,
    availableEndpoints: ['/api/health', '/']
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  });
});

// Export for serverless
module.exports = app;
module.exports.handler = serverless(app);