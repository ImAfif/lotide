const median = require("../middle");
const assert = require("chai").assert;

describe("Returns middle number, if the number is odd, return middle two.", () => {
  it("Returns middle numbers, if number is odd, returns middle two", () => {
    assert.strictEqual(median([10, 20, 30]), 20);
  });
});

console.log(median([10, 20, 30]));
