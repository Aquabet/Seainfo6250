import React from 'react';

function Chat({ messages }) {
    return (
        <div className='chat-area'>
            <h1>Messages</h1>
            <ol className="messages">
                {messages.map((message, index) => (
                    <li key={index}>
                        <div className="message">
                            <div className="sender-info">
                                <img className="avatar" src="avatar.png" alt={`avatar of ${message.sender}`} />
                                <span className="username">{message.sender}</span>
                            </div>
                            <p className="message-text">{message.text}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Chat;
