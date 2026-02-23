// Dr. Kassim EHR API - Working Vercel Function
module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const url = req.url;

    // Health check endpoint
    if (url === '/api/health' && req.method === 'GET') {
      return res.status(200).json({
        success: true,
        message: 'Dr. Kassim EHR API is running perfectly!',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        status: 'operational',
        deployment: 'Vercel Cloud'
      });
    }

    // Root endpoint
    if (url === '/' && req.method === 'GET') {
      return res.status(200).json({
        message: 'Dr. Kassim Electronic Health Record API',
        version: '1.0.0',
        status: 'live',
        endpoints: ['/api/health'],
        description: 'EHR API for digital health systems and AI-powered medical workflows',
        deployment: 'Vercel Cloud'
      });
    }

    // 404 handler
    return res.status(404).json({
      error: 'Not found',
      available: ['/api/health', '/']
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
};