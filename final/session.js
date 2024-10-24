import { v4 as uuid } from 'uuid';

const sessions = {};

export const sessionModel = {
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
