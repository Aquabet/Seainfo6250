import { useState } from 'react';
import Login from './Login';
import Game from './Game';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (user) => {
        setUsername(user);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setUsername('');
        setIsLoggedIn(false);
    };

    return (
        <div className="app">
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <Game username={username} onLogout={handleLogout} />
            )}
        </div>
    );
}

export default App;
