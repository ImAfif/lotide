const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};
console.log(assertEqual("1", "1"));

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    console.log(itemsToCount[item], "test");
    //if names exist in all items, we want to give it a one
    if (!results[item] && itemsToCount[item] == true) {
      results[item] = 1;
    } else if (results[item]) {
      results[item] += 1;
    }
    //if there's more than one same name, add one to the original number
    //if name has false, dont add one leave as undefined
    //firstName= results[item]
  }
  console.log(results);
  return results;
};

const firstNames = [
  "Karl",
  "Karl",
  "Karl",
  "Karl",
  "Karl",
  "Karl",
  "Salima",
  "Agouhanna",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Karima",
  "Karima",
  "Karima",
  "Karima",
  "Karima",
];
const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

// In JavaScript, a primitive (primitive value, primitive data type) is
// data that is not an object and has no methods. There are 7 primitive data
// types: string, number, bigint, boolean, undefined, symbol, and null.
