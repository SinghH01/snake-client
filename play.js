// Import connect function from client module
const connect = require("./client");

console.log('Connection ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  // Event Listener for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  // If key is " Ctrl+ c" exit the program
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();