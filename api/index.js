const app = require('./index.js');

module.exports = (req, res) => {
  // Create a simple server that uses the Express app
  const server = app.listen();
  return server(req, res);
};