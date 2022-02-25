const net = require('net');

//Establish conection with game server

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Change incoming data to utf8
  conn.setEncoding('utf8');

  // Print a message as soon as connection is established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: H.S');

    //conn.write("Move: up");
    
  });
  
  //Handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

// Exporting connect function
module.exports = connect;