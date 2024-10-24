let loginUsers = {};

export const loginUsersModel = {
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
