// Dr. Kassim EHR API - Vercel Serverless Function
const http = require('http');

const server = http.createServer((req, res) => {
  // Set headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle OPTIONS
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  const url = req.url;

  // Health check endpoint
  if (url === '/api/health' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      success: true,
      message: 'Dr. Kassim EHR API is running perfectly!',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      status: 'operational',
      deployment: 'Vercel Cloud'
    }));
    return;
  }

  // Root endpoint
  if (url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      message: 'Dr. Kassim Electronic Health Record API',
      version: '1.0.0',
      status: 'live',
      endpoints: ['/api/health'],
      description: 'EHR API for digital health systems and AI-powered medical workflows',
      deployment: 'Vercel Cloud'
    }));
    return;
  }

  // 404 handler
  res.statusCode = 404;
  res.end(JSON.stringify({
    error: 'Not found',
    available: ['/api/health', '/']
  }));
});

module.exports = (req, res) => {
  server.emit('request', req, res);
};