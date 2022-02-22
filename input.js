const {actionKeys} = require('./constants');
// setup interface to handle user input from stdin
let connection; //Stores the active TCP connection object.
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  stdin.on("data", handleUserInput); //data callback
  return stdin;
};
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key in actionKeys) { //using keys from object imported
    connection.write(actionKeys[key]);
    console.log("Pressed ", key);
  }
  
};

module.exports = {
  setupInput
};