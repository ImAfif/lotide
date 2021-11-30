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

// console.log(eqArrays([10, 10], [1, 10]));

module.exports = eqArrays;
