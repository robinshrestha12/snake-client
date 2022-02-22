//importing the required modules
const net = require("net");
const {IP, PORT} = require("./constants");
//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on("data", (data) => {//getting server data
    console.log("Server says: ", data);
  });
  conn.on('connect', ()=>{ // getting connection information
    console.log("Successfully connected to game server");
    conn.write("Name: RST");
  });
  conn.setEncoding("utf-8");
  return conn;
};

module.exports = {
  connect
};