const wordList = require('./words');

const loginForm = () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Login</title>
          <link rel="stylesheet" href="/css/login.css">
      </head>
      <body>
          <h1>Word Guessing Game</h1>
          <form action="/login" method="post">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required>
              <button type="submit">Login</button>
          </form>
      </body>
      </html>
    `;
};

const renderGamePage = (username, userState) => {
    const { currentGame, guessCount } = userState;
    const { guesses, secretWord, hasWon, lastGuess, invalidGuess } = currentGame;

    let guessedWordsList = guesses.map(guess =>
        `<li>${guess.word} (matched letters: ${guess.matchCount})</li>`
    ).join('');

    if (guessedWordsList.length === 0) {
        guessedWordsList = '<li>No guesses yet</li>';
    }

    const lastGuessInfo = invalidGuess ?
        `<p>Your last guess '${lastGuess}' was invalid.</p>` :
        guesses.length ? `<p>Last Guess: ${lastGuess} (matched letters: ${guesses[guesses.length - 1].matchCount})</p>` : '';

    const winMessage = hasWon ? `<p>Congratulations! You've guessed the secret word: ${secretWord}</p>` : '';

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Word Guessing Game</title>
            <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
            <div class="container">
                <h2>Welcome, ${username}</h2>
                <h3>Possible Words:</h3>
                <p>${wordList.join(', ')}</p>
                <h3>Guessed Words:</h3>
                <ul>${guessedWordsList}</ul>
                <p>Guess Count: ${guessCount}</p>
                ${lastGuessInfo}
                ${winMessage}
                ${!hasWon ? '<form action="/guess" method="POST"><input type="text" name="guess" required><button type="submit">Make a Guess</button></form>' : ''}
                <form action="/logout" method="POST"><button type="submit">Logout</button></form>
                <form action="/new-game" method="POST"><button type="submit">Start a New Game</button></form>
            </div>
        </body>
        </html>
    `;
};

const renderErrorPage = (errorMessage) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Error</title>
            <link rel="stylesheet" href="/css/error.css">
        </head>
        <body>
            <div class="message">${errorMessage}</div>
            <a href="/" class="back-link">Try Again</a>
        </body>
        </html>
    `;
};

module.exports = { loginForm, renderGamePage, renderErrorPage };
