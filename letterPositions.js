function eqArrays(Array1, Array2) {
  //if the arrays are not equal in length
  if (Array1 !== Array2) {
    return false;
  }
  arrayone = [];
  //return false
  for (let j = 0; j < Array2.length; j++) {
    if (Array1 === Array2) {
      return true;
    }
  }

  for (let i = 0; i < Array1.length; i++) {
    if (Array1[i] === Array2[i]) {
      return true;
    } else {
      return false;
    }
  }
}

const assertArraysEqual = (thing1, thing2) => {
  if (eqArrays(thing1, thing2) === true) {
    console.log("working, PASSED");
  } else {
    console.log("NOT WORKING");
  }
};

const letterPositions = function (sentence) {
  answer = [];
  sendspacehere = [];

  for (let i = 0; i < sentence.length; i++) {
    if (i !== " ") {
      sendspacehere.push(i);
    }
    if (answer === " ") {
    }
    if (answer === sentence[i]) {
      answer[sentence[i].push[i]];
    } else {
      answer[sentence[i]] = [i];
    }
  }
  return answer;
};

console.log(assertArraysEqual(letterPositions("test, one two three"), "test"));
// assertArraysEqual(letterPositions("hey mate").e, [1, 7]);

// console.log(letterPositions("hey mate").e) resutls: [1, 7];
