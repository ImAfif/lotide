const range = function (arr) {
  /* IMPLEMENT ME */
  let lowestNum = Math.min(...arr);
  let highestNum = Math.max(...arr);

  return highestNum - lowestNum;
};

console.log(range([10, 20, 30, 40, 50, 5]));
