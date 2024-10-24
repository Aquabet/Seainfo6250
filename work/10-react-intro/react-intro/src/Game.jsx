import { useState } from 'react';
import { compareWord } from './wordCompare';
import './Game.css';

function Game({ username, onLogout }) {
    const [word, setWord] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setWord(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (word.length === 5) {
            if (word.toUpperCase() == 'RECAT') {
                setMessage(`${word} is the secret word!`);
            } else {
                const result = compareWord(word.toUpperCase());
                setMessage(`${word} has ${result} letters in common`);
            }
        } else {
            setMessage(`${word} is not a valid word`);
        }
    };

    return (
        <div className="game">
            <p>Welcome, {username}!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={word} onChange={handleChange} maxLength="5" placeholder="Enter 5 letter word" />
                <button type="submit">Check</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default Game;
