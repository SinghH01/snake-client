// Import connect function from client module
const connect = require("./client");

// Import function to handle input
const setupInput = require("./input");

console.log('Connection ...');
connect();
setupInput();