const countLetters = function (string) {
  //what we neeed to do is input the sentence in here
  // then we need to loop through the sentence
  // then we need to return the word
  // for every letter,
  var total = {};
  for (var i = 0; i < string.length; i++) {
    let amount = string.charAt(i);
    if (total[amount]) {
      total[amount]++;
    } else {
      total[amount] = 1;
    }
  }
  return total;
};

console.log(countLetters("LLLL HL"));
