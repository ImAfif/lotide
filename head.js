// const assertEqual = require("./assertEqual");

const head = function (array) {
  return array[0];
};
// function head(array) {
//   return console.log(array[0]);
// }

// console.log(assertEqual("1", "1"));

// console.log(assertEqual(5, 5));

console.log(head([1, 2, 3]));

// assertEquals(argument1, arguement2)

module.exports = head;
