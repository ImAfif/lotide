const assertEqual = function(actual, expected) {
  if (actual === expected){
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`
  } else { 
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  }
}
console.log(assertEqual("1", "2"))

const tail = function(array){
  return array.slice(1)
}


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
