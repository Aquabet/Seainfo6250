function render({ state, appEl }) {
    const html = `
        ${getErrorHtml(state)}
        ${state.isLoggedIn ? getLogoutHtml(state) : getLoginHtml()}
        ${state.isLoggedIn ? getWordHtml(state) : ''}
    `;
    appEl.innerHTML = html;
}

function getLoginHtml() {
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
    return `
        <div class="logout">
            <form class="logout-form" action="#/logout">
                <span>Logged in as ${state.username}</span>
                <button type="submit" class="logout-btn">Logout</button>
            </form>
        </div>
    `;
}

function getWordHtml(state) {
    return `
        <div class="word">
            <p>Stored Word: ${state.word || 'Not set'}</p>
            <form class="word-form" action="#/store">
                <label>
                    <span>Update your stored word: </span>
                    <input class="word-input" name="storedWord"/>
                </label>
                <button class="form-btn" type="submit">Update</button>
            </form>
        </div>
    `;
}

function getErrorHtml(state) {
    if (!state.error) return '';
    return `<div class="error">${state.error}</div>`;
}

export default render;
