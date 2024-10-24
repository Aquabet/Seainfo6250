const uuid = require('uuid').v4;

const sessions = {};

const sessionModel = {
    setSession(username) {
        const sid = uuid();
        sessions[sid] = { username };
        return sid;
    },
    getUsername(sid) {
        return sessions[sid]?.username;
    },
    deleteSession(sid) {
        delete sessions[sid];
    },
};

module.exports = sessionModel;
