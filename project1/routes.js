const express = require('express');
const { sessions, userStates, initializeOrUpdateUserState } = require('./userState');
const { calculateMatchCount } = require('./utils');
const { loginForm, renderGamePage, renderErrorPage } = require('./views');
const wordList = require('./words');

const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.user) {
        const username = req.user;
        const userState = userStates[username];
        if (!userState) {
            userStates[username] = createNewGameState();
            return res.redirect('/');
        }
        res.send(renderGamePage(username, userStates[username]));
    } else {
        res.send(loginForm());
    }
});

router.post('/login', (req, res) => {
    const { username } = req.body;

    if (!username || !username.match(/^[a-z0-9]+$/i)) {
        return res.status(400).send(renderErrorPage("Invalid username. Usernames must be alphanumeric."));
    }

    if (username.toLowerCase() === 'dog') {
        return res.status(403).send(renderErrorPage("This username is not allowed to log in."));
    }

    const sid = uuidv4();
    if (!sessions[sid]) {
        sessions[sid] = username;
        if (!userStates[username]) {
            initializeOrUpdateUserState(username, true);
        }
        console.log(`User ${username} logged in. Secret word: ${userStates[username].currentGame.secretWord}`);
    }
    res.cookie('sid', sid, { httpOnly: true }).redirect('/');
});

router.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    if (sid) {
        delete sessions[sid];
    }
    res.clearCookie('sid').redirect('/');
});

router.post('/guess', (req, res) => {
    const sid = req.cookies.sid;
    const username = sessions[sid];

    if (!username || !userStates[username]) {
        return res.redirect('/');
    }

    const userState = userStates[username];
    const gameState = userState.currentGame;

    const guess = req.body.guess.trim().toLowerCase();
    gameState.invalidGuess = false;

    if (!wordList.includes(guess)) {
        gameState.invalidGuess = true;
        gameState.lastGuess = guess;
    } else {
        const secretWordLower = gameState.secretWord.toLowerCase();
        if (guess === secretWordLower) {
            gameState.hasWon = true;
            gameState.lastGuess = guess;
            userState.guessCount += 1;
        } else {
            const matchCount = calculateMatchCount(guess, secretWordLower);
            gameState.guesses.push({ word: guess, matchCount: matchCount });
            gameState.lastGuess = guess;
        }
    }

    res.redirect('/');
});

router.post('/new-game', (req, res) => {
    const sid = req.cookies.sid;
    if (!sid || !sessions[sid]) {
        return res.status(401).send(loginForm());
    }

    const username = sessions[sid];
    initializeOrUpdateUserState(username, true);
    console.log(`New game started for ${username}. Secret word: ${userStates[username].currentGame.secretWord}`);

    res.redirect('/');
});

module.exports = router;
