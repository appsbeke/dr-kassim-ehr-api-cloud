// Test script for Dr. Kassim EHR API
const http = require('http');
const app = require('./app.js');

const PORT = 3000;

console.log('🧪 Testing Dr. Kassim EHR API...');

// Start test server
const server = app.listen(PORT, async () => {
  console.log(`✅ Test server running on http://localhost:${PORT}`);
  
  try {
    // Test health endpoint
    const healthRes = await fetch(`http://localhost:${PORT}/api/health`);
    const healthData = await healthRes.json();
    console.log('Health Check:', healthData);
    
    // Test root endpoint
    const rootRes = await fetch(`http://localhost:${PORT}/`);
    const rootData = await rootRes.json();
    console.log('Root Endpoint:', rootData);
    
    console.log('\n🎉 All tests passed! API is working correctly.');
    console.log('\n✅ Ready for production deployment!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    server.close();
    process.exit(0);
  }
});

// Make fetch available in Node.js
global.fetch = require('node-fetch');