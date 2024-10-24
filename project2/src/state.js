import { MESSAGES } from "./constants.js";

export const state = {
    isLoggedIn: false,
    isLoginPending: false,
    isChatPending: false,
    username: "",
    error: "",
    users: {},
    messages: [],
};

export function waitOnLogin() {
    updateState({ isLoginPending: true, error: '' });
}

export function waitOnChat() {
    updateState({ isChatPending: true, error: '' });
}

export function login(username) {
    updateState({ isLoggedIn: true, username, isLoginPending: false, error: '' });
}

export function logout() {
    updateState({ isLoggedIn: false, username: '', users: {}, messages: [] });
}

export function setLoginUsers(users) {
    updateState({ users, isChatPending: false, error: '' });
}

export function setMessages(messages) {
    updateState({ messages, isChatPending: false, error: '' });
}

export function setError(error) {
    updateState({ error: MESSAGES[error] || MESSAGES.default, isLoginPending: false, isChatPending: false });
}

function updateState(updates) {
    Object.keys(updates).forEach(key => {
        state[key] = updates[key];
    });
}