const net = require('net');

//Establish conection with game server

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Change incoming data to utf8
  conn.setEncoding('utf8');
  
  //function to handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

// Exporting connect function
module.exports = connect;