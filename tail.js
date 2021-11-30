const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// const evens = numbers.filter(function (num) {
//   return num % 2 === 0;
// });

const evens = function (numbers) {
  let numb = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numb.push(numbers[i]);
    }
  }
  return numb;
};

// console.log(evens(numbers));

module.exports = evens;

// const evens = function (numbers) {

//   return numbers % 2 === 0

// }
