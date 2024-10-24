const { createNewGameState } = require('./utils');

const sessions = {};
const userStates = {};

const initializeOrUpdateUserState = (username, isNewGame = false) => {
    if (!userStates[username]) {
        userStates[username] = {
            guessCount: 0,
            gamesPlayed: 0,
            pastGuesses: [],
            currentGame: createNewGameState()
        };
    } else if (isNewGame) {
        userStates[username].currentGame = createNewGameState();
        userStates[username].gamesPlayed += 1;
    }
};

module.exports = { sessions, userStates, initializeOrUpdateUserState };
