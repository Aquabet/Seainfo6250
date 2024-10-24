import React, { useState } from 'react';

function Outgoing({ onSend }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (message) {
            onSend(message);
            setMessage('');
        }
    };

    return (
        <div className="outgoing">
            <form className="chat-form" onSubmit={handleSubmit}>
                <input
                    className="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter message to send"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Outgoing;
