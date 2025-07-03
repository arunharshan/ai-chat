const app = require("../index"); // Import the app with .handler exported
const serverless = require("serverless-http");

module.exports = serverless(app);