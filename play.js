const net = require("net");
//establishes a connection with the game server
const connect = function(){
  const conn = net.createConnection({
    host:"192.168.0.22",
    port: 50541
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  //interpret incoming data as text
  conn.setEncoding("utf-8");

  return conn;
};

console.log("Connecting ...");
connect();
