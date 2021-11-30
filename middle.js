const median = function (arr) {
  if (arr.length == 0) {
    return numbers;
  } else if (arr.length == 1 || arr.length == 2) {
    return [];
  } else if (arr.length % 2 == 1) {
    return arr[Math.floor(arr.length / 2)];
  } else if (arr.length % 1 == 0) {
    return [
      arr[Math.floor(arr.length / 2) - 1],
      arr[Math.floor(arr.length / 2)],
    ];
  }
  // let sortedArray = [];
  // return sortedArray.push(arr.sort());
};

// console.log(median([10, 20, 50, 40]));

module.exports = median;
