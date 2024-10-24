import { fetchLogin, fetchLogout, fetchPostWord, fetchWord } from "./services";
import render from "./render";
import { login, logout, setError, setWord } from "./state";
import { CLIENT } from './constants';

export async function addLoginListener({ state, appEl }) {
    appEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!e.target.classList.contains("login-form")) {
            return;
        }

        const username = appEl.querySelector(".login-username").value;
        try {
            const { username: loggedInUser } = await fetchLogin(username);
            login(loggedInUser);
            const { storedWord } = await fetchWord();
            setWord(storedWord);
        } catch (err) {
            handleCommonErrors(err);
        } finally {
            render({ state, appEl });
        }
    });
}

export async function addLogoutListener({ state, appEl }) {
    appEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!e.target.classList.contains("logout-form")) {
            return;
        }

        try {
            await fetchLogout();
            logout();
        } catch (err) {
            handleCommonErrors(err);
        } finally {
            render({ state, appEl });
        }
    });
}

export async function addWordListener({ state, appEl }) {
    appEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!e.target.classList.contains("word-form")) {
            return;
        }

        const word = appEl.querySelector(".word-input").value;
        try {
            const { storedWord } = await fetchPostWord(word);
            setWord(storedWord);
        } catch (err) {
            handleCommonErrors(err);
        } finally {
            render({ state, appEl });
        }
    });
}

function handleCommonErrors(err) {
    setError(err?.error || "ERROR");
}
