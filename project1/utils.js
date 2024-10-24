const wordList = require('./words');

const getRandomWord = () => {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

const createNewGameState = () => ({
    secretWord: getRandomWord(),
    guesses: [],
    hasWon: false,
    lastGuess: null,
    invalidGuess: false
});

const calculateMatchCount = (guess, secretWord) => {
    let count = 0;
    const guessLetters = guess.split('');
    let secretLetters = secretWord.split('');

    guessLetters.forEach(letter => {
        const index = secretLetters.indexOf(letter);
        if (index !== -1) {
            count++;
            secretLetters.splice(index, 1);
        }
    });
    return count;
};

module.exports = { getRandomWord, createNewGameState, calculateMatchCount };
