//const net = require("net");
//const { connect } = require("./client");
//connect;
// setup interface to handle user input from stdin
let connection; //Stores the active TCP connection object.
const setupInput = function(conn) {
  connection=conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  // your code here
  //const 
  if (key === '\u0003') {
    process.exit();
  }
  if(key ==='w'){
    connection.write("Move: up");
    console.log("W pressed");
  }
  if(key ==='a'){
    connection.write("Move: left");
    console.log("a pressed");
  }
  if(key ==='s'){
    connection.write("Move: down");
    console.log("s pressed");
  }
  if(key ==='d'){
    connection.write("Move: right");
    console.log("d pressed");
  }
};

module.exports={
  setupInput
}