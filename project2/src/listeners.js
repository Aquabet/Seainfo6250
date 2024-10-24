import { fetchLogin, fetchLogout, fetchMessages, fetchPostMessage } from "./services.js";
import { renderApp, renderChat, renderOutGoing } from "./render.js";
import { state, login, logout, setError, setLoginUsers, setMessages, waitOnChat, waitOnLogin } from "./state.js";
import { checkForSession, pollData } from "./sessionManagement.js";

export function addLoginListener({ appEl, chatEl, outGoingEl }) {
    appEl.addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("login-form")) {
            const usernameInput = appEl.querySelector(".login-username");
            const username = usernameInput.value;
            usernameInput.value = '';
            waitOnLogin();
            renderApp({ appEl, state });
            fetchLogin(username)
                .then(users => {
                    login(username);
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
                    pollData({ appEl, chatEl, outGoingEl, state });
                })
                .catch(err => {
                    setError(err.error);
                    logout();
                    renderApp({ appEl, state });
                });
        }
    });
}

export function addLogoutListener({ appEl, chatEl, outGoingEl }) {
    appEl.addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("logout-form")) {
            fetchLogout()
                .then(() => {
                    logout();
                })
                .catch(err => {
                    setError(err.error);
                    renderApp({ appEl, state });
                })
                .finally(() => {
                    checkForSession({ appEl, chatEl, outGoingEl });
                })
        }
    });
}


export function addPostMessageListener({ appEl, chatEl, outGoingEl }) {
    outGoingEl.addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("chat-form")) {
            const messageInput = outGoingEl.querySelector(".message");
            const message = messageInput.value;
            messageInput.value = '';
            fetchPostMessage(message)
                .then(messages => {
                    setMessages(messages);
                    renderChat({ chatEl, state });
                })
                .catch(err => {
                    setError(err.error);
                    renderApp({ appEl, state });
                });
        }
    });
}
