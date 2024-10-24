import { fetchSession, fetchLoginUsers, fetchMessages } from "./services.js";
import { state, waitOnLogin, login, logout, setLoginUsers, setMessages, setError, waitOnChat } from "./state.js";
import { renderApp, renderChat, renderOutGoing } from "./render.js";
import { SERVER, CLIENT } from "./constants.js";

export function checkForSession({ appEl, chatEl, outGoingEl }) {
    renderApp({ appEl, state });
    renderChat({ chatEl, state });
    renderOutGoing({ outGoingEl, state });
    fetchSession()
        .then(session => {
            waitOnLogin();
            login(session.username);
            renderApp({ appEl, state });
            return fetchLoginUsers();
        })
        .then(users => {
            setLoginUsers(users);
            waitOnChat();
            renderApp({ appEl, state });
            renderChat({ chatEl, state });
            return fetchMessages();
        })
        .then(messages => {
            setMessages(messages);
            renderApp({ appEl, state });
            renderChat({ chatEl, state });
            renderOutGoing({ outGoingEl, state });
            pollData({ appEl, chatEl, outGoingEl });
        })
        .catch(err => {
            if (err?.error === SERVER.AUTH_MISSING) {
                setError(CLIENT.NO_SESSION);
            } else {
                setError(err?.error);
            }
            logout();
            renderApp({ appEl, state });
        });
}

export function pollData({ appEl, chatEl, outGoingEl }) {
    if (!state.isLoggedIn) {
        return;
    }
    fetchLoginUsers()
        .then(users => {
            setLoginUsers(users);
            return fetchMessages();
        })
        .then(messages => {
            setMessages(messages);
            renderChat({ chatEl, state });
        })
        .catch(err => {
            setError(err?.error);
            renderApp({ appEl, state });
        })
        .finally(() => {
            setTimeout(() => pollData({ appEl, chatEl, outGoingEl }), 5000);
        });
}