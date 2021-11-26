function eqArrays(Array1, Array2) {
  //if the arrays are not equal in length
  if (Array1.length != Array2.length) {
    return false;
  }
  //return false
  for (let i = 0; i < Array1.length; i++) {
    if (Array1[i] === Array2[i]) {
      return true;
    } else {
      return false;
    }
  }
}

const words = ["ground", "control", "to", "major", "tom"];

//gary

//tristan

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    // console.log("item BEFORE: ", item);
    // console.log("item AFTER: ", callback(item));
    // console.log("---");
    results.push(callback(item));
  }
  return results;
};
const whatever = function (value) {
  return `I have ${value}`;
};

console.log(map(words, whatever));

console.log(
  eqArrays(map(words, whatever), [
    "I have ground",
    "I have control",
    "I have to",
    "I have major",
    "I have tom",
  ])
);

// const word = words.map(function => {

// })

/*Answers:
const results1 = (words) => {
  return words;
};

console.log(results1(words))

;
*/

function eqArrays(Array1, Array2) {
  //if the arrays are not equal in length
  if (Array1.length != Array2.length) {
    return false;
  }
  //return false
  for (let i = 0; i < Array1.length; i++) {
    if (Array1[i] === Array2[i]) {
      return true;
    } else {
      return false;
    }
  }
}
