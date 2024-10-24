const messages = [
    { sender: "Amit", text: "You up?" },
    { sender: "Bao", text: "Good" },
];

const chatModel = {
    addMessage({ sender, text }) {
        messages.push({ sender, text });
    },
    getMessages() {
        return messages;
    },
};

module.exports = chatModel;
