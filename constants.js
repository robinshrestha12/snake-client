//Setting up IP and PORT
const IP = "192.168.0.22";
const PORT = 50541;

//Adding movement keys to constants.
const actionKeys = {
  "w": "Move: up",
  "a": "Move: left",
  "s": "Move: down",
  "d": "Move: right",
  "i": "Say: Hello",
  "j": "Say: Jack",
  "k": "Say: KiKi",
  "l": "Say: Blah",
};

module.exports = {
  IP,
  PORT,
  actionKeys
};
