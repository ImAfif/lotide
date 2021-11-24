const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

function eqArrays(Array1, Array2) {
  //if the arrays are not equal in length
  if (Array1.length !== Array2.length) {
    return false;
  }
  //if the ith element of Array 1 === the ith element of Array 2

  for (let i = 0; i < Array1.length; i++) {
    if (Array1[i] !== Array2[i]) {
      return false;
    }
  }
  return true;
}

// step 1
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// step 2
// console.log(assertEqual(true, true)) //true

console.log(assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false));

console.log(assertEqual(eqArrays([1, 3, 4], [1, 2, 3]), true));

//console.log(assertEqual("1", "2")) // argiument = "1", argument 2 = "2"
