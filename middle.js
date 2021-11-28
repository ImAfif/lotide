const middle = function (numbers) {
  //let middle = Math.floor(numbers.length / 2);
  if (numbers.length == 0) {
    return numbers;
  } else if (numbers.length == 1 || numbers.length === 2) {
    return [];
  } else if (numbers.length % 2 == 1) {
    return numbers[Math.floor(numbers.length / 2)];
  } else if (numbers.length % 2 == 0) {
    return [
      numbers[Math.floor(numbers.length / 2) - 1],
      numbers[Math.floor(numbers.length / 2)],
    ];
  }
};

//middle([1, 2, 3, 4, 5]);
//middle([1, 2, 3]);
console.log(middle([9, 8, 6, 8, 10, 11]));
