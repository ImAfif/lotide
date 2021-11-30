const assert = require("chai").assert;
const evens = require("../tail");

describe("#tail", () => {
  it("Returns even numbers", () => {
    assert.deepEqual(
      evens([1, 2, 3, 4, 5, 7, 10, 14, 17, 18]),
      [2, 4, 10, 14, 18]
    );
  });
});
