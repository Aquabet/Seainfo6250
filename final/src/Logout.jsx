import React from 'react';

function Logout({ onLogout }) {
    return (
        <div className="logout">
            <h1>Welcome to Anonymous Chatting room</h1>
            <form className="logout-form" onSubmit={onLogout}>
                <button type="submit" className="logout-btn">Logout</button>
            </form>
        </div>
    );
}

export default Logout;
