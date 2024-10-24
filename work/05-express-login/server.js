const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const sessions = {};
const userData = {};

const authController = require('./auth')(sessions, userData);
const dataController = require('./data')(userData);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

function loginForm() {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Login</title>
          <link rel="stylesheet" href="/css/main.css">
      </head>
      <body>
          <form action="/login" method="post">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required>
              <button type="submit">Login</button>
          </form>
      </body>
      </html>
    `;
}

function dataPage(username, word) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Data Page</title>
          <link rel="stylesheet" href="/css/main.css">
      </head>
      <body>
          <p>Welcome, ${username}</p>
          <form action="/logout" method="post">
              <button type="submit">Logout</button>
          </form>
          <form action="/update" method="post">
              <label for="word">Stored Word:</label>
              <input type="text" id="word" name="word" value="${word}" required>
              <button type="submit">Update</button>
          </form>
      </body>
      </html>
    `;
}

app.use((req, res, next) => {
    const sid = req.cookies.sid;
    if (sid && sessions[sid]) {
        req.user = sessions[sid].username;
    }
    next();
});

app.get('/', (req, res) => {
    if (req.user) {
        const word = userData[req.user] || '';
        res.send(dataPage(req.user, word));
    } else {
        res.send(loginForm());
    }
});


app.post('/login', authController.login);
app.post('/logout', authController.logout);
app.post('/update', dataController.updateStoredWord);
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
