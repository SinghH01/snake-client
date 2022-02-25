
// Stores the active TCP connection object
let connection;

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
  }
};

module.exports = setupInput;