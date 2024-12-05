import React, { useState } from 'react';
import Login from './Login';
import Reviews from './Reviews';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (success) => {
    setIsLoggedIn(success);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? <Reviews /> : <Login onLogin={handleLogin} />}
    </div>
  );
}
