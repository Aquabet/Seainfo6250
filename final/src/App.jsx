import { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import Chat from './Chat';
import Outgoing from './Outgoing';
import ErrorDisplay from './ErrorDisplay';
import { fetchLogin, fetchLogout, fetchMessages, fetchPostMessage } from './services.js';
import './app.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPending, setIsLoginPending] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState({});

  const handleLogin = (username) => {
    setIsLoginPending(true);
    fetchLogin(username)
      .then(() => {
        setUsername(username);
        setError();
        setIsLoggedIn(true);
        setIsLoginPending(false);
        fetchMessages()
          .then(setMessages)
          .catch(() => setError('Failed to fetch messages'));
      })
      .catch(err => {
        setError(err.error || 'Login failed');
        setIsLoginPending(false);
      });
  };

  const handleLogout = () => {
    fetchLogout()
      .then(() => {
        setError();
        setIsLoggedIn(false);
        setMessages([]);
        setUsers({});
      })
      .catch(err => {
        setError(err.error || 'Logout failed');
      });
  };

  const handleSendMessage = (message) => {
    fetchPostMessage(message)
      .then(newMessages => {
        setMessages(newMessages);
      })
      .catch(err => {
        setError(err.error);
      });
  };

  return (
    <div className="app">
      <ErrorDisplay error={error} />
      <div className="login-info">
        {!isLoggedIn ? (
          <div>
            <h1>Anonymous Chatting Room</h1>
            <Login onLogin={handleLogin} isLoginPending={isLoginPending} />
          </div>
        ) : (
          <Logout onLogout={handleLogout} />
        )}
      </div>
      {isLoggedIn && (
        <>
          <h4>LoggedIn as:{username}</h4>
          <Chat users={users} messages={messages} />
          <Outgoing onSend={handleSendMessage} />
        </>
      )}
      <div></div>
    </div>
  );
}

export default App;
