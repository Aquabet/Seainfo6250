import { renderApp, renderChat, renderOutGoing } from "./render.js";
import { addLoginListener, addLogoutListener, addPostMessageListener } from "./listeners.js";
import { checkForSession } from "./sessionManagement.js";
import { state } from "./state.js";

const appEl = document.querySelector("#app");
const chatEl = document.querySelector("#chat");
const outGoingEl = document.querySelector("#outgoing");

renderApp({ appEl, state });
renderChat({ chatEl, state });
renderOutGoing({ outGoingEl, state });

addLoginListener({ appEl, chatEl, outGoingEl });
addLogoutListener({ appEl, chatEl, outGoingEl });
addPostMessageListener({ appEl, chatEl, outGoingEl });

checkForSession({ appEl, chatEl, outGoingEl });
