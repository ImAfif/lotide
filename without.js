function assertArrayEqual(Array1, Array2) {
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
function without(source, itemsToRemove) {
  /*
  steps:
  0. create an array, newArrayThatHasElementsFromBoth, that will contain the common elements from both source and itemsToRemove
  1. loop over source
  2. loop over itemsToRemove (nested-loop)
  3. make a new array, sourceCopy that is a clone of source (we don't want to modify source)
  4. loop over newArrayThatHasElementsFromBoth and remove its elements from sourceCopy by using splice() and indexOf()
  */

  // step 0
  let newArrayThatHasElementsFromBoth = [];

  // step 1
  // loop over source
  for (let i = 0; i < source.length; i++) {
    // step 2
    // loop over itemsToRemove
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        newArrayThatHasElementsFromBoth.push(source[i]);
      }
    }
  }

  // step 3
  let sourceCopy = [];
  for (let i = 0; i < source.length; i++) {
    sourceCopy.push(source[i]);
  }

  // step 4
  for (let i = 0; i < newArrayThatHasElementsFromBoth.length; i++) {
    sourceCopy.splice(
      sourceCopy.indexOf(newArrayThatHasElementsFromBoth[i]),
      1
    );
  }

  // console.log(source);
  // console.log(sourceCopy);
  return sourceCopy;
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(assertArrayEqual(words, ["hello", "world", "lighthouse"]));

const words2 = ["ben", "apple", "pie"];
without(words, ["apple"]);
console.log(assertArrayEqual(words, ["ben", "apple", "pie"]));

const words2False = ["ben", "apple", "pie"];
without(words, ["apple"]);
console.log(assertArrayEqual(words, ["ben", "pie"]));

//research filter

function tail(array) {
  tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push[i];
  }
  return tailArray;
}