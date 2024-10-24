"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare(word, guess) {  // DO NOT MODIFY
  word = word.toUpperCase();
  guess = guess.toUpperCase();
  const letterCount = {};

  for (const letter of word) {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  let matchCount = 0;
  for (const letter of guess) {
    if (letterCount[letter] && letterCount[letter] >= 1) {
      matchCount++;
      letterCount[letter]--;
    }
  }

  return matchCount;
}
