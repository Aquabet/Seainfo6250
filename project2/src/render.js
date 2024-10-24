export function renderApp({ appEl, state }) {
    const html = `
    ${getErrorHtml(state)}
    <div class="login-info">
    ${getLoginHtml(state)}
    ${getLogoutHtml(state)}
    </div>
    `;
    appEl.innerHTML = html;
}

export function renderChat({ chatEl, state }) {
    const html = `
        ${getLoadingHtml(state)}
        ${getUserList(state)}
        ${getMessageList(state)}
        `;
    chatEl.innerHTML = html;
}

export function renderOutGoing({ outGoingEl, state }) {
    const html = `
    ${getOutgoingHtml(state)}
    `;
    outGoingEl.innerHTML = html;
}

function getErrorHtml(state) {
    if (!state || !state.error) {
        return "";
    }
    return `
      <div class="error">${state.error}</div>
  `;
}

function getLoadingHtml(state) {
    if (!state.isChatPending) {
        return "";
    }
    return `
    <div class="waiting">Loading Chat...</div>
  `;
}

function getLoginHtml(state) {
    if (state.isLoginPending) {
        return `
      <div class="waiting">Loading user...</div>
    `
    }
    if (state.isLoggedIn) {
        return `<div class="login-user">${state.username}</div>`;
    }
    return `
    <div class="login">
        <form class="login-form" action="#/login">
            <label class="form-label">
                <span>Username:</span>
                <input class="login-username" name="username"/>
            </label>
            <button type="submit" class="form-btn">Login</button>
        </form>
    </div>
    `;
}

function getLogoutHtml(state) {
    if (!state.isLoggedIn) {
        return "";
    }
    return `
    <div class="logout">
        <form class="logout-form" action="#/logout">
            <button type="submit" class="logout-btn">Logout</button>
        </form>
    </div>
    `;
}

function getOutgoingHtml(state) {
    if (!state.isLoggedIn) {
        return "";
    }
    return `
    <div class="outgoing">
        <form class="chat-form" action="/chat" method="POST">
            <input class="message" name="message" value="" placeholder="Enter message to send"/>
            <button type="submit">Send</button>
        </form>
    </div>
    `;
}

function getMessageList(state) {
    if (!state.isLoggedIn) {
        return "";
    }
    if (state.isLoginPending) {
        return `
    <div class="waiting">Loading Messages...</div>
  `
    }
    const { messages } = state;
    if (!messages) {
        return "";
    }
    return (
        `<ol class="messages">
    <h1>Messages</h2>
    ` +
        messages
            .map(
                (message) => `
        <li>
          <div class="message">
            <div class="sender-info">
                <img class="avatar" alt="avatar of ${message.sender}" src="header.png"/>
                <span class="username">${message.sender}</span>
            </div>
            <p class="message-text">${message.text}</p>
          </div>
        </li>
      `
            )
            .join("") +
        `</ol>`
    );
}

function getUserList(state) {
    if (!state.isLoggedIn) {
        return "";
    }
    return (
        `
    <ul class="users">
    <h1>Current Login Users</h2>
    ` +
        Object.values(state.users)
            .map(
                (user) => `
            <li>
                <div class="user">
                  <img class="avatar" alt="avatar of ${user}" src="header.png"/>
                  <span class="username">${user}</span>
                </div>
            </li>
            `
            )
            .join("") +
        `</ul>`
    );
}
