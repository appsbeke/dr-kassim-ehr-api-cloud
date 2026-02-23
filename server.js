// Dr. Kassim EHR API - Working Entry Point
const app = require('./index.js');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Dr. Kassim EHR API running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});