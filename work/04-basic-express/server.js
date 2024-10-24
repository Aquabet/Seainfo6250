const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat'); // "chat" holds all the non-web logic for managing users/messages
const chatWeb = require('./chat-web'); // "chat-web" holds the templates for the generated HTML

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(chatWeb.chatPage(chat));
});


app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  const { username, text } = req.body; // Extract 'username' and 'text' from the request body
  if (username && text) {
    chat.addMessage({ sender: username, text }); // Use the addMessage function from chat.js
  }
  res.redirect('/'); // Redirect to the home page
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
