// users input set to all lower case and
// assign to variable name INPUT
var input = proccess.argv[2].toLowerCase();

// require file system and assign it to variable fs
var fs = require('fs');

// if user input is the word "basic" then assign
// it to a variable and require the Basic.js file
// then run function basic from Basic.js
if (input === "basic") {
  var basic = require("./Basic");
  basic();
// else if input is the word "cloze" then assign
// it to a variable and require the Cloze.js file
// then run function cloze from Cloze.js
} else if (input === "cloze") {
  var cloze = require("./Cloze");
  cloze();
// else run basic as a defualt
} else {
  basic;
  basic();
}
