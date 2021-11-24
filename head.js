const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

function head(array) {
  console.log(array[0]);
}

console.log(assertEqual("1", "2"));

console.log(assertEqual(head([5,6,7]), 5));


assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// assertEquals(argument1, arguement2)
