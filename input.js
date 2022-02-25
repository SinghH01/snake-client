
// Stores the active TCP connection object
let connection;

// Setup for user input
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  // Event Listener for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

// Function to handle user input
const handleUserInput = function(key) {

  // If key is " Ctrl+ c" exit the program
  if (key === '\u0003') {
    process.exit();
  
  // Implement WASD Movement
  } else if (key === "w" || key === "W") {
    connection.write("Move: up");
  } else if (key === "a" || key === "A") {
    connection.write("Move: left");
  } else if (key === "s" || key === "S") {
    connection.write("Move: down");
  } else if (key === "d" || key === "D") {
    connection.write("Move: right");

    //special keys to send canned messages to the server
  } else if (key === "1") {
    connection.write("Say: Nice");
  } else if (key === "2") {
    connection.write("Say: Haha");
  } else if (key === "3") {
    connection.write("Say: Good Game");
  }
};

module.exports = setupInput;