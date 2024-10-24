import { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    // A username is allowlisted in the frontend code
    const allowlist = ['admin', 'brett', 'jiaxian'];

    const handleChange = (event) => {
        setUsername(event.target.value);
        setErrorMessage('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username) {
            setErrorMessage('Please enter a username.');
            return;
        } else if(!username.match(/^[A-Za-z0-9_]+$/)) {
            setErrorMessage('Please enter a valid username.');
            return;
        }

        if (!allowlist.includes(username)) {
            setErrorMessage(`${username} is not a valid user`);
            return;
        }

        onLogin(username);
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={handleChange}
                    placeholder="Enter username"
                />
                <button type="submit">Login</button>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </form>
        </div>
    );
}

export default Login;
