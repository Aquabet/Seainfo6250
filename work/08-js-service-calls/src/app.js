import state, {
    login,
    logout,
    setWord,
    setError
} from './state';
import { fetchSession, fetchLogin, fetchWord } from "./services";
import { CLIENT } from './constants';
import render from "./render";
import { addLoginListener, addLogoutListener, addWordListener } from './listener';

const appEl = document.querySelector('#app');
render({ state, appEl });
addLoginListener({ state, appEl });
addLogoutListener({ state, appEl });
addWordListener({ state, appEl });
checkForSession();

async function checkForSession() {
    try {
        const session = await fetchSession();
        login(session.username);
        render({ state, appEl });

        const wordResponse = await fetchWord();
        setWord(wordResponse.storedWord);
        render({ state, appEl });
    } catch (err) {
        if (err?.error === CLIENT.NO_SESSION || err?.error === 'auth-missing') {
            logout();
        } else {
            setError(err?.error || "ERROR");
        }
        render({ state, appEl });
    }
}
