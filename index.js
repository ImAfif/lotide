const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");

// const _ = require("./index");

let cow = "moo";
let horse = "haaay";
let car = "vroom vroom";

let noise = {
  cow,
  horse,
  car,
};

console.log(noise);

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
};
