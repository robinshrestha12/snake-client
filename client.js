const net = require("net");
//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host:"192.168.0.22",
    port: 50541
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on('connect', ()=>{
    console.log("Successfully connected to game server");
    conn.write("Name: RST");

  });
  //  conn.on('connect', ()=>{
  //   setInterval(() => {
  //     conn.write( "Move: up" );
  //     console.log( "Successfully moved up" );
  //    conn.write( "Move: left" );
  //     console.log( "Successfully moved left" );
  //     conn.write( "Move: down" );
  //     console.log( "Successfully moved down" );
  //    conn.write( "Move: right" );
  //     console.log( "Successfully moved right" );
  //   }, 2000);
  //  });

  //  conn.on('connect', ()=>{
  //    setTimeout(() => {
  //     conn.on('connect', ()=>{
  //       setInterval(() => {
  //         conn.write( "Move: left" );
  //         console.log( "Successfully moved left" );
  //       }, 2000);
  //      });
  //    }, 1000);
  //   setInterval(() => {
  //     conn.write( "Move: left" );
  //     console.log( "Successfully moved left" );
  //   }, 2000);
  // });

    
  //     conn.write("Move: up");
  //  });
  // conn.on('connect', ()=>{
  //   console.log( "Successfully moved down" );
  //   conn.write("Move: down");
  // });
  // conn.on('connect', ()=>{
  //   console.log( "Successfully Moved left" );
  //   conn.write("Move: left");
  //   });
  // conn.on('connect', ()=>{
  //   console.log( "Successfully moved right." );
  //   conn.write("Move: right");
  // });
  //interpret incoming data as text
  conn.setEncoding("utf-8");
  return conn;
};


module.exports = {
   connect
};