#!/usr/bin/env node

/**
 * Module dependencies.
 */
import app from "../app.js";
// var app = require("../app");
console.log("Working");
/**
 * Get port from environment and store in Express.
 */

var PORT = process.env.PORT || 5000;

/**
 * Normalize a port into a number, string, or false.
 */

/**
 * Event listener for HTTP server "error" event.
 */

app.listen(PORT, function () {
  console.log("Listening to PORT" + PORT);
});
