const users = {};

const userModel = {
    isValid(username) {
        return Boolean(username && username.match(/^[A-Za-z0-9_]+$/));
    },
    registerUser(username) {
        users[username] = username;
    },
};

module.exports = userModel;
