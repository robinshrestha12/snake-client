
const net = require("net");
const {IP, PORT} =require("./constants");
//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    //host:"192.168.0.22",
   // port: 50541
   host: IP,
   port: PORT
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on('connect', ()=>{
    console.log("Successfully connected to game server");
    conn.write("Name: RST");

  });
    
  conn.setEncoding("utf-8");
  return conn;
};


module.exports = {
   connect
};