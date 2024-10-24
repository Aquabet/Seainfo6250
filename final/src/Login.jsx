import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username);
    setUsername('');
  };

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <label className='login-label'>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
