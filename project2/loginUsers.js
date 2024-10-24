let loginUsers = {};

const loginUsersModel = {
    addLoginUsers(username) {
        loginUsers[username] = username;
    },
    getLoginUsers() {
        return loginUsers;
    },
    deleteLoginUsers(username) {
        delete loginUsers[username];
    },
};

module.exports = loginUsersModel;
