const SECRET_WORD = 'RECAT';

export function compareWord(guess) {
    guess = guess.toUpperCase();
    const letterCount = {};
  
    for (const letter of SECRET_WORD) {
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
  