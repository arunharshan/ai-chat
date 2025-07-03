const serverless = require("serverless-http");
const app = require("../index"); // Import the app with .handler exported

module.exports = serverless(app);